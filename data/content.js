// Contenu structuré extrait du "Manuel Complet de Français" (édition augmentée, 2026).
// Chaque entrée est une unité publiable : un fait, une expression ou une règle,
// prête à devenir un post (Feed) ou une Story.

export const CATEGORIES = {
  anecdote: {
    label: "Anecdote étymologique",
    short: "Étymologie",
    color: "#7C2D3B", // bordeaux
    icon: "Sparkles",
    chapitre: "19.1",
  },
  expression: {
    label: "Expression idiomatique",
    short: "Idiome",
    color: "#B87A24", // moutarde dark
    icon: "MessageCircleQuestion",
    chapitre: "8",
  },
  fauxami: {
    label: "Faux ami",
    short: "Faux ami",
    color: "#334066", // encre 500
    icon: "AlertTriangle",
    chapitre: "4",
  },
  homophone: {
    label: "Homophone",
    short: "Homophone",
    color: "#4F7566", // sauge
    icon: "Ear",
    chapitre: "7",
  },
  intraduisible: {
    label: "Mot intraduisible",
    short: "Intraduisible",
    color: "#A5455A",
    icon: "Gem",
    chapitre: "19.2",
  },
  record: {
    label: "Record insolite",
    short: "Record",
    color: "#5B6890",
    icon: "Trophy",
    chapitre: "19.3",
  },
  vraifaux: {
    label: "Vrai ou faux",
    short: "Vrai/Faux",
    color: "#B87A24",
    icon: "CircleHelp",
    chapitre: "19.4",
  },
  devinette: {
    label: "Devinette",
    short: "Devinette",
    color: "#7C2D3B",
    icon: "Puzzle",
    chapitre: "19.5",
  },
  piege: {
    label: "Piège grammatical",
    short: "Piège",
    color: "#5A1F29",
    icon: "ShieldAlert",
    chapitre: "9",
  },
};

let _id = 0;
const nid = (prefix) => `${prefix}-${(_id++).toString(36)}`;

export const ANECDOTES = [
  {
    id: nid("anec"),
    type: "anecdote",
    title: "Poser un lapin",
    caption:
      "Ne pas venir à un rendez-vous… et payer en nature ? Au XIXe siècle, « poser un lapin » désignait le fait de ne rien payer en échange d'une faveur. Le sens a glissé vers l'idée de laisser quelqu'un les mains vides.",
    detail:
      "Fin XIXe siècle : « poser un lapin » = ne pas payer une faveur reçue. D'où l'idée de laisser quelqu'un sans rien — puis, par extension, sans venir au rendez-vous.",
    example: "Elle m'a posé un lapin hier soir.",
  },
  {
    id: nid("anec"),
    type: "anecdote",
    title: "Avoir un coup de foudre",
    caption:
      "Littéralement « un coup de tonnerre » : soudain, violent, impossible à anticiper — exactement comme l'amour au premier regard. Utilisée au sens amoureux dès le XVIIIe siècle.",
    detail:
      "Image empruntée au phénomène météorologique. Passée au sens figuré amoureux au XVIIIe siècle, l'expression a voyagé presque telle quelle dans d'autres langues.",
    example: "Ça a été le coup de foudre dès le premier regard.",
  },
  {
    id: nid("anec"),
    type: "anecdote",
    title: "Filer à l'anglaise",
    caption:
      "Un clin d'œil culturel délicieux : en français, on « part à l'anglaise » pour quitter discrètement une soirée. En anglais... on dit « to take French leave ». Chaque culture blâme l'autre !",
    detail:
      "Miroir linguistique parfait : les Français attribuent la discrétion impolie aux Anglais, et les Anglais la renvoient aux Français.",
    example: "Il a filé à l'anglaise avant la fin de la soirée.",
  },
  {
    id: nid("anec"),
    type: "anecdote",
    title: "Chercher midi à quatorze heures",
    caption:
      "À l'époque des cadrans solaires, associer une heure précise à un autre moment de la journée n'avait aucun sens logique. D'où l'image d'une complication totalement inutile.",
    detail:
      "Née à l'ère des cadrans solaires, où « midi » ne pouvait correspondre à « quatorze heures » : une contradiction absurde devenue synonyme de complication gratuite.",
    example: "Ne cherche pas midi à quatorze heures, c'est évident.",
  },
  {
    id: nid("anec"),
    type: "anecdote",
    title: "Avoir le cafard",
    caption:
      "Le mot « cafard » (l'insecte) a pris au XIXe siècle un sens figuré de mélancolie tenace, popularisé par la littérature de l'époque, avant d'entrer durablement dans la langue courante.",
    detail:
      "Glissement littéraire du XIXe siècle : de l'insecte rampant à l'idée d'une tristesse qui « rampe » elle aussi et ne s'en va pas.",
    example: "Depuis son déménagement, il a le cafard.",
  },
  {
    id: nid("anec"),
    type: "anecdote",
    title: "Tomber dans les pommes",
    caption:
      "L'expression « être dans les pommes » apparaît dans la correspondance de George Sand au XIXe siècle, avec le sens d'être hors d'état — avant d'évoluer vers « s'évanouir ».",
    detail:
      "Attestée chez George Sand avec le sens d'être « hors d'état » ; le sens s'est ensuite précisé pour désigner spécifiquement l'évanouissement.",
    example: "Elle est tombée dans les pommes à cause de la chaleur.",
  },
];

