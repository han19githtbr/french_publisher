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
    bgImage: "https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=1200", // Vintage books/library
  },
  expression: {
    label: "Expression idiomatique",
    short: "Idiome",
    color: "#B87A24", // moutarde dark
    icon: "MessageCircleQuestion",
    chapitre: "8",
    bgImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200", // Paris / Cafe
  },
  fauxami: {
    label: "Faux ami",
    short: "Faux ami",
    color: "#334066", // encre 500
    icon: "AlertTriangle",
    chapitre: "4",
    bgImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200", // Contrasting people / connection
  },
  homophone: {
    label: "Homophone",
    short: "Homophone",
    color: "#4F7566", // sauge
    icon: "Ear",
    chapitre: "7",
    bgImage: "https://images.unsplash.com/photo-1516280440502-86105f52427a?q=80&w=1200", // Mirrors / Sound / Reflection
  },
  intraduisible: {
    label: "Mot intraduisible",
    short: "Intraduisible",
    color: "#A5455A",
    icon: "Gem",
    chapitre: "19.2",
    bgImage: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?q=80&w=1200", // Abstract / Poetic landscape
  },
  record: {
    label: "Record insolite",
    short: "Record",
    color: "#5B6890",
    icon: "Trophy",
    chapitre: "19.3",
    bgImage: "https://images.unsplash.com/photo-1521321524388-7576a3a4c0a5?q=80&w=1200", // Peak / Success
  },
  vraifaux: {
    label: "Vrai ou faux",
    short: "Vrai/Faux",
    color: "#B87A24",
    icon: "CircleHelp",
    chapitre: "19.4",
    bgImage: "https://images.unsplash.com/photo-1614036417651-1d451f2fbc5d?q=80&w=1200", // Duality / Questions
  },
  devinette: {
    label: "Devinette",
    short: "Devinette",
    color: "#7C2D3B",
    icon: "Puzzle",
    chapitre: "19.5",
    bgImage: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=1200", // Puzzle / Mystery
  },
  piege: {
    label: "Piège grammatical",
    short: "Piège",
    color: "#5A1F29",
    icon: "ShieldAlert",
    chapitre: "9",
    bgImage: "https://images.unsplash.com/photo-1506546419754-05a5a22851ee?q=80&w=1200", // Path / Trap / Focus
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
    pt_caption:
      "Dar um cano... e pagar em espécie? No século XIX, «poser un lapin» (dar um coelho) significava não pagar em troca de um favor. O sentido mudou para a ideia de deixar alguém de mãos vazias.",
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
    pt_caption:
      "Literalmente «um raio»: repentino, violento, impossível de antecipar — exatamente como o amor à primeira vista. Usada no sentido amoroso desde o século XVIII.",
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
    pt_caption:
      "Um toque cultural delicioso: em francês, dizemos «sair à inglesa» para deixar uma festa discretamente. Em inglês... diz-se «sair à francesa» (to take French leave). Cada cultura culpa a outra!",
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
    pt_caption:
      "Na época dos relógios de sol, associar uma hora exata a outro momento do dia não tinha nenhuma lógica. Daí a imagem de uma complicação totalmente desnecessária (procurar o meio-dia às catorze horas).",
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
    pt_caption:
      "A palavra «cafard» (barata) ganhou no século XIX um sentido figurado de melancolia tenaz, popularizada pela literatura da época, antes de entrar duradouramente na linguagem corrente.",
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
    pt_caption:
      "A expressão «estar nas maçãs» aparece na correspondência de George Sand no século XIX, com o sentido de estar indisposto — antes de evoluir para «desmaiar».",
    detail:
      "Attestée chez George Sand avec le sens d'être « hors d'état » ; le sens s'est ensuite précisé pour désigner spécifiquement l'évanouissement.",
    example: "Elle est tombée dans les pommes à cause de la chaleur.",
  },
];

