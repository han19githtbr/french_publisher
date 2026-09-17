# Manuel Complet de Français — Studio social

Une application Next.js qui transforme le contenu du *Manuel Complet de Français*
(grammaire, faux amis, homophones, expressions francophones, anecdotes
étymologiques du chapitre 19...) en posts et stories prêts à publier sur
Instagram et Facebook — avec image générée dynamiquement et légende automatique.

## Fonctionnalités

- **Bibliothèque** : tous les contenus du manuel (anecdotes, expressions,
  faux amis, homophones, mots intraduisibles, records, vrai/faux, devinettes,
  pièges grammaticaux), filtrables et cherchables.
- **Générateur de post** : choisis un contenu, une plateforme (Instagram Feed,
  Instagram Story, Facebook Feed), édite la légende et les hashtags, prévisualise
  l'image générée en direct, puis publie.
- **Génération d'image** : chaque post est composé à la volée (route
  `/api/og`, via `@vercel/og`) — pas d'images statiques, tout est généré à
  partir du texte du manuel, avec une identité visuelle par catégorie.
- **Feed & Stories** : vue façon Instagram (grille + bandeau de stories) et
  vue façon Facebook (fil d'actualité), avec likes et suppression.
- **Persistance MongoDB Atlas** : chaque post publié est enregistré dans une
  base MongoDB (collection `posts`) ; le feed se recharge depuis la base.

## Démarrage

1. Installe les dépendances :

   ```bash
   npm install
   ```

2. Crée un cluster gratuit sur [MongoDB Atlas](https://www.mongodb.com/atlas)
   et récupère ton URI de connexion.

3. Copie `.env.example` en `.env.local` et renseigne ton URI :

   ```bash
   cp .env.example .env.local
   ```

   ```
   MONGODB_URI="mongodb+srv://<user>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority"
   MONGODB_DB="francais_social"
   ```

4. (Optionnel) Peuple le feed avec quelques posts de démonstration :

   ```bash
   npm run seed
   ```

5. Lance le serveur de développement :

   ```bash
   npm run dev
   ```

   Ouvre [http://localhost:3000](http://localhost:3000).

## Configurer MongoDB Atlas pour un déploiement sur Vercel

L'app lit sa connexion via la variable `MONGODB_URI` (et `MONGODB_DB`,
optionnelle). Voici comment préparer Atlas spécifiquement pour Vercel.

### 1. Créer le cluster

1. Va sur [MongoDB Atlas](https://www.mongodb.com/atlas) et crée un compte
   (ou connecte-toi).
2. Crée un projet, puis un cluster gratuit **M0** (largement suffisant pour
   cette app).
3. Attends que le cluster passe au statut "Active" (quelques minutes).

### 2. Créer un utilisateur de base de données

Dans **Database Access** → **Add New Database User** :

- Authentification par mot de passe.
- Note bien le nom d'utilisateur et le mot de passe (tu en auras besoin dans
  l'URI de connexion) — évite les caractères spéciaux non encodés dans le
  mot de passe (`@`, `:`, `/`), ou encode-les en URL si nécessaire.
- Rôle : `Read and write to any database` suffit.

### 3. Autoriser l'accès réseau depuis Vercel

Les fonctions serverless de Vercel n'ont pas d'IP fixe : à chaque exécution,
la requête peut partir d'une IP différente. Dans **Network Access** →
**Add IP Address** :

- Choisis **Allow Access from Anywhere** (`0.0.0.0/0`).
- C'est la méthode standard pour un déploiement Vercel ; l'accès reste
  protégé par l'utilisateur/mot de passe de l'étape précédente.
- Alternative plus intégrée : installe l'app **MongoDB Atlas** depuis la
  [Marketplace Vercel](https://vercel.com/integrations/mongodbatlas), qui
  configure automatiquement les IP autorisées et les variables d'environnement
  à ta place.

### 4. Récupérer l'URI de connexion

Dans **Database** → **Connect** → **Drivers**, copie l'URI au format :

```
mongodb+srv://<user>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
```

Remplace `<user>` et `<password>` par les identifiants créés à l'étape 2.

### 5. Ajouter les variables d'environnement dans Vercel

Dans le dashboard Vercel → ton projet → **Settings** → **Environment
Variables**, ajoute :

| Nom            | Valeur                                              | Environnements                    |
| -------------- | ---------------------------------------------------- | ---------------------------------- |
| `MONGODB_URI`  | l'URI copiée à l'étape 4                             | Production, Preview, Development   |
| `MONGODB_DB`   | `francais_social` (ou le nom de ton choix)           | Production, Preview, Development   |

Coche les trois environnements pour pouvoir tester aussi bien sur les
déploiements de preview (branches / PR) qu'en production. Si tu utilises
l'intégration Marketplace de l'étape 3, ces variables sont déjà pré-remplies.

### 6. Déployer

- Connecte le repo à Vercel (`vercel` en CLI, ou import direct depuis
  GitHub/GitLab dans le dashboard).
- Vercel détecte Next.js automatiquement — aucune configuration de build
  supplémentaire n'est nécessaire.
- Après le premier déploiement (ou après avoir ajouté les variables), relance
  un déploiement (**Redeploy**) pour que les nouvelles variables d'environnement
  soient prises en compte.

### 7. (Optionnel) Peupler la base avant ou après le déploiement

Le script `scripts/seed.mjs` se connecte directement à l'URI qu'on lui donne,
donc tu peux l'exécuter en local en pointant vers Atlas (pas besoin d'être
déployé) :

```bash
MONGODB_URI="mongodb+srv://..." npm run seed
```

### À propos des connexions en environnement serverless

`lib/mongodb.js` réutilise la même connexion tant que l'instance de fonction
serverless reste "chaude" (comportement standard des exemples officiels
Vercel + MongoDB) — inutile de configurer un pool de connexions
supplémentaire pour cette app.

## Structure

```
app/
  page.js                 → Tableau de bord
  bibliotheque/page.jsx   → Bibliothèque de contenus (recherche + filtres)
  generateur/page.jsx     → Générateur de post (choix, édition, aperçu, publication)
  feed/page.jsx           → Feed Instagram / Facebook + Stories
  api/content/route.js    → Liste le contenu du manuel (data/content.js)
  api/posts/route.js      → CRUD des posts (MongoDB)
  api/posts/[id]/route.js → Suppression / like d'un post
  api/og/route.jsx        → Génération d'image de post (@vercel/og)
data/content.js           → Contenu structuré extrait du manuel
lib/mongodb.js            → Connexion MongoDB Atlas
lib/posts.js              → Requêtes MongoDB pour les posts
lib/hashtags.js           → Génération de hashtags par catégorie/région
components/               → Sidebar, cartes, sélecteur de contenu, icônes
scripts/seed.mjs          → Script optionnel de données de démonstration
```

## Ajouter du contenu

Tout le contenu vient de `data/content.js`, organisé par catégorie
(`ANECDOTES`, `EXPRESSIONS`, `FAUX_AMIS`, `HOMOPHONES`, `INTRADUISIBLES`,
`RECORDS`, `VRAI_FAUX`, `DEVINETTES`, `PIEGES`). Pour ajouter un élément,
ajoute une entrée au tableau correspondant : il apparaîtra automatiquement
dans la bibliothèque et le générateur.