export const EXPRESSIONS = [
  // France — courant
  { region: "France", registre: "courant", title: "Avoir le cafard", sens: "Être triste, déprimé", example: "Depuis son déménagement, il a le cafard." },
  { region: "France", registre: "courant", title: "Poser un lapin à quelqu'un", sens: "Ne pas venir à un rendez-vous", example: "Elle m'a posé un lapin hier soir." },
  { region: "France", registre: "courant", title: "Coûter les yeux de la tête", sens: "Être extrêmement cher", example: "Cet appartement coûte les yeux de la tête." },
  { region: "France", registre: "courant", title: "Avoir un chat dans la gorge", sens: "Avoir la voix enrouée", example: "Excusez-moi, j'ai un chat dans la gorge." },
  { region: "France", registre: "courant", title: "Mettre les pieds dans le plat", sens: "Aborder un sujet délicat sans tact", example: "Il a encore mis les pieds dans le plat en réunion." },
  { region: "France", registre: "courant", title: "Casser les pieds à quelqu'un", sens: "Ennuyer, agacer quelqu'un", example: "Arrête de me casser les pieds avec ça !" },
  { region: "France", registre: "courant", title: "Avoir la pêche", sens: "Être plein d'énergie", example: "Ce matin, j'ai vraiment la pêche." },
  { region: "France", registre: "courant", title: "Il pleut des cordes", sens: "Il pleut très fort", example: "Prends un parapluie, il pleut des cordes." },
  { region: "France", registre: "courant", title: "Chercher midi à quatorze heures", sens: "Compliquer inutilement une chose simple", example: "Ne cherche pas midi à quatorze heures." },
  { region: "France", registre: "courant", title: "Ne pas être dans son assiette", sens: "Se sentir mal, fatigué ou troublé", example: "Il n'a pas l'air dans son assiette aujourd'hui." },
  { region: "France", registre: "courant", title: "Avoir d'autres chats à fouetter", sens: "Avoir des préoccupations plus importantes", example: "Je n'ai pas le temps, j'ai d'autres chats à fouetter." },
  { region: "France", registre: "courant", title: "Tomber dans les pommes", sens: "S'évanouir", example: "Elle est tombée dans les pommes à cause de la chaleur." },
  { region: "France", registre: "courant", title: "Faire la grasse matinée", sens: "Dormir tard le matin", example: "Le dimanche, j'aime faire la grasse matinée." },
  { region: "France", registre: "courant", title: "Raconter des salades", sens: "Mentir, inventer des histoires", example: "Ne l'écoute pas, il raconte des salades." },
  { region: "France", registre: "courant", title: "Mettre son grain de sel", sens: "Donner son avis sans qu'on le demande", example: "Il faut toujours qu'il mette son grain de sel." },
  { region: "France", registre: "courant", title: "Avoir le bras long", sens: "Avoir de l'influence, des relations utiles", example: "Son oncle a le bras long dans ce secteur." },
  { region: "France", registre: "courant", title: "Passer une nuit blanche", sens: "Ne pas dormir de toute la nuit", example: "J'ai passé une nuit blanche pour finir ce rapport." },
  { region: "France", registre: "courant", title: "Filer à l'anglaise", sens: "Partir discrètement, sans dire au revoir", example: "Il a filé à l'anglaise avant la fin de la soirée." },
  { region: "France", registre: "courant", title: "Se prendre un râteau", sens: "Essuyer un refus, souvent amoureux", example: "Il s'est pris un râteau en l'invitant à sortir." },
  { region: "France", registre: "courant", title: "Avoir un poil dans la main", sens: "Être paresseux", example: "Il ne fait jamais rien, il a un poil dans la main." },
  // France — pro
  { region: "France", registre: "professionnel", title: "Avoir le vent en poupe", sens: "Connaître un franc succès, une dynamique favorable", example: "Cette startup a vraiment le vent en poupe." },
  { region: "France", registre: "professionnel", title: "Mettre la clé sous la porte", sens: "Fermer définitivement une entreprise", example: "Faute de clients, le magasin a mis la clé sous la porte." },
  { region: "France", registre: "professionnel", title: "Décrocher un contrat", sens: "Obtenir un contrat après des efforts", example: "L'équipe commerciale a décroché un contrat majeur." },
  { region: "France", registre: "professionnel", title: "Être sur la même longueur d'onde", sens: "Partager le même point de vue", example: "Les deux directeurs sont sur la même longueur d'onde." },
  { region: "France", registre: "professionnel", title: "Faire ses preuves", sens: "Démontrer sa valeur par des résultats concrets", example: "Ce nouveau logiciel a déjà fait ses preuves." },
  { region: "France", registre: "professionnel", title: "Mettre les bouchées doubles", sens: "Accélérer fortement le rythme de travail", example: "Il faut mettre les bouchées doubles avant l'échéance." },
  { region: "France", registre: "professionnel", title: "Avoir carte blanche", sens: "Avoir toute liberté d'action", example: "La direction lui a donné carte blanche pour ce projet." },
  { region: "France", registre: "professionnel", title: "Être au four et au moulin", sens: "Devoir gérer plusieurs tâches à la fois", example: "Depuis le départ de son collègue, elle est au four et au moulin." },
  { region: "France", registre: "professionnel", title: "Faire long feu", sens: "Échouer rapidement, ne pas durer", example: "Ce projet mal préparé a fait long feu." },
  { region: "France", registre: "professionnel", title: "Prendre le taureau par les cornes", sens: "Affronter un problème directement", example: "Face à la crise, il a pris le taureau par les cornes." },
  // France — argot (registre familier, à signaler comme tel)
  { region: "France", registre: "familier", title: "Meuf", sens: "Fille, femme (verlan de « femme »)", example: "C'est la meuf dont je t'ai parlé." },
  { region: "France", registre: "familier", title: "Ouf", sens: "Fou ; « incroyable » (verlan de « fou »)", example: "C'est un truc de ouf, cette histoire !" },
  { region: "France", registre: "familier", title: "Vénère", sens: "Énervé, fâché (verlan)", example: "Il est vénère parce qu'il a raté son train." },
  { region: "France", registre: "familier", title: "Kiffer", sens: "Aimer beaucoup, apprécier", example: "Je kiffe vraiment cette chanson." },
  { region: "France", registre: "familier", title: "Bosser", sens: "Travailler", example: "Je bosse tous les jours jusqu'à dix-huit heures." },
  { region: "France", registre: "familier", title: "Chelou", sens: "Bizarre, étrange (verlan de « louche »)", example: "Cette histoire est vraiment chelou." },
  { region: "France", registre: "familier", title: "Ça déchire", sens: "C'est génial, excellent", example: "Ce concert, ça déchire !" },
  // Québec
  { region: "Québec", registre: "courant", title: "C'est plate", sens: "C'est ennuyeux, c'est dommage", example: "Il pleut encore aujourd'hui, c'est plate." },
  { region: "Québec", registre: "courant", title: "Avoir de la broue dans le toupet", sens: "Être débordé, très occupé", example: "Elle a de la broue dans le toupet cette semaine." },
  { region: "Québec", registre: "courant", title: "Un char", sens: "Une voiture", example: "Mon char est en panne depuis hier." },
  { region: "Québec", registre: "courant", title: "Magasiner", sens: "Faire des achats, faire du shopping", example: "On va magasiner pour trouver un cadeau." },
  { region: "Québec", registre: "courant", title: "Tiguidou", sens: "D'accord, parfait", example: "Tiguidou, on se voit demain matin." },
  { region: "Québec", registre: "courant", title: "Pantoute", sens: "Pas du tout", example: "Je n'aime pas ça pantoute." },
  { region: "Québec", registre: "courant", title: "Bienvenue", sens: "De rien (en réponse à un merci)", example: "— Merci beaucoup ! — Bienvenue !" },
  // Belgique
  { region: "Belgique", registre: "courant", title: "Une fois", sens: "Particule expressive, nuance familière", example: "Viens une fois voir ce que j'ai trouvé." },
  { region: "Belgique", registre: "courant", title: "Septante / nonante", sens: "Soixante-dix / quatre-vingt-dix", example: "Il y avait septante personnes à la conférence." },
  { region: "Belgique", registre: "courant", title: "Un kot", sens: "Une chambre d'étudiant", example: "Elle habite dans un kot près de l'université." },
  { region: "Belgique", registre: "courant", title: "Faire le zigoto", sens: "Faire l'idiot, se donner en spectacle", example: "Arrête de faire le zigoto pendant la réunion !" },
  { region: "Belgique", registre: "courant", title: "Une drache", sens: "Une pluie forte et soudaine", example: "Il y a eu une bonne drache cet après-midi." },
  // Suisse romande
  { region: "Suisse", registre: "courant", title: "Septante / huitante / nonante", sens: "70 / 80 / 90", example: "Il a fêté ses septante ans le mois dernier." },
  { region: "Suisse", registre: "courant", title: "Un natel", sens: "Un téléphone portable", example: "J'ai oublié mon natel à la maison." },
  { region: "Suisse", registre: "courant", title: "Un cornet", sens: "Un sac en plastique", example: "Peux-tu me donner un cornet pour mes courses ?" },
  { region: "Suisse", registre: "courant", title: "Ça joue", sens: "C'est d'accord, ça fonctionne", example: "On se retrouve à midi ? — Ça joue !" },
  // Afrique francophone
  { region: "Afrique", registre: "courant", title: "Une go", sens: "Une fille, une petite amie (nouchi, Côte d'Ivoire)", example: "C'est sa go depuis maintenant un an." },
  { region: "Afrique", registre: "courant", title: "Chicotter", sens: "Frapper, punir (Afrique de l'Ouest)", example: "Le père a chicotté son fils pour cette bêtise." },
  { region: "Afrique", registre: "courant", title: "Un deuxième bureau", sens: "Un amant, une maîtresse", example: "Tout le quartier sait qu'il a un deuxième bureau." },
  { region: "Afrique", registre: "courant", title: "S'enjailler", sens: "S'amuser, faire la fête (nouchi, Côte d'Ivoire)", example: "On va s'enjailler chez des amis ce soir." },
].map((e) => ({
  id: nid("expr"),
  type: "expression",
  title: e.title,
  caption: `${e.sens} — expression ${e.registre === "familier" ? "familière (argot)" : e.registre} de ${e.region}.`,
  detail: e.sens,
  example: e.example,
  region: e.region,
  registre: e.registre,
}));