export const EXPRESSIONS = [
  // France — courant
  { region: "France", registre: "courant", title: "Avoir le cafard", sens: "Être triste, déprimé", pt_sens: "Estar triste, deprimido", example: "Depuis son déménagement, il a le cafard." },
  { region: "France", registre: "courant", title: "Poser un lapin à quelqu'un", sens: "Ne pas venir à un rendez-vous", pt_sens: "Dar o cano em alguém", example: "Elle m'a posé un lapin hier soir." },
  { region: "France", registre: "courant", title: "Coûter les yeux de la tête", sens: "Être extrêmement cher", pt_sens: "Custar os olhos da cara", example: "Cet appartement coûte les yeux de la tête." },
  { region: "France", registre: "courant", title: "Avoir un chat dans la gorge", sens: "Avoir la voix enrouée", pt_sens: "Estar rouco (ter um gato na garganta)", example: "Excusez-moi, j'ai un chat dans la gorge." },
  { region: "France", registre: "courant", title: "Mettre les pieds dans le plat", sens: "Aborder un sujet délicat sans tact", pt_sens: "Tocar num assunto delicado sem tato (dar um fora)", example: "Il a encore mis les pieds dans le plat en réunion." },
  { region: "France", registre: "courant", title: "Casser les pieds à quelqu'un", sens: "Ennuyer, agacer quelqu'un", pt_sens: "Aborrecer, irritar alguém (encher o saco)", example: "Arrête de me casser les pieds avec ça !" },
  { region: "France", registre: "courant", title: "Avoir la pêche", sens: "Être plein d'énergie", pt_sens: "Estar cheio de energia (estar a todo vapor)", example: "Ce matin, j'ai vraiment la pêche." },
  { region: "France", registre: "courant", title: "Il pleut des cordes", sens: "Il pleut très fort", pt_sens: "Está chovendo canivetes (chovendo cordas)", example: "Prends un parapluie, il pleut des cordes." },
  { region: "France", registre: "courant", title: "Chercher midi à quatorze heures", sens: "Compliquer inutilement une chose simple", pt_sens: "Complicar inutilmente uma coisa simples", example: "Ne cherche pas midi à quatorze heures." },
  { region: "France", registre: "courant", title: "Ne pas être dans son assiette", sens: "Se sentir mal, fatigué ou troublé", pt_sens: "Não estar se sentindo bem, estar indisposto", example: "Il n'a pas l'air dans son assiette aujourd'hui." },
  { region: "France", registre: "courant", title: "Avoir d'autres chats à fouetter", sens: "Avoir des préoccupations plus importantes", pt_sens: "Ter coisas mais importantes com que se preocupar", example: "Je n'ai pas le temps, j'ai d'autres chats à fouetter." },
  { region: "France", registre: "courant", title: "Tomber dans les pommes", sens: "S'évanouir", pt_sens: "Desmaiar (cair nas maçãs)", example: "Elle est tombée dans les pommes à cause de la chaleur." },
  { region: "France", registre: "courant", title: "Faire la grasse matinée", sens: "Dormir tard le matin", pt_sens: "Dormir até tarde de manhã", example: "Le dimanche, j'aime faire la grasse matinée." },
  { region: "France", registre: "courant", title: "Raconter des salades", sens: "Mentir, inventer des histoires", pt_sens: "Contar mentiras, inventar histórias (contar saladas)", example: "Ne l'écoute pas, il raconte des salades." },
  { region: "France", registre: "courant", title: "Mettre son grain de sel", sens: "Donner son avis sans qu'on le demande", pt_sens: "Dar palpite sem ser chamado (meter sua pitada de sal)", example: "Il faut toujours qu'il mette son grain de sel." },
  { region: "France", registre: "courant", title: "Avoir le bras long", sens: "Avoir de l'influence, des relations utiles", pt_sens: "Ter influência, ter costas quentes (ter o braço longo)", example: "Son oncle a le bras long dans ce secteur." },
  { region: "France", registre: "courant", title: "Passer une nuit blanche", sens: "Ne pas dormir de toute la nuit", pt_sens: "Passar a noite em claro (passar uma noite branca)", example: "J'ai passé une nuit blanche pour finir ce rapport." },
  { region: "France", registre: "courant", title: "Filer à l'anglaise", sens: "Partir discrètement, sans dire au revoir", pt_sens: "Sair à francesa (fugir à inglesa)", example: "Il a filé à l'anglaise avant la fin de la soirée." },
  { region: "France", registre: "courant", title: "Se prendre un râteau", sens: "Essuyer un refus, souvent amoureux", pt_sens: "Levar um fora (levar uma ancinhada)", example: "Il s'est pris un râteau en l'invitant à sortir." },
  { region: "France", registre: "courant", title: "Avoir un poil dans la main", sens: "Être paresseux", pt_sens: "Ser preguiçoso (ter um pelo na mão)", example: "Il ne fait jamais rien, il a un poil dans la main." },
  // France — pro
  { region: "France", registre: "professionnel", title: "Avoir le vent en poupe", sens: "Connaître un franc succès, une dynamique favorable", pt_sens: "Ter muito sucesso, vento a favor", example: "Cette startup a vraiment le vent en poupe." },
  { region: "France", registre: "professionnel", title: "Mettre la clé sous la porte", sens: "Fermer définitivement une entreprise", pt_sens: "Fechar as portas definitivamente (falir)", example: "Faute de clients, le magasin a mis la clé sous la porte." },
  { region: "France", registre: "professionnel", title: "Décrocher un contrat", sens: "Obtenir un contrat après des efforts", pt_sens: "Conseguir um contrato após muito esforço", example: "L'équipe commerciale a décroché un contrat majeur." },
  { region: "France", registre: "professionnel", title: "Être sur la même longueur d'onde", sens: "Partager le même point de vue", pt_sens: "Estar na mesma sintonia (comprimento de onda)", example: "Les deux directeurs sont sur la même longueur d'onde." },
  { region: "France", registre: "professionnel", title: "Faire ses preuves", sens: "Démontrer sa valeur par des résultats concrets", pt_sens: "Mostrar o seu valor, provar sua capacidade", example: "Ce nouveau logiciel a déjà fait ses preuves." },
  { region: "France", registre: "professionnel", title: "Mettre les bouchées doubles", sens: "Accélérer fortement le rythme de travail", pt_sens: "Dobrar o ritmo de trabalho", example: "Il faut mettre les bouchées doubles avant l'échéance." },
  { region: "France", registre: "professionnel", title: "Avoir carte blanche", sens: "Avoir toute liberté d'action", pt_sens: "Ter carta branca, total liberdade de ação", example: "La direction lui a donné carte blanche pour ce projet." },
  { region: "France", registre: "professionnel", title: "Être au four et au moulin", sens: "Devoir gérer plusieurs tâches à la fois", pt_sens: "Assobiar e chupar cana (estar no forno e no moinho)", example: "Depuis le départ de son collègue, elle est au four et au moulin." },
  { region: "France", registre: "professionnel", title: "Faire long feu", sens: "Échouer rapidement, ne pas durer", pt_sens: "Falhar rapidamente, não durar (como pólvora molhada)", example: "Ce projet mal préparé a fait long feu." },
  { region: "France", registre: "professionnel", title: "Prendre le taureau par les cornes", sens: "Affronter un problème directement", pt_sens: "Pegar o touro pelos chifres (enfrentar de frente)", example: "Face à la crise, il a pris le taureau par les cornes." },
  // France — argot (registre familier, à signaler comme tel)
  { region: "France", registre: "familier", title: "Meuf", sens: "Fille, femme (verlan de « femme »)", pt_sens: "Garota, mulher (gíria)", example: "C'est la meuf dont je t'ai parlé." },
  { region: "France", registre: "familier", title: "Ouf", sens: "Fou ; « incroyable » (verlan de « fou »)", pt_sens: "Louco; incrível (gíria)", example: "C'est un truc de ouf, cette histoire !" },
  { region: "France", registre: "familier", title: "Vénère", sens: "Énervé, fâché (verlan)", pt_sens: "Irritado, zangado (gíria)", example: "Il est vénère parce qu'il a raté son train." },
  { region: "France", registre: "familier", title: "Kiffer", sens: "Aimer beaucoup, apprécier", pt_sens: "Gostar muito, curtir", example: "Je kiffe vraiment cette chanson." },
  { region: "France", registre: "familier", title: "Bosser", sens: "Travailler", pt_sens: "Trabalhar (ralar)", example: "Je bosse tous les jours jusqu'à dix-huit heures." },
  { region: "France", registre: "familier", title: "Chelou", sens: "Bizarre, étrange (verlan de « louche »)", pt_sens: "Bizarro, estranho (gíria)", example: "Cette histoire est vraiment chelou." },
  { region: "France", registre: "familier", title: "Ça déchire", sens: "C'est génial, excellent", pt_sens: "É demais, excelente (arrasa)", example: "Ce concert, ça déchire !" },
  // Québec
  { region: "Québec", registre: "courant", title: "C'est plate", sens: "C'est ennuyeux, c'est dommage", pt_sens: "É chato, é uma pena", example: "Il pleut encore aujourd'hui, c'est plate." },
  { region: "Québec", registre: "courant", title: "Avoir de la broue dans le toupet", sens: "Être débordé, très occupé", pt_sens: "Estar sobrecarregado, muito ocupado", example: "Elle a de la broue dans le toupet cette semaine." },
  { region: "Québec", registre: "courant", title: "Un char", sens: "Une voiture", pt_sens: "Um carro", example: "Mon char est en panne depuis hier." },
  { region: "Québec", registre: "courant", title: "Magasiner", sens: "Faire des achats, faire du shopping", pt_sens: "Fazer compras, ir ao shopping", example: "On va magasiner pour trouver un cadeau." },
  { region: "Québec", registre: "courant", title: "Tiguidou", sens: "D'accord, parfait", pt_sens: "Beleza, combinado, perfeito", example: "Tiguidou, on se voit demain matin." },
  { region: "Québec", registre: "courant", title: "Pantoute", sens: "Pas du tout", pt_sens: "De jeito nenhum", example: "Je n'aime pas ça pantoute." },
  { region: "Québec", registre: "courant", title: "Bienvenue", sens: "De rien (en réponse à un merci)", pt_sens: "De nada (em resposta a um obrigado)", example: "— Merci beaucoup ! — Bienvenue !" },
  // Belgique
  { region: "Belgique", registre: "courant", title: "Une fois", sens: "Particule expressive, nuance familière", pt_sens: "Partícula expressiva (semelhante ao 'só' ou 'lá')", example: "Viens une fois voir ce que j'ai trouvé." },
  { region: "Belgique", registre: "courant", title: "Septante / nonante", sens: "Soixante-dix / quatre-vingt-dix", pt_sens: "Setenta / noventa", example: "Il y avait septante personnes à la conférence." },
  { region: "Belgique", registre: "courant", title: "Un kot", sens: "Une chambre d'étudiant", pt_sens: "Um quarto de estudante (república)", example: "Elle habite dans un kot près de l'université." },
  { region: "Belgique", registre: "courant", title: "Faire le zigoto", sens: "Faire l'idiot, se donner en spectacle", pt_sens: "Fazer-se de bobo, dar espetáculo", example: "Arrête de faire le zigoto pendant la réunion !" },
  { region: "Belgique", registre: "courant", title: "Une drache", sens: "Une pluie forte et soudaine", pt_sens: "Uma chuva forte e repentina (toró)", example: "Il y a eu une bonne drache cet après-midi." },
  // Suisse romande
  { region: "Suisse", registre: "courant", title: "Septante / huitante / nonante", sens: "70 / 80 / 90", pt_sens: "Setenta / Oitenta / Noventa", example: "Il a fêté ses septante ans le mois dernier." },
  { region: "Suisse", registre: "courant", title: "Un natel", sens: "Un téléphone portable", pt_sens: "Um telefone celular", example: "J'ai oublié mon natel à la maison." },
  { region: "Suisse", registre: "courant", title: "Un cornet", sens: "Un sac en plastique", pt_sens: "Uma sacola de plástico", example: "Peux-tu me donner un cornet pour mes courses ?" },
  { region: "Suisse", registre: "courant", title: "Ça joue", sens: "C'est d'accord, ça fonctionne", pt_sens: "Está combinado, funciona", example: "On se retrouve à midi ? — Ça joue !" },
  // Afrique francophone
  { region: "Afrique", registre: "courant", title: "Une go", sens: "Une fille, une petite amie (nouchi, Côte d'Ivoire)", pt_sens: "Uma garota, uma namorada", example: "C'est sa go depuis maintenant un an." },
  { region: "Afrique", registre: "courant", title: "Chicotter", sens: "Frapper, punir (Afrique de l'Ouest)", pt_sens: "Bater, punir (com chicote ou vara)", example: "Le père a chicotté son fils pour cette bêtise." },
  { region: "Afrique", registre: "courant", title: "Un deuxième bureau", sens: "Un amant, une maîtresse", pt_sens: "Um amante, uma amante (um segundo escritório)", example: "Tout le quartier sait qu'il a un deuxième bureau." },
  { region: "Afrique", registre: "courant", title: "S'enjailler", sens: "S'amuser, faire la fête (nouchi, Côte d'Ivoire)", pt_sens: "Divertir-se, festejar", example: "On va s'enjailler chez des amis ce soir." },
].map((e) => ({
  id: nid("expr"),
  type: "expression",
  title: e.title,
  caption: `${e.sens} — expression ${e.registre === "familier" ? "familière (argot)" : e.registre} de ${e.region}.`,
  pt_caption: `${e.pt_sens} — expressão ${e.registre === "familier" ? "informal (gíria)" : e.registre} de ${e.region}.`,
  detail: e.sens,
  example: e.example,
  region: e.region,
  registre: e.registre,
}));

