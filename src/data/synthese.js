// ============================================================
// SYNTHESE.JS — Contenu de la page de Synthèse
// ============================================================
// Même logique que themes.js : modifie directement les textes
// ci-dessous pour changer le contenu de la page Synthèse.
// Chaque "fil conducteur" (thread) relie plusieurs thèmes entre
// eux — la liste "themesLies" sert juste à afficher des badges
// (les id doivent correspondre à ceux définis dans themes.js).
// ============================================================

export const syntheseIntro =
  'Les six thèmes précédents ont été étudiés séparément, mais l\'intelligence artificielle ne fonctionne pas en silos : les mêmes mécanismes techniques, les mêmes fragilités et les mêmes questions éthiques traversent l\'ensemble de ces catégories. Cette page relie les fils conducteurs qui parcourent tout le dossier.';

export const threads = [
  {
    number: '01',
    title: 'Un continuum d\'autonomie décisionnelle',
    themesLies: ['descriptive', 'predictive', 'prescriptive', 'risques'],
    content:
      'Descriptive → Prédictive → Prescriptive ne sont pas trois catégories isolées, mais les étapes d\'un même mouvement : celui d\'une IA qui observe, puis anticipe, puis agit (ou recommande d\'agir). À chaque étape, la place de l\'humain dans la décision se réduit : « human in the loop » (l\'humain décide, l\'IA l\'informe) en IA Descriptive ; « human on the loop » (l\'humain supervise, l\'IA propose) en Prédictive et une partie de la Prescriptive ; « human out of the loop » (l\'IA décide et agit seule) pour les systèmes prescriptifs avancés et les drones autonomes. Ce continuum explique directement pourquoi Risques et Dérives se concentre autant sur la question du contrôle humain (LAWS, meaningful human control) : c\'est l\'aboutissement logique de cette perte progressive de supervision.',
  },
  {
    number: '02',
    title: 'Une dépendance commune aux données',
    themesLies: ['fonctionnement', 'predictive', 'prescriptive', 'generative', 'risques'],
    content:
      'Qu\'il s\'agisse de décrire, prédire, prescrire ou générer, chaque type d\'IA vu dans ce dossier repose sur des données d\'entraînement — un principe posé dans le thème Fonctionnement de l\'IA (Deep Learning, apprentissage par l\'exemple). C\'est ce même fil rouge qui explique pourquoi le biais algorithmique n\'est pas propre à un seul thème mais les traverse tous : en Prédictive, un modèle entraîné sur des données historiques biaisées reproduira ce biais dans ses anticipations ; en Prescriptive, une recommandation d\'action peut désavantager injustement un groupe si les données sous-jacentes sont déséquilibrées ; en Générative, un modèle peut reproduire des stéréotypes présents dans ses données d\'entraînement ; en Risques et Dérives, c\'est précisément ce mécanisme qui est à l\'origine de scandales concrets (recrutement automatisé discriminant, reconnaissance faciale moins fiable selon l\'origine ethnique). Le biais n\'est donc pas un accident isolé : c\'est une conséquence structurelle de la façon dont l\'IA apprend.',
  },
  {
    number: '03',
    title: 'Le dual use : une même technologie, deux usages',
    themesLies: ['descriptive', 'predictive', 'generative', 'fonctionnement'],
    content:
      'Presque toutes les technologies vues dans ce dossier illustrent un principe central en matière de défense : le dual use (double usage civil et militaire). Une avancée développée pour un usage civil devient quasi systématiquement réutilisable militairement, et inversement. La reconnaissance d\'image développée pour un usage commercial devient un outil de ciblage ou de surveillance ; la maintenance prédictive industrielle se retrouve à l\'identique sur des flottes militaires ; les modèles génératifs utilisés pour la création de contenu civil sont les mêmes briques technologiques que celles utilisées pour produire des deepfakes à des fins de désinformation militaire ; les API, qui démocratisent l\'accès à l\'IA pour les entreprises civiles, posent aussi des questions de souveraineté lorsqu\'une armée dépend d\'un modèle hébergé par un acteur étranger. Ce principe explique pourquoi chaque thème de ce dossier a systématiquement été étudié à travers un exemple civil ET un exemple militaire.',
  },
  {
    number: '04',
    title: 'Vitesse de la machine, lenteur du contrôle humain',
    themesLies: ['fonctionnement', 'prescriptive', 'risques'],
    content:
      'Le thème Fonctionnement de l\'IA explique pourquoi une machine peut traiter l\'information à une vitesse hors de portée humaine (calcul massif, parallélisation). Cette rapidité est présentée comme une capacité dans les thèmes Prédictive et Prescriptive — mais elle devient un risque majeur dès qu\'elle dépasse la capacité humaine à comprendre, vérifier ou interrompre une décision : un essaim de drones autonomes peut réagir plus vite qu\'un chef militaire ne peut l\'analyser ; un deepfake peut se diffuser et influencer l\'opinion avant qu\'un dispositif de vérification ne puisse le démentir ; une recommandation algorithmique peut être appliquée avant qu\'un humain n\'ait eu le temps d\'en évaluer les conséquences. Cette tension — vitesse de la machine contre lenteur nécessaire du contrôle humain — structure une bonne partie du débat contemporain sur la régulation de l\'IA (AI Act, discussions CCW/ONU sur les LAWS), et rejoint l\'horizon encore incertain d\'une éventuelle superintelligence.',
  },
];

// Tableau récapitulatif affiché en bas de la page de Synthèse
export const summaryTable = [
  {
    fil: 'Continuum d\'autonomie (observer → anticiper → agir)',
    themes: 'Descriptive, Prédictive, Prescriptive, Risques',
  },
  {
    fil: 'Dépendance aux données et biais',
    themes: 'Fonctionnement, Prédictive, Prescriptive, Générative, Risques',
  },
  {
    fil: 'Dual use civil/militaire',
    themes: 'Les 6 thèmes',
  },
  {
    fil: 'Vitesse de la machine vs contrôle humain',
    themes: 'Fonctionnement, Prescriptive, Risques (drones, LAWS)',
  },
];