export const FAUX_AMIS = [
  { langue: "portugais", mot: "Poli", pas: "« Poluído »", oui: "Courtois, bien élevé" },
  { langue: "portugais", mot: "Pretendre", pas: "« Pretender » (avoir l'intention de)", oui: "Faire semblant, revendiquer sans preuve" },
  { langue: "portugais", mot: "Latte", pas: "« Leite » (lait)", oui: "Planche de bois fine" },
  { langue: "portugais", mot: "Vaisselle", pas: "« Vasilha » au sens large", oui: "Ensemble des assiettes, verres, couverts" },
  { langue: "portugais", mot: "Cave", pas: "« Cavar » (creuser)", oui: "Sous-sol, cellier" },
  { langue: "portugais", mot: "Sac", pas: "« Saco » (sens vulgaire au Brésil)", oui: "Sac ordinaire, neutre" },
  { langue: "portugais", mot: "Costume", pas: "« Costume » = habitude", oui: "Complet-veston, tenue" },
  { langue: "anglais", mot: "Actuellement", pas: "« Actually » (en fait)", oui: "En ce moment, maintenant" },
  { langue: "anglais", mot: "Assister à", pas: "« To assist » (aider)", oui: "Être présent à, participer à" },
  { langue: "anglais", mot: "Attendre", pas: "« To attend » (assister à)", oui: "Patienter" },
  { langue: "anglais", mot: "Éventuellement", pas: "« Eventually » (finalement)", oui: "Peut-être, le cas échéant" },
  { langue: "anglais", mot: "Rester", pas: "« To rest » (se reposer)", oui: "Demeurer à un endroit" },
  { langue: "anglais", mot: "Sensible", pas: "« Sensible » (raisonnable)", oui: "Émotif, réceptif" },
  { langue: "anglais", mot: "Librairie", pas: "« Library » (bibliothèque)", oui: "Magasin de livres" },
  { langue: "anglais", mot: "Journée", pas: "« Journey » (voyage)", oui: "La durée du jour" },
  { langue: "anglais", mot: "Blesser", pas: "« To bless » (bénir)", oui: "Faire une blessure" },
].map((f) => ({
  id: nid("fa"),
  type: "fauxami",
  title: f.mot,
  caption: `Ne veut PAS dire ${f.pas}. Veut vraiment dire : ${f.oui}.`,
  detail: `Faux ami français / ${f.langue}.`,
  example: f.oui,
  langue: f.langue,
}));