export const FAUX_AMIS = [
  { langue: "portugais", mot: "Poli", pas: "« Poluído »", oui: "Courtois, bien élevé", pt_oui: "Cortês, educado" },
  { langue: "portugais", mot: "Pretendre", pas: "« Pretender » (avoir l'intention de)", oui: "Faire semblant, revendiquer sans preuve", pt_oui: "Fingir, alegar sem provas" },
  { langue: "portugais", mot: "Latte", pas: "« Leite » (lait)", oui: "Planche de bois fine", pt_oui: "Ripa de madeira (ripa)" },
  { langue: "portugais", mot: "Vaisselle", pas: "« Vasilha » au sens large", oui: "Ensemble des assiettes, verres, couverts", pt_oui: "Louça (pratos, copos, talheres)" },
  { langue: "portugais", mot: "Cave", pas: "« Cavar » (creuser)", oui: "Sous-sol, cellier", pt_oui: "Porão, adega" },
  { langue: "portugais", mot: "Sac", pas: "« Saco » (sens vulgaire au Brésil)", oui: "Sac ordinaire, neutre", pt_oui: "Sacola ou bolsa normal" },
  { langue: "portugais", mot: "Costume", pas: "« Costume » = habitude", oui: "Complet-veston, tenue", pt_oui: "Terno, traje" },
  { langue: "anglais", mot: "Actuellement", pas: "« Actually » (en fait)", oui: "En ce moment, maintenant", pt_oui: "Neste momento, agora" },
  { langue: "anglais", mot: "Assister à", pas: "« To assist » (aider)", oui: "Être présent à, participer à", pt_oui: "Estar presente, assistir (a um evento)" },
  { langue: "anglais", mot: "Attendre", pas: "« To attend » (assister à)", oui: "Patienter", pt_oui: "Esperar, aguardar" },
  { langue: "anglais", mot: "Éventuellement", pas: "« Eventually » (finalement)", oui: "Peut-être, le cas échéant", pt_oui: "Possivelmente, talvez" },
  { langue: "anglais", mot: "Rester", pas: "« To rest » (se reposer)", oui: "Demeurer à un endroit", pt_oui: "Permanecer em um lugar (ficar)" },
  { langue: "anglais", mot: "Sensible", pas: "« Sensible » (raisonnable)", oui: "Émotif, réceptif", pt_oui: "Emotivo, sensível" },
  { langue: "anglais", mot: "Librairie", pas: "« Library » (bibliothèque)", oui: "Magasin de livres", pt_oui: "Livraria (onde se compra livros)" },
  { langue: "anglais", mot: "Journée", pas: "« Journey » (voyage)", oui: "La durée du jour", pt_oui: "A duração do dia" },
  { langue: "anglais", mot: "Blesser", pas: "« To bless » (bénir)", oui: "Faire une blessure", pt_oui: "Machucar, ferir" },
].map((f) => ({
  id: nid("fa"),
  type: "fauxami",
  title: f.mot,
  caption: `Ne veut PAS dire ${f.pas}. Veut vraiment dire : ${f.oui}.`,
  pt_caption: `NÃO significa ${f.pas}. Na verdade significa: ${f.pt_oui}.`,
  detail: `Faux ami français / ${f.langue}.`,
  example: f.oui,
  langue: f.langue,
}));

