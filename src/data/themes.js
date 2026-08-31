// ============================================================
// THEMES.JS — Contenu des 6 thèmes CDSG
// ============================================================
// ⭐ C'EST LE FICHIER PRINCIPAL À MODIFIER POUR CHANGER LE TEXTE
//    DU SITE. Aucune connaissance en React n'est nécessaire pour
//    éditer les valeurs entre guillemets ci-dessous.
//
// Chaque thème est un objet avec toujours la même forme (voir
// commentaires dans le premier thème "descriptive" ci-dessous).
// La page qui affiche chaque thème (pages/ThemePage.jsx) est
// générique : elle lit simplement ces données, donc modifier un
// texte ici suffit — pas besoin de toucher au design.
//
// Pour AJOUTER un 7e thème : copie un objet existant, donne-lui
// un "id" unique, et ajoute-le dans le tableau "themes" en bas
// du fichier + un lien dans components/Navigation.jsx.
//
// Astuce glossaire : les termes techniques (GAN, LAWS, API...)
// n'ont pas besoin d'être marqués manuellement ici — ils sont
// détectés automatiquement dans le texte grâce à data/glossary.js
// et transformés en info-bulles au survol/tap.
// ============================================================

export const themes = [
  {
    // Identifiant unique utilisé dans l'URL (/theme/descriptive)
    id: 'descriptive',
    // Numéro affiché sur la page (chaîne de caractères, pas un nombre)
    number: '01',
    // Titre affiché en haut de la page et dans le menu
    title: 'IA Descriptive',
    // Courte accroche affichée sur la carte de la page d'accueil
    tagline: 'Décrire ce qui s\'est passé ou ce qui se passe.',
    // Couleur d'accent de la page : 'steel' (bleu) ou 'military' (vert)
    accent: 'steel',
    // "En bref" : résumé ultra-court affiché en haut de la page,
    // avant la définition détaillée — pratique pour réviser vite.
    resume:
      'L\'IA descriptive regarde en arrière ou observe le présent : elle raconte « ce qui s\'est passé », jamais « ce qui va se passer ».',
    // Analogie simple pour rendre le concept plus concret/parlant
    analogie:
      'Comme un bulletin météo qui décrit le temps qu\'il fait aujourd\'hui, sans dire s\'il pleuvra demain.',

    definition:
      'L\'IA descriptive analyse des données déjà existantes pour répondre à la question « que s\'est-il passé ? » ou « que se passe-t-il actuellement ? ». Elle ne fait aucune prévision et ne prend aucune décision : elle observe, résume et met en forme l\'information.',

    fonctionnement:
      'Elle s\'appuie sur des méthodes statistiques classiques : calcul de moyennes, regroupement de données similaires (clustering), création de tableaux de bord et de graphiques. L\'objectif est de rendre lisible une masse de données brutes.',

    capacites: [
      'Traiter rapidement de très grands volumes de données',
      'Faire ressortir des tendances ou des anomalies invisibles à l\'œil nu',
      'Faciliter la prise de conscience d\'une situation par les décideurs',
    ],

    limites: [
      'Elle ne dit jamais pourquoi quelque chose s\'est produit, seulement ce qui s\'est produit',
      'Sa qualité dépend entièrement des données utilisées : des données incomplètes ou biaisées donnent une vision faussée de la réalité',
      'Elle ne permet aucune anticipation',
    ],

    exempleCivil:
      'Un tableau de bord de suivi épidémiologique montrant l\'évolution du nombre de cas de COVID-19 région par région, jour après jour.',
    // Icône dessinée (voir components/icons.jsx) + photo libre de
    // droits (licence Unsplash, vérifiée) illustrant cet exemple.
    exempleCivilIcon: 'chart',
    exempleCivilPhoto: {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60',
      credit: 'Photo : Luke Chesser / Unsplash',
    },

    exempleMilitaire:
      'L\'analyse du volume de communications radio interceptées sur une zone donnée, permettant de dresser un état des lieux de l\'activité ennemie à un instant T (renseignement d\'origine électromagnétique, ROEM).',
    exempleMilitaireIcon: 'signal',
    exempleMilitairePhoto: {
      url: 'https://images.unsplash.com/photo-1566217558289-2bc2fb1641cd?auto=format&fit=crop&w=800&q=60',
      credit: 'Photo : Nassim Wahba / Unsplash',
    },

    // Quiz de révision (3 questions) affiché en bas de la page.
    // "correct" = index (à partir de 0) de la bonne réponse dans "options".
    quiz: [
      {
        question: 'Que fait l\'IA descriptive ?',
        options: [
          'Elle décide d\'une action à mener',
          'Elle décrit des données passées ou présentes',
          'Elle prédit l\'avenir',
          'Elle génère du contenu nouveau',
        ],
        correct: 1,
        explanation:
          'Elle se limite à observer et résumer, sans jamais anticiper ni décider.',
      },
      {
        question: 'Quel exemple illustre le mieux l\'IA descriptive ?',
        options: [
          'Un tableau de bord épidémiologique',
          'Un GPS qui choisit un itinéraire',
          'Un chatbot qui rédige un texte',
          'Un drone qui identifie une cible',
        ],
        correct: 0,
        explanation:
          'Le tableau de bord se contente de montrer l\'évolution des cas, sans recommander ni prédire quoi que ce soit.',
      },
      {
        question: 'Quelle est une limite de l\'IA descriptive ?',
        options: [
          'Elle consomme trop d\'énergie',
          'Elle ne peut expliquer pourquoi un événement s\'est produit',
          'Elle ne fonctionne que sur des images',
          'Elle est trop rapide pour être fiable',
        ],
        correct: 1,
        explanation:
          'Elle montre ce qui s\'est passé, jamais pourquoi — pour la cause, il faut d\'autres formes d\'IA ou une analyse humaine.',
      },
    ],
  },

  {
    id: 'predictive',
    number: '02',
    title: 'IA Prédictive',
    tagline: 'Anticiper ce qui va probablement se passer.',
    accent: 'steel',
    resume:
      'L\'IA prédictive utilise le passé pour estimer ce qui va probablement arriver : elle passe de « ce qui s\'est passé » à « ce qui va se passer ».',
    analogie:
      'Comme un prévisionniste météo qui annonce qu\'il va sans doute pleuvoir demain, en se basant sur les jours précédents.',

    definition:
      'L\'IA prédictive va plus loin que la description : elle utilise des données passées pour estimer ce qui est susceptible de se produire dans le futur. Elle répond à la question « que va-t-il probablement se passer ? ».',

    fonctionnement:
      'Elle repose sur l\'apprentissage automatique (machine learning) dit « supervisé » : un modèle est entraîné sur des données historiques déjà étiquetées (par exemple, des pannes passées associées à leurs causes), puis il apprend à reconnaître des schémas pour projeter des tendances futures. Plus les données sont nombreuses et fiables, plus la prédiction est précise.',

    capacites: [
      'Anticiper des pannes avant qu\'elles ne surviennent (maintenance prédictive)',
      'Prévoir une demande, un flux, une évolution (météo, trafic, marché)',
      'Détecter des signaux faibles avant qu\'ils ne deviennent des problèmes majeurs',
    ],

    limites: [
      'Elle suppose que le futur ressemblera au passé : en cas de rupture brutale ou d\'événement inédit, ses prédictions perdent leur fiabilité',
      'Elle hérite des biais présents dans les données d\'entraînement',
      'Le degré d\'incertitude d\'une prédiction n\'est pas toujours correctement communiqué, ce qui peut donner une fausse impression de certitude',
    ],

    exempleCivil:
      'La maintenance prédictive dans l\'industrie : des capteurs sur une machine permettent d\'anticiper une panne avant qu\'elle ne survienne, évitant un arrêt de production coûteux.',
    exempleCivilIcon: 'gauge',
    exempleCivilPhoto: {
      url: 'https://images.pexels.com/photos/32845692/pexels-photo-32845692.jpeg?auto=compress&cs=tinysrgb&w=800',
      credit: 'Photo : Sergey Sergeev / Pexels',
    },

    exempleMilitaire:
      'La maintenance prédictive des aéronefs militaires (par exemple certains programmes de l\'US Air Force), qui anticipe l\'usure des pièces pour réduire les indisponibilités et améliorer la sécurité des vols.',
    exempleMilitaireIcon: 'plane',
    exempleMilitairePhoto: {
      url: 'https://images.pexels.com/photos/389822/pexels-photo-389822.jpeg?auto=compress&cs=tinysrgb&w=800',
      credit: 'Photo : Geo Teynor / Pexels',
    },
  },

  {
    id: 'prescriptive',
    number: '03',
    title: 'IA Prescriptive',
    tagline: 'Recommander l\'action à mener.',
    accent: 'steel',
    resume:
      'L\'IA prescriptive ne se contente pas de prévoir : elle recommande directement quoi faire, en comparant plusieurs scénarios possibles.',
    analogie:
      'Comme un GPS qui ne se contente pas d\'annoncer les embouteillages, mais choisit et te propose directement l\'itinéraire à suivre.',

    definition:
      'L\'IA prescriptive va encore plus loin que la prédiction : elle ne se contente pas d\'anticiper un événement, elle recommande ou choisit une action à mener pour atteindre un objectif donné. Elle répond à la question « que devrait-on faire ? ».',

    fonctionnement:
      'Elle combine la prédiction avec des méthodes d\'optimisation : à partir de plusieurs scénarios possibles, l\'algorithme évalue lequel permet d\'atteindre le meilleur résultat selon des critères définis (coût, temps, risque...). Certains systèmes utilisent aussi l\'apprentissage par renforcement, où l\'IA apprend par essais-erreurs à choisir la meilleure action possible.',

    capacites: [
      'Optimiser des trajets ou une chaîne logistique complexe',
      'Recommander la meilleure option parmi plusieurs scénarios',
      'Assister une prise de décision en temps réel dans un environnement complexe',
    ],

    limites: [
      'Elle peut inciter à déléguer une décision humaine importante à une machine, sans supervision suffisante',
      'Son raisonnement interne est souvent difficile à expliquer (boîte noire), ce qui complique la confiance qu\'on peut lui accorder',
      'En cas d\'erreur, la question de la responsabilité (qui a décidé : l\'humain ou la machine ?) devient complexe à trancher',
    ],

    exempleCivil:
      'Les systèmes de recommandation logistique utilisés par de grandes entreprises de livraison, qui optimisent en temps réel les trajets de milliers de véhicules pour réduire les coûts et les délais.',
    exempleCivilIcon: 'route',

    exempleMilitaire:
      'Les outils d\'aide à la décision utilisés dans certains centres de commandement, qui recommandent des options tactiques à partir de multiples sources de données (position des forces, renseignement, contraintes logistiques) — l\'humain restant responsable de la décision finale.',
    exempleMilitaireIcon: 'command',

    quiz: [
      {
        question: 'Que fait l\'IA prescriptive, contrairement à l\'IA prédictive ?',
        options: [
          'Elle décrit uniquement le passé',
          'Elle recommande une action à mener',
          'Elle génère des images',
          'Elle n\'utilise aucune donnée',
        ],
        correct: 1,
        explanation:
          'Elle va plus loin que la prédiction en proposant concrètement quoi faire.',
      },
      {
        question: 'Quel exemple illustre l\'IA prescriptive dans le civil ?',
        options: [
          'Un tableau de bord météo',
          'L\'optimisation des trajets de livraison',
          'Un GAN générant des images',
          'Une antenne interceptant un signal',
        ],
        correct: 1,
        explanation:
          'L\'algorithme choisit le meilleur itinéraire parmi plusieurs options possibles.',
      },
      {
        question: 'Quelle est une limite importante de l\'IA prescriptive ?',
        options: [
          'Elle consomme peu d\'énergie',
          'Son raisonnement est souvent une boîte noire difficile à expliquer',
          'Elle ne fonctionne que hors ligne',
          'Elle ne peut traiter qu\'un seul scénario à la fois',
        ],
        correct: 1,
        explanation:
          'Il est difficile de savoir précisément pourquoi elle recommande telle action plutôt qu\'une autre.',
      },
    ],
  },

  {
    id: 'generative',
    number: '04',
    title: 'IA Générative',
    tagline: 'Créer du contenu entièrement nouveau.',
    accent: 'steel',
    resume:
      'L\'IA générative ne se contente pas d\'analyser des données : elle en fabrique de nouvelles — texte, image, son — à partir de ce qu\'elle a appris.',
    analogie:
      'Comme un élève qui a lu des centaines de dissertations et qui, sans en copier aucune, en écrit une nouvelle dans le même style.',

    definition:
      'L\'IA générative crée du contenu entièrement nouveau — texte, image, son, vidéo, code — à partir de modèles entraînés sur d\'immenses quantités de données existantes. Contrairement aux autres formes d\'IA vues jusqu\'ici, elle ne se contente pas d\'analyser ou de recommander : elle produit.',

    fonctionnement:
      'Elle repose sur des architectures spécifiques : les transformers (utilisés par les modèles de langage comme les assistants conversationnels), les GAN, ou encore les modèles de diffusion (utilisés pour la génération d\'images). Le modèle apprend les régularités statistiques d\'un domaine (langage, image...) puis les reproduit pour créer du contenu inédit mais plausible.',

    capacites: [
      'Rédiger des textes, résumer des documents, traduire',
      'Générer des images ou vidéos réalistes à partir d\'une simple description',
      'Produire de la voix synthétique quasi indiscernable d\'une voix humaine',
      'Assister la création de code informatique',
    ],

    limites: [
      'Les hallucinations : le modèle peut inventer des faits faux tout en les présentant avec assurance',
      'Elle hérite des biais présents dans les données sur lesquelles elle a été entraînée',
      'Le contenu généré devient de plus en plus difficile à distinguer du contenu authentique, ce qui pose un problème de confiance générale envers l\'information',
      'Une consommation énergétique importante liée à l\'entraînement et à l\'utilisation de ces modèles',
    ],

    exempleCivil:
      'Les assistants conversationnels capables de rédiger des textes ou répondre à des questions, ou encore les outils de génération d\'images utilisés en publicité et en design.',
    exempleCivilIcon: 'chat',

    exempleMilitaire:
      'La création d\'environnements de simulation réalistes pour l\'entraînement des forces (scénarios synthétiques). Ce thème ouvre aussi directement sur une dérive majeure approfondie dans « Risques et Dérives » : les deepfakes, utilisés à des fins de désinformation ou de guerre psychologique — par exemple la vidéo truquée de Volodymyr Zelensky appelant à la reddition, diffusée en 2022 puis rapidement démentie.',
    exempleMilitaireIcon: 'faceScan',

    quiz: [
      {
        question:
          'Qu\'est-ce qui distingue l\'IA générative des autres formes d\'IA vues dans ce dossier ?',
        options: [
          'Elle produit du contenu nouveau plutôt que d\'analyser des données',
          'Elle ne fonctionne que dans le domaine militaire',
          'Elle ne peut traiter que des chiffres',
          'Elle remplace entièrement l\'IA prédictive',
        ],
        correct: 0,
        explanation:
          'Elle crée du texte, de l\'image, du son... là où les autres IA analysent ou recommandent.',
      },
      {
        question: 'Que désigne le terme « hallucination » pour une IA générative ?',
        options: [
          'Une panne du serveur',
          'Le fait d\'inventer une information fausse avec assurance',
          'Un bug d\'affichage',
          'Une surchauffe du processeur',
        ],
        correct: 1,
        explanation:
          'Le modèle peut présenter un fait inventé comme s\'il était vrai, sans le signaler.',
      },
      {
        question: 'Quel exemple militaire est lié à l\'IA générative dans ce dossier ?',
        options: [
          'La maintenance prédictive des avions',
          'Les deepfakes utilisés en désinformation',
          'Le tri des communications radio',
          'L\'optimisation logistique',
        ],
        correct: 1,
        explanation:
          'Les mêmes techniques qui génèrent du contenu (GAN, diffusion) permettent aussi de fabriquer des deepfakes.',
      },
    ],
  },

  {
    id: 'fonctionnement',
    number: '05',
    title: 'Fonctionnement de l\'IA',
    tagline: 'Le socle technique commun à toutes les IA.',
    accent: 'military',
    themeIcon: 'network',
    resume:
      'Ce thème lève le capot : comment une IA apprend-elle vraiment, et pourquoi entend-on partout parler de Deep Learning, d\'API ou de superintelligence ?',
    analogie:
      'Comme un enfant qui apprend à reconnaître les chats en en voyant des milliers de photos, plutôt qu\'en apprenant une définition par cœur.',
    // Ce thème est le seul déconnecté du domaine civilo-militaire :
    // pas d'exemple civil/militaire (voir champs ci-dessous à null),
    // à la place il a des "sections supplémentaires" (extraSections).
    note: 'Seul thème déconnecté du domaine civilo-militaire — il sert de socle pour comprendre les 4 thèmes précédents.',

    definition:
      'Ce thème explique les mécanismes fondamentaux communs à toutes les intelligences artificielles : comment une machine « apprend » à partir de données, sans qu\'on lui dicte explicitement chaque règle.',

    fonctionnement:
      'Le processus repose sur plusieurs éléments : les données d\'entraînement (dataset), un ensemble d\'exemples à partir desquels le modèle va apprendre ; les réseaux de neurones, des couches de « neurones » mathématiques interconnectés qui transforment progressivement une information en sortie utile ; l\'entraînement, pendant lequel le modèle ajuste progressivement ses paramètres internes en s\'exposant à de nombreux exemples, jusqu\'à minimiser ses erreurs ; et enfin l\'inférence, l\'utilisation du modèle entraîné sur de nouvelles données qu\'il n\'a jamais vues. On distingue généralement trois grands types d\'apprentissage : supervisé (à partir de données étiquetées), non supervisé (le modèle trouve seul des structures dans les données) et apprentissage par renforcement (le modèle apprend par essais-erreurs).',

    // Sections supplémentaires propres à ce thème (Deep Learning, API, superintelligence)
    extraSections: [
      {
        title: 'Le Deep Learning : pourquoi cette notion revient partout',
        content:
          'Le Deep Learning (apprentissage profond) désigne les réseaux de neurones composés de nombreuses couches successives (« profondes »), chaque couche apprenant à repérer des motifs de plus en plus abstraits (par exemple, en image : d\'abord les contours, puis les formes, puis les objets complets). C\'est cette architecture qui a permis, depuis les années 2010, les progrès spectaculaires en reconnaissance d\'image, en traitement du langage et dans les modèles génératifs actuels. On en parle autant parce qu\'elle est aujourd\'hui le socle technique de quasi toutes les IA performantes vues dans les 4 autres thèmes.',
      },
      {
        title: 'La notion d\'API : comment l\'IA devient utilisable concrètement',
        content:
          'Une API (Interface de Programmation Applicative) est un point d\'accès qui permet à un logiciel, un site web ou une entreprise d\'utiliser un modèle d\'IA sans avoir à le construire ni à l\'héberger soi-même. Concrètement, une entreprise ou une armée n\'a pas besoin de développer son propre modèle : elle « appelle » un modèle existant via une API, l\'intègre dans ses propres outils et ne paie généralement que pour ce qu\'elle utilise. C\'est ce mécanisme qui explique la diffusion rapide de l\'IA dans une multitude de secteurs, civils comme militaires.',
      },
      {
        title: 'La superintelligence : un horizon qui inquiète et interroge',
        content:
          'La superintelligence désigne une IA hypothétique qui dépasserait significativement les capacités cognitives humaines dans pratiquement tous les domaines (raisonnement, créativité, prise de décision stratégique) — un stade au-delà de l\'IA actuelle, qui reste spécialisée sur des tâches précises. Si son existence reste débattue et prospective, la notion a un impact bien réel dès aujourd\'hui sur le monde professionnel : elle nourrit les débats sur l\'automatisation massive de métiers qualifiés, la nécessité de réguler le développement de l\'IA avant qu\'elle ne devienne difficile à contrôler, et les stratégies de course technologique entre grandes puissances et grandes entreprises.',
      },
    ],

    capacites: [
      'Détecter des régularités complexes dans des données que l\'humain ne pourrait pas analyser manuellement',
      'S\'adapter à des tâches très variées (langage, image, son, décision) à partir du même socle technique',
      'Traiter des volumes de données largement hors de portée humaine',
      'Être intégrée facilement dans des outils tiers grâce aux API, accélérant sa diffusion',
    ],

    limites: [
      'Un modèle ne « comprend » pas au sens humain : il détecte des corrélations statistiques, sans conscience ni raisonnement véritable',
      'Il nécessite des données massives et une puissance de calcul importante pour être entraîné',
      'L\'explicabilité reste limitée : on peut difficilement savoir précisément pourquoi un modèle complexe a produit telle sortie plutôt qu\'une autre',
      'La dépendance à des API tierces pose des questions de souveraineté (notamment militaire) lorsque le modèle est hébergé par un acteur étranger',
    ],

    // Pas d'exemples civil/militaire pour ce thème (volontairement laissé à null)
    exempleCivil: null,
    exempleMilitaire: null,

    quiz: [
      {
        question: 'Que signifie « Deep Learning » ?',
        options: [
          'Un raccourci clavier',
          'Un apprentissage utilisant des réseaux de neurones à de nombreuses couches',
          'Un type de base de données',
          'Une marque de processeur',
        ],
        correct: 1,
        explanation:
          '« Profond » fait référence au nombre de couches du réseau de neurones, pas à une quelconque intelligence profonde.',
      },
      {
        question: 'À quoi sert une API dans le contexte de l\'IA ?',
        options: [
          'À entraîner un modèle plus vite',
          'À permettre d\'utiliser un modèle d\'IA existant sans le reconstruire soi-même',
          'À stocker des photos',
          'À remplacer un réseau de neurones',
        ],
        correct: 1,
        explanation:
          'Une API est un point d\'accès qui permet d\'utiliser un modèle déjà entraîné, hébergé ailleurs.',
      },
      {
        question: 'Que désigne la « superintelligence » ?',
        options: [
          'Un modèle qui fonctionne sans électricité',
          'Une IA hypothétique qui dépasserait l\'humain dans presque tous les domaines',
          'Un simple synonyme de Deep Learning',
          'Un type de capteur militaire',
        ],
        correct: 1,
        explanation:
          'C\'est un horizon encore débattu, pas une technologie qui existe déjà aujourd\'hui.',
      },
    ],
  },

  {
    id: 'risques',
    number: '06',
    title: 'Risques et Dérives',
    tagline: 'Dangers, biais et usages détournés de l\'IA.',
    accent: 'danger',
    resume:
      'Chaque capacité de l\'IA vue dans les thèmes précédents porte aussi ses dérives possibles : biais, désinformation, perte de contrôle humain.',
    analogie:
      'Comme un couteau de cuisine : le même outil peut couper des légumes ou blesser quelqu\'un — tout dépend de qui l\'utilise et comment.',

    definition:
      'Ce thème analyse les dangers, biais et usages détournés de l\'intelligence artificielle, dans une perspective éthique, juridique et stratégique. Il vient en contrepoint des 4 thèmes précédents : chaque capacité de l\'IA (décrire, prédire, prescrire, générer) porte en elle un potentiel de dérive.',

    fonctionnement:
      'Les dérives naissent généralement de plusieurs facteurs combinés : des biais algorithmiques (données d\'entraînement non représentatives, qui reproduisent ou amplifient des discriminations existantes), un manque de transparence (systèmes boîte noire difficiles à auditer), une dépendance technologique croissante à des outils que l\'on ne maîtrise pas toujours techniquement, et une vulnérabilité aux attaques (empoisonnement des données d\'entraînement, manipulation volontaire d\'un modèle).',

    capacites: [
      'Désinformation de masse à grande échelle',
      'Surveillance de masse des populations',
      'Autonomisation croissante de systèmes d\'armes, jusqu\'à la question des LAWS',
    ],

    limites: [
      'Le cadre juridique reste incomplet : l\'AI Act européen est en cours d\'application mais la régulation internationale, notamment militaire, est balbutiante',
      'L\'attribution de responsabilité en cas d\'erreur reste complexe (concepteur ? opérateur ? commandant ?)',
      'Une course technologique internationale (notamment USA/Chine) pousse à déployer des systèmes parfois avant qu\'ils ne soient pleinement maîtrisés',
    ],

    exempleCivil:
      'Des scandales de biais algorithmique ont révélé des discriminations dans des outils de recrutement automatisé, ou des taux d\'erreur nettement plus élevés de certains systèmes de reconnaissance faciale selon l\'origine ethnique des personnes analysées.',
    exempleCivilIcon: 'scale',

    exempleMilitaire:
      'Le débat international sur les robots tueurs (LAWS) est discuté depuis plusieurs années à l\'ONU, dans le cadre de la CCW, sans qu\'un traité contraignant n\'ait encore été adopté.',
    exempleMilitaireIcon: 'drone',

    // "Zooms" spécifiques à ce thème : deepfakes et drones. Affichés
    // comme deux blocs distincts en bas de la page Risques et Dérives.
    // "icon" référence une icône de components/icons.jsx.
    zooms: [
      {
        title: 'Zoom — Deepfakes',
        icon: 'faceScan',
        cequecest:
          'Des contenus audio/vidéo/image synthétiques hyperréalistes, produits par les techniques vues dans le thème IA Générative (GAN, modèles de diffusion), capables de substituer un visage, une voix ou une gestuelle à celle d\'une autre personne.',
        deriveCivile:
          'Fraude (usurpation de la voix d\'un dirigeant pour ordonner un virement bancaire frauduleux), désinformation électorale, atteinte à l\'image, escroquerie sentimentale.',
        deriveMilitaire:
          'Guerre psychologique et désinformation — l\'exemple le plus cité étant la vidéo truquée de Volodymyr Zelensky appelant à la reddition, diffusée puis démentie en 2022 — avec un risque réel de sape de la confiance dans les sources officielles, voire d\'escalade si un deepfake est pris pour argent comptant par une chaîne de commandement.',
        limite:
          'Les outils de détection sont dans une course permanente contre les outils de génération, chacun s\'améliorant en réaction à l\'autre — la fiabilité de détection n\'est donc jamais garantie à 100 %.',
      },
      {
        title: 'Zoom — Drones et autonomie',
        icon: 'drone',
        cequecest:
          'Des systèmes aériens (ou terrestres/navals) sans pilote, dont le niveau d\'autonomie varie fortement, du drone téléopéré jusqu\'au système capable, en théorie, de sélectionner et engager une cible sans intervention humaine directe.',
        deriveCivile:
          'Espionnage industriel, intrusion dans des zones sensibles (aéroports, centrales), atteinte à la vie privée par surveillance non consentie.',
        deriveMilitaire:
          'Le débat central porte sur la notion de meaningful human control — une machine peut-elle légitimement décider seule d\'engager une cible humaine ? Sont souvent cités l\'usage massif de drones en Ukraine, les essaims de drones testés par plusieurs armées, et le cas du drone Kargu-2 (Libye, 2020), évoqué dans un rapport de l\'ONU comme possible premier cas d\'engagement autonome sur une cible humaine.',
        limite:
          'Absence de traité international contraignant, difficulté d\'attribuer une responsabilité pénale en cas d\'erreur, risque de « déshumanisation » progressive du conflit armé.',
      },
    ],

    quiz: [
      {
        question: 'D\'où vient le plus souvent un biais algorithmique ?',
        options: [
          'D\'un manque de mémoire de l\'ordinateur',
          'De données d\'entraînement non représentatives',
          'D\'une erreur d\'orthographe dans le code',
          'D\'une connexion internet trop lente',
        ],
        correct: 1,
        explanation:
          'Si les données reflètent des inégalités existantes, le modèle les reproduit, voire les amplifie.',
      },
      {
        question: 'Que signifie LAWS ?',
        options: [
          'Une loi européenne sur l\'IA',
          'Des systèmes d\'armes létales autonomes',
          'Un langage de programmation',
          'Un type de drone civil',
        ],
        correct: 1,
        explanation:
          'LAWS = Lethal Autonomous Weapons Systems, au cœur du débat sur le contrôle humain des armes.',
      },
      {
        question:
          'Pourquoi la détection de deepfakes n\'est-elle jamais garantie à 100 % ?',
        options: [
          'Parce que les vidéos sont trop courtes',
          'Parce que les outils de détection et de génération s\'améliorent l\'un contre l\'autre en permanence',
          'Parce que les deepfakes sont interdits par la loi',
          'Parce qu\'il n\'existe aucun outil de détection',
        ],
        correct: 1,
        explanation:
          'C\'est une course perpétuelle : chaque progrès en détection pousse la génération à s\'améliorer, et inversement.',
      },
    ],
  },
];

// Fonction utilitaire : retrouve un thème à partir de son id
// (utilisée par pages/ThemePage.jsx pour savoir quoi afficher
// selon l'URL visitée, ex. /theme/generative → thème "generative")
export function getThemeById(id) {
  return themes.find((theme) => theme.id === id);
}