export const HOMOPHONES = [
  { groupe: "ces / ses / c'est / s'est / sait", ex: "Ces documents sont importants. Il a rangé ses affaires. C'est une bonne idée. Elle s'est levée tôt. Il sait parler trois langues." },
  { groupe: "à / a", ex: "Elle va à Paris. Il a un rendez-vous." },
  { groupe: "ou / où", ex: "Tu préfères le thé ou le café ? Je ne sais pas où il habite." },
  { groupe: "et / est", ex: "Elle est intelligente et travailleuse." },
  { groupe: "leur / leurs", ex: "Je leur ai envoyé le rapport. Ils ont présenté leurs projets." },
  { groupe: "quand / quant / qu'en", ex: "Quand arriveras-tu ? Quant à moi... Qu'en pensez-vous ?" },
  { groupe: "si / s'y / ci", ex: "Si tu veux... Il s'y rend chaque matin. Ce document-ci." },
  { groupe: "on / ont", ex: "On arrivera vers midi. Ils ont fini leur travail." },
  { groupe: "la / l'a / là / las", ex: "Je vois la solution. Elle l'a terminé. Le dossier est là. Il est las de cette situation." },
  { groupe: "cet / cette / sept", ex: "Cet exemple... Cette règle... à sept heures précises." },
  { groupe: "peu / peux / peut", ex: "Il reste peu de temps. Tu peux commencer. Il peut résoudre ce problème." },
  { groupe: "près / prêt / pré", ex: "Le bureau est tout près. Êtes-vous prêt ? Les vaches paissent dans le pré." },
  { groupe: "sans / s'en / sang / cent / sent", ex: "Sans aucune aide. Il s'en va. Le don de sang. Cent participants. Elle sent que..." },
  { groupe: "vert / vers / verre / ver", ex: "Le feu est vert. Il se dirige vers la sortie. Un verre d'eau. Un ver de terre." },
  { groupe: "cour / cours / court / courre", ex: "Les enfants jouent dans la cour. Je suis un cours. Le trajet est court." },
  { groupe: "foie / foi / fois", ex: "Le foie est un organe. En toute bonne foi. Je te l'ai déjà dit deux fois." },
  { groupe: "mer / mère / maire", ex: "On part à la mer. Sa mère est professeure. Le maire a inauguré le parc." },
  { groupe: "sain / saint / sein / ceint", ex: "Un mode de vie sain. Un jour saint. Au sein d'une entreprise." },
  { groupe: "compte / comte / conte", ex: "Il faut tenir compte de cela. Le comte possédait un domaine. Elle raconte un conte." },
  { groupe: "censé / sensé", ex: "Il est censé arriver bientôt. C'est une décision sensée." },
  { groupe: "différend / différent", ex: "Ils ont réglé leur différend. Ce projet est différent." },
  { groupe: "quel(le) / qu'elle", ex: "Quelle heure est-il ? Je pense qu'elle a raison." },
  { groupe: "plutôt / plus tôt", ex: "Il vaut mieux partir plutôt maintenant. Nous sommes arrivés plus tôt." },
  { groupe: "parti / partie / partit", ex: "Il a pris le parti de démissionner. Cette réunion fait partie du programme." },
  { groupe: "amande / amende", ex: "Elle adore les biscuits aux amandes. Il a payé une amende." },
  { groupe: "cou / coup / coût / couds", ex: "Un collier autour du cou. Un coup de téléphone. Le coût du projet. Tu couds cette veste ?" },
  { groupe: "voie / voix / voit", ex: "Cette voie mène au centre-ville. Une voix posée. Il voit la situation." },
  { groupe: "balade / ballade", ex: "Une balade en forêt. Une ballade émouvante." },
  { groupe: "tache / tâche", ex: "Une tache sur la nappe. Cette tâche est prioritaire." },
].map((h) => ({
  id: nid("homo"),
  type: "homophone",
  title: h.groupe,
  caption: `Homophones à ne pas confondre : ${h.groupe}.`,
  detail: h.ex,
  example: h.ex,
}));