export const HOMOPHONES = [
  { groupe: "ces / ses / c'est / s'est / sait", ex: "Ces documents sont importants. Il a rangé ses affaires. C'est une bonne idée. Elle s'est levée tôt. Il sait parler trois langues.", pt_ex: "Estes documentos são importantes. Ele arrumou suas coisas. É uma boa ideia. Ela levantou-se cedo. Ele sabe falar três línguas." },
  { groupe: "à / a", ex: "Elle va à Paris. Il a un rendez-vous.", pt_ex: "Ela vai a Paris. Ele tem um encontro." },
  { groupe: "ou / où", ex: "Tu préfères le thé ou le café ? Je ne sais pas où il habite.", pt_ex: "Preferes chá ou café? Não sei onde ele mora." },
  { groupe: "et / est", ex: "Elle est intelligente et travailleuse.", pt_ex: "Ela é inteligente e trabalhadora." },
  { groupe: "leur / leurs", ex: "Je leur ai envoyé le rapport. Ils ont présenté leurs projets.", pt_ex: "Eu lhes enviei o relatório. Eles apresentaram seus projetos." },
  { groupe: "quand / quant / qu'en", ex: "Quand arriveras-tu ? Quant à moi... Qu'en pensez-vous ?", pt_ex: "Quando você chegará? Quanto a mim... O que você acha disso?" },
  { groupe: "si / s'y / ci", ex: "Si tu veux... Il s'y rend chaque matin. Ce document-ci.", pt_ex: "Se você quiser... Ele vai lá todas as manhãs. Este documento aqui." },
  { groupe: "on / ont", ex: "On arrivera vers midi. Ils ont fini leur travail.", pt_ex: "Nós chegaremos por volta do meio-dia. Eles terminaram o trabalho deles." },
  { groupe: "la / l'a / là / las", ex: "Je vois la solution. Elle l'a terminé. Le dossier est là. Il est las de cette situation.", pt_ex: "Eu vejo a solução. Ela o terminou. O arquivo está lá. Ele está farto desta situação." },
  { groupe: "cet / cette / sept", ex: "Cet exemple... Cette règle... à sept heures précises.", pt_ex: "Este exemplo... Esta regra... às sete horas em ponto." },
  { groupe: "peu / peux / peut", ex: "Il reste peu de temps. Tu peux commencer. Il peut résoudre ce problème.", pt_ex: "Resta pouco tempo. Você pode começar. Ele pode resolver este problema." },
  { groupe: "près / prêt / pré", ex: "Le bureau est tout près. Êtes-vous prêt ? Les vaches paissent dans le pré.", pt_ex: "O escritório é bem perto. Você está pronto? As vacas pastam no prado." },
  { groupe: "sans / s'en / sang / cent / sent", ex: "Sans aucune aide. Il s'en va. Le don de sang. Cent participants. Elle sent que...", pt_ex: "Sem nenhuma ajuda. Ele vai embora. A doação de sangue. Cem participantes. Ela sente que..." },
  { groupe: "vert / vers / verre / ver", ex: "Le feu est vert. Il se dirige vers la sortie. Un verre d'eau. Un ver de terre.", pt_ex: "O farol está verde. Ele se dirige em direção à saída. Um copo de água. Um verme de terra." },
  { groupe: "cour / cours / court / courre", ex: "Les enfants jouent dans la cour. Je suis un cours. Le trajet est court.", pt_ex: "As crianças brincam no pátio. Eu faço um curso. O trajeto é curto." },
  { groupe: "foie / foi / fois", ex: "Le foie est un organe. En toute bonne foi. Je te l'ai déjà dit deux fois.", pt_ex: "O fígado é um órgão. Em toda boa-fé. Eu já te disse isso duas vezes." },
  { groupe: "mer / mère / maire", ex: "On part à la mer. Sa mère est professeure. Le maire a inauguré le parc.", pt_ex: "Vamos para o mar. A mãe dela é professora. O prefeito inaugurou o parque." },
  { groupe: "sain / saint / sein / ceint", ex: "Un mode de vie sain. Un jour saint. Au sein d'une entreprise.", pt_ex: "Um estilo de vida saudável. Um dia santo. No seio de uma empresa." },
  { groupe: "compte / comte / conte", ex: "Il faut tenir compte de cela. Le comte possédait un domaine. Elle raconte un conte.", pt_ex: "É preciso levar isso em conta. O conde possuía uma propriedade. Ela conta um conto." },
  { groupe: "censé / sensé", ex: "Il est censé arriver bientôt. C'est une décision sensée.", pt_ex: "Ele deve chegar em breve. É uma decisão sensata." },
  { groupe: "différend / différent", ex: "Ils ont réglé leur différend. Ce projet est différent.", pt_ex: "Eles resolveram sua divergência. Este projeto é diferente." },
  { groupe: "quel(le) / qu'elle", ex: "Quelle heure est-il ? Je pense qu'elle a raison.", pt_ex: "Que horas são? Eu acho que ela tem razão." },
  { groupe: "plutôt / plus tôt", ex: "Il vaut mieux partir plutôt maintenant. Nous sommes arrivés plus tôt.", pt_ex: "É melhor partir de preferência agora. Nós chegamos mais cedo." },
  { groupe: "parti / partie / partit", ex: "Il a pris le parti de démissionner. Cette réunion fait partie du programme.", pt_ex: "Ele tomou a decisão de se demitir. Esta reunião faz parte do programa." },
  { groupe: "amande / amende", ex: "Elle adore les biscuits aux amandes. Il a payé une amende.", pt_ex: "Ela adora os biscoitos de amêndoa. Ele pagou uma multa." },
  { groupe: "cou / coup / coût / couds", ex: "Un collier autour du cou. Un coup de téléphone. Le coût du projet. Tu couds cette veste ?", pt_ex: "Um colar ao redor do pescoço. Uma ligação telefônica (um golpe). O custo do projeto. Você costura esta jaqueta?" },
  { groupe: "voie / voix / voit", ex: "Cette voie mène au centre-ville. Une voix posée. Il voit la situation.", pt_ex: "Este caminho (via) leva ao centro da cidade. Uma voz calma. Ele vê a situação." },
  { groupe: "balade / ballade", ex: "Une balade en forêt. Une ballade émouvante.", pt_ex: "Um passeio na floresta. Uma balada emocionante." },
  { groupe: "tache / tâche", ex: "Une tache sur la nappe. Cette tâche est prioritaire.", pt_ex: "Uma mancha na toalha. Esta tarefa é prioritária." },
].map((h) => ({
  id: nid("homo"),
  type: "homophone",
  title: h.groupe,
  caption: `Homophones à ne pas confondre : ${h.groupe}.`,
  pt_caption: `Homófonos para não confundir: ${h.groupe}.`,
  detail: h.ex,
  pt_detail: h.pt_ex,
  example: h.ex,
}));

export const INTRADUISIBLES = [
  { mot: "Dépaysement", sens: "La sensation, agréable ou déstabilisante, de ne plus être dans son environnement culturel habituel.", pt_sens: "A sensação, agradável ou desestabilizadora, de não estar mais em seu ambiente cultural habitual." },
  { mot: "Flâner", sens: "Se promener sans but précis, pour le seul plaisir de la marche et de l'observation.", pt_sens: "Passear sem objetivo definido, apenas pelo prazer de caminhar e observar." },
  { mot: "Retrouvailles", sens: "La joie particulière de revoir quelqu'un après une longue séparation.", pt_sens: "A alegria particular de reencontrar alguém após uma longa separação." },
  { mot: "Terroir", sens: "Le caractère unique qu'un lieu (sol, climat, savoir-faire) donne à un produit alimentaire.", pt_sens: "A característica única que um local (solo, clima, tradição) dá a um produto alimentar." },
  { mot: "Sortable", sens: "Une personne suffisamment présentable pour être emmenée en public sans gêne.", pt_sens: "Uma pessoa suficientemente apresentável para ser levada a público sem vergonha." },
  { mot: "Empêchement", sens: "Un contretemps imprévu qui empêche d'assister à quelque chose de prévu.", pt_sens: "Um contratempo imprevisto que impede de comparecer a algo planejado." },
  { mot: "Chez", sens: "Le lieu associé à une personne ou un groupe (« chez moi », « chez les Anglais »).", pt_sens: "O local associado a uma pessoa ou grupo («na minha casa», «entre os ingleses»)." },
  { mot: "Bricoler", sens: "Réparer ou fabriquer soi-même avec les moyens du bord, par plaisir autant que par nécessité.", pt_sens: "Consertar ou fabricar sozinho com os recursos disponíveis, tanto por prazer quanto por necessidade." },
  { mot: "Retrousser (ses manches)", sens: "Se préparer mentalement et physiquement à un effort concret, sans détour.", pt_sens: "Arregaçar as mangas: preparar-se mental e fisicamente para um esforço concreto." },
].map((m) => ({
  id: nid("intra"),
  type: "intraduisible",
  title: m.mot,
  caption: `Un mot français sans équivalent exact ailleurs : ${m.sens}`,
  pt_caption: `Uma palavra francesa sem equivalente exato em outro lugar: ${m.pt_sens}`,
  detail: m.sens,
  example: m.mot,
}));