export const INTRADUISIBLES = [
  { mot: "Dépaysement", sens: "La sensation, agréable ou déstabilisante, de ne plus être dans son environnement culturel habituel." },
  { mot: "Flâner", sens: "Se promener sans but précis, pour le seul plaisir de la marche et de l'observation." },
  { mot: "Retrouvailles", sens: "La joie particulière de revoir quelqu'un après une longue séparation." },
  { mot: "Terroir", sens: "Le caractère unique qu'un lieu (sol, climat, savoir-faire) donne à un produit alimentaire." },
  { mot: "Sortable", sens: "Une personne suffisamment présentable pour être emmenée en public sans gêne." },
  { mot: "Empêchement", sens: "Un contretemps imprévu qui empêche d'assister à quelque chose de prévu." },
  { mot: "Chez", sens: "Le lieu associé à une personne ou un groupe (« chez moi », « chez les Anglais »)." },
  { mot: "Bricoler", sens: "Réparer ou fabriquer soi-même avec les moyens du bord, par plaisir autant que par nécessité." },
  { mot: "Retrousser (ses manches)", sens: "Se préparer mentalement et physiquement à un effort concret, sans détour." },
].map((m) => ({
  id: nid("intra"),
  type: "intraduisible",
  title: m.mot,
  caption: `Un mot français sans équivalent exact ailleurs : ${m.sens}`,
  detail: m.sens,
  example: m.mot,
}));