export const RECORDS = [
  { titre: "Mot le plus long d'usage courant", detail: "« Anticonstitutionnellement » — 25 lettres, souvent cité comme le mot le plus long de la langue française usuelle.", pt_detail: "«Anticonstitutionnellement» — 25 letras, frequentemente citada como a palavra mais longa da língua francesa usual." },
  { titre: "Phrase la plus courte de la littérature classique", detail: "« Va ! » — réplique de Chimène dans Le Cid de Corneille (1637).", pt_detail: "«Va !» (Vá!) — réplica de Chimène na peça Le Cid de Corneille (1637)." },
  { titre: "Académie française", detail: "Fondée en 1635 par le cardinal de Richelieu pour codifier et protéger la langue.", pt_detail: "Fundada em 1635 pelo Cardeal de Richelieu para codificar e proteger o idioma francês." },
  { titre: "Diffusion internationale", detail: "Le français figure parmi les langues officielles d'une trentaine d'États, répartis sur cinq continents.", pt_detail: "O francês figura entre as línguas oficiais de cerca de trinta Estados, distribuídos pelos cinco continentes." },
  { titre: "Un mot, deux sens opposés", detail: "« Hôte » désigne à la fois celui qui reçoit et celui qui est reçu — un même mot pour deux rôles inverses.", pt_detail: "«Hôte» designa tanto o anfitrião quanto o convidado — a mesma palavra para papéis opostos." },
  { titre: "Palindrome à tester", detail: "« Ésope reste ici et se repose » se lit rigoureusement de la même façon dans les deux sens.", pt_detail: "«Ésope reste ici et se repose» (Esopo fica aqui e descansa) lê-se rigorosamente da mesma forma nos dois sentidos." },
].map((r) => ({
  id: nid("rec"),
  type: "record",
  title: r.titre,
  caption: r.detail,
  pt_caption: r.pt_detail,
  detail: r.detail,
  example: r.titre,
}));

export const VRAI_FAUX = [
  { q: "Le français est parlé sur les cinq continents.", r: "Vrai", pt_q: "O francês é falado nos cinco continentes.", pt_r: "Verdadeiro" },
  { q: "Toutes les lettres muettes du français sont totalement inutiles.", r: "Faux — elles conservent souvent une trace de l'origine du mot ou permettent une liaison.", pt_q: "Todas as letras mudas do francês são totalmente inúteis.", pt_r: "Falso — elas frequentemente conservam um traço da origem da palavra ou permitem uma ligação." },
  { q: "« Courriel » est le terme officiellement recommandé par l'Académie française à la place d'« email ».", r: "Vrai", pt_q: "«Courriel» é o termo oficialmente recomendado pela Academia Francesa em vez de «email».", pt_r: "Verdadeiro" },
  { q: "Le mot « orange » n'a aucune rime parfaite en français.", r: "Vrai, l'un des exemples les plus cités de ce phénomène.", pt_q: "A palavra «orange» (laranja) não tem nenhuma rima perfeita em francês.", pt_r: "Verdadeiro, um dos exemplos mais citados deste fenômeno." },
  { q: "Toutes les expressions contenant un animal appartiennent au registre familier.", r: "Faux — « avoir le bras long » ou « poser un lapin » sont d'usage courant, pas argotique.", pt_q: "Todas as expressões com um animal pertencem ao registro informal (gíria).", pt_r: "Falso — expressões como «poser un lapin» (dar um cano) são de uso comum, não gíria." },
].map((v) => ({
  id: nid("vf"),
  type: "vraifaux",
  title: v.q,
  caption: `Vrai ou faux ? ${v.q}`,
  pt_caption: `Verdadeiro ou falso? ${v.pt_q}`,
  detail: `Réponse : ${v.r}`,
  pt_detail: `Resposta: ${v.pt_r}`,
  example: v.r,
}));