export const RECORDS = [
  { titre: "Mot le plus long d'usage courant", detail: "« Anticonstitutionnellement » — 25 lettres, souvent cité comme le mot le plus long de la langue française usuelle." },
  { titre: "Phrase la plus courte de la littérature classique", detail: "« Va ! » — réplique de Chimène dans Le Cid de Corneille (1637)." },
  { titre: "Académie française", detail: "Fondée en 1635 par le cardinal de Richelieu pour codifier et protéger la langue." },
  { titre: "Diffusion internationale", detail: "Le français figure parmi les langues officielles d'une trentaine d'États, répartis sur cinq continents." },
  { titre: "Un mot, deux sens opposés", detail: "« Hôte » désigne à la fois celui qui reçoit et celui qui est reçu — un même mot pour deux rôles inverses." },
  { titre: "Palindrome à tester", detail: "« Ésope reste ici et se repose » se lit rigoureusement de la même façon dans les deux sens." },
].map((r) => ({
  id: nid("rec"),
  type: "record",
  title: r.titre,
  caption: r.detail,
  detail: r.detail,
  example: r.titre,
}));

export const VRAI_FAUX = [
  { q: "Le français est parlé sur les cinq continents.", r: "Vrai" },
  { q: "Toutes les lettres muettes du français sont totalement inutiles.", r: "Faux — elles conservent souvent une trace de l'origine du mot ou permettent une liaison." },
  { q: "« Courriel » est le terme officiellement recommandé par l'Académie française à la place d'« email ».", r: "Vrai" },
  { q: "Le mot « orange » n'a aucune rime parfaite en français.", r: "Vrai, l'un des exemples les plus cités de ce phénomène." },
  { q: "Toutes les expressions contenant un animal appartiennent au registre familier.", r: "Faux — « avoir le bras long » ou « poser un lapin » sont d'usage courant, pas argotique." },
].map((v) => ({
  id: nid("vf"),
  type: "vraifaux",
  title: v.q,
  caption: `Vrai ou faux ? ${v.q}`,
  detail: `Réponse : ${v.r}`,
  example: v.r,
}));