export const DEVINETTES = [
  { d: "Je commence comme « chat », je finis comme « eau », et je suis un logement fortifié.", r: "Château", pt_d: "Eu começo com «chat» (gato), termino com «eau» (água), e sou uma habitação fortificada.", pt_r: "Château (Castelo)" },
  { d: "On me trouve entre le vin et le verre : je suis un homophone du chiffre 100.", r: "Sang / Cent / Sent", pt_d: "Encontram-me entre o vinho (vin) e o copo (verre): sou um homófono do número 100.", pt_r: "Sang (Sangue) / Cent (Cem) / Sent (Sente)" },
  { d: "Un chasseur sachant chasser sait chasser sans son chien.", r: "Virelangue classique — à répéter trois fois vite !", pt_d: "Um caçador que sabe caçar sabe caçar sem seu cachorro.", pt_r: "Trava-língua clássico — repita três vezes bem rápido!" },
  { d: "Les chaussettes de l'archiduchesse sont-elles sèches, archi-sèches ?", r: "Virelangue classique — à répéter trois fois vite !", pt_d: "As meias da arquiduquesa estão secas, super secas?", pt_r: "Trava-língua clássico — repita três vezes bem rápido!" },
].map((v) => ({
  id: nid("dev"),
  type: "devinette",
  title: v.d,
  caption: v.d,
  pt_caption: v.pt_d,
  detail: `Réponse : ${v.r}`,
  pt_detail: `Resposta: ${v.pt_r}`,
  example: v.r,
}));

export const PIEGES = [
  { err: "Malgré que je sois fatigué...", ok: "Bien que je sois fatigué... / Malgré ma fatigue...", exp: "« Malgré que » est critiqué en registre soutenu ; préférez « bien que » (+subjonctif) ou « malgré » (+nom).", pt_err: "Malgré que je sois fatigué...", pt_ok: "Bien que je sois fatigué... / Malgré ma fatigue...", pt_exp: "«Malgré que» é incorreto no registro formal; prefira «bien que» (+subjuntivo) ou «malgré» (+substantivo)." },
  { err: "Au jour d'aujourd'hui", ok: "Aujourd'hui / à ce jour", exp: "Pléonasme : « aujourd'hui » contient déjà l'idée de « ce jour ».", pt_err: "Au jour d'aujourd'hui", pt_ok: "Aujourd'hui / à ce jour", pt_exp: "Pleonasmo: «aujourd'hui» já contém a ideia de «neste dia»." },
  { err: "Pallier à un problème", ok: "Pallier un problème", exp: "« Pallier » est transitif direct : il ne prend jamais « à ».", pt_err: "Pallier à un problème", pt_ok: "Pallier un problème", pt_exp: "O verbo «Pallier» é transitivo direto: ele nunca leva a preposição «à»." },
  { err: "Après qu'il soit parti", ok: "Après qu'il est parti / sera parti", exp: "« Après que » est suivi de l'indicatif, contrairement à « avant que ».", pt_err: "Après qu'il soit parti", pt_ok: "Après qu'il est parti / sera parti", pt_exp: "«Après que» é sempre seguido pelo indicativo, diferentemente de «avant que»." },
  { err: "Je m'excuse", ok: "Excusez-moi / Je vous prie de m'excuser", exp: "En registre soutenu, on ne s'excuse pas soi-même ; on demande l'excuse à autrui.", pt_err: "Je m'excuse", pt_ok: "Excusez-moi / Je vous prie de m'excuser", pt_exp: "No registro formal, não se desculpa a si próprio; pede-se desculpas ao outro." },
  { err: "Un espèce de problème", ok: "Une espèce de problème", exp: "« Espèce » est toujours féminin, même suivi d'un nom masculin.", pt_err: "Un espèce de problème", pt_ok: "Une espèce de problème", pt_exp: "A palavra «Espèce» é sempre feminina, mesmo seguida de um substantivo masculino." },
  { err: "Second (liste de plus de deux éléments)", ok: "Deuxième", exp: "« Second » ne s'emploie normalement que lorsqu'il n'y a que deux éléments en tout.", pt_err: "Second (em lista com mais de 2 elementos)", pt_ok: "Deuxième", pt_exp: "A palavra «Second» é usada normalmente apenas quando há exatamente dois elementos no total." },
].map((p) => ({
  id: nid("piege"),
  type: "piege",
  title: p.err,
  caption: `❌ « ${p.err} » → ✅ « ${p.ok} ». ${p.exp}`,
  pt_caption: `❌ « ${p.pt_err} » → ✅ « ${p.pt_ok} ». ${p.pt_exp}`,
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