export const DEVINETTES = [
  { d: "Je commence comme « chat », je finis comme « eau », et je suis un logement fortifié.", r: "Château" },
  { d: "On me trouve entre le vin et le verre : je suis un homophone du chiffre 100.", r: "Sang / Cent / Sent" },
  { d: "Un chasseur sachant chasser sait chasser sans son chien.", r: "Virelangue classique — à répéter trois fois vite !" },
  { d: "Les chaussettes de l'archiduchesse sont-elles sèches, archi-sèches ?", r: "Virelangue classique — à répéter trois fois vite !" },
].map((v) => ({
  id: nid("dev"),
  type: "devinette",
  title: v.d,
  caption: v.d,
  detail: `Réponse : ${v.r}`,
  example: v.r,
}));

export const PIEGES = [
  { err: "Malgré que je sois fatigué...", ok: "Bien que je sois fatigué... / Malgré ma fatigue...", exp: "« Malgré que » est critiqué en registre soutenu ; préférez « bien que » (+subjonctif) ou « malgré » (+nom)." },
  { err: "Au jour d'aujourd'hui", ok: "Aujourd'hui / à ce jour", exp: "Pléonasme : « aujourd'hui » contient déjà l'idée de « ce jour »." },
  { err: "Pallier à un problème", ok: "Pallier un problème", exp: "« Pallier » est transitif direct : il ne prend jamais « à »." },
  { err: "Après qu'il soit parti", ok: "Après qu'il est parti / sera parti", exp: "« Après que » est suivi de l'indicatif, contrairement à « avant que »." },
  { err: "Je m'excuse", ok: "Excusez-moi / Je vous prie de m'excuser", exp: "En registre soutenu, on ne s'excuse pas soi-même ; on demande l'excuse à autrui." },
  { err: "Un espèce de problème", ok: "Une espèce de problème", exp: "« Espèce » est toujours féminin, même suivi d'un nom masculin." },
  { err: "Second (liste de plus de deux éléments)", ok: "Deuxième", exp: "« Second » ne s'emploie normalement que lorsqu'il n'y a que deux éléments en tout." },
].map((p) => ({
  id: nid("piege"),
  type: "piege",
  title: p.err,
  caption: `❌ « ${p.err} » → ✅ « ${p.ok} ». ${p.exp}`,
  detail: p.exp,
  example: p.ok,
}));

export function getAllContent() {
  return [
    ...ANECDOTES,
    ...EXPRESSIONS,
    ...FAUX_AMIS,
    ...HOMOPHONES,
    ...INTRADUISIBLES,
    ...RECORDS,
    ...VRAI_FAUX,
    ...DEVINETTES,
    ...PIEGES,
  ];
}

export function getContentById(id) {
  return getAllContent().find((c) => c.id === id) || null;
}

export function getContentByType(type) {
  if (!type || type === "all") return getAllContent();
  return getAllContent().filter((c) => c.type === type);
}
