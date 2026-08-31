// ============================================================
// GLOSSARY.JS — Dictionnaire des termes techniques
// ============================================================
// Chaque entrée = un terme détecté automatiquement dans le texte
// des pages, qui devient survolable/tapable pour afficher sa
// définition (voir components/GlossaryText.jsx qui fait la
// détection, et components/Tooltip.jsx qui affiche la bulle).
//
// COMMENT AJOUTER UN NOUVEAU TERME AU GLOSSAIRE :
//   1. Ajoute un objet { term: "...", definition: "..." } dans
//      le tableau ci-dessous.
//   2. "term" doit être écrit EXACTEMENT comme il apparaît dans
//      le texte des pages (la détection est insensible à la
//      casse, mais respecte les espaces/accents).
//   3. Rien d'autre à faire : dès que ce mot apparaît dans un
//      texte de theme.js ou synthese.js, il sera automatiquement
//      transformé en info-bulle.
//
// ⚠️ Si deux termes se chevauchent (ex. "IA" et "IA Générative"),
// le terme le plus long est toujours détecté en priorité — pas
// besoin de trier la liste toi-même, le composant s'en charge.
// ============================================================

export const glossary = [
  {
    term: 'GAN',
    definition:
      'Generative Adversarial Network (réseau antagoniste génératif) : deux réseaux de neurones s\'affrontent, l\'un générant du faux contenu, l\'autre essayant de le démasquer — ce qui améliore progressivement le réalisme du contenu généré.',
  },
  {
    term: 'LAWS',
    definition:
      'Lethal Autonomous Weapons Systems (systèmes d\'armes létales autonomes) : des systèmes capables, en théorie, de sélectionner et engager une cible sans intervention humaine directe. Sujet de débat à l\'ONU (CCW).',
  },
  {
    term: 'CCW',
    definition:
      'Convention sur certaines armes classiques : cadre de discussion à l\'ONU où sont débattues, entre autres, les questions liées aux systèmes d\'armes autonomes (LAWS).',
  },
  {
    term: 'ROEM',
    definition:
      'Renseignement d\'Origine ÉlectroMagnétique : renseignement obtenu par l\'interception de signaux électromagnétiques (communications radio, radars...).',
  },
  {
    term: 'Deep Learning',
    definition:
      'Apprentissage profond : réseaux de neurones composés de nombreuses couches successives, chaque couche apprenant à repérer des motifs de plus en plus abstraits. Socle technique des IA performantes actuelles.',
  },
  {
    term: 'API',
    definition:
      'Interface de Programmation Applicative : point d\'accès qui permet à un logiciel d\'utiliser un modèle d\'IA existant sans avoir à le construire ni à l\'héberger soi-même.',
  },
  {
    term: 'transformers',
    definition:
      'Architecture de réseau de neurones à la base des modèles de langage actuels (assistants conversationnels), particulièrement efficace pour traiter du texte et repérer les liens entre les mots d\'une phrase.',
  },
  {
    term: 'boîte noire',
    definition:
      'Se dit d\'un système dont le raisonnement interne est difficile à comprendre ou expliquer, même pour ses concepteurs — on observe ce qu\'il produit, mais pas précisément pourquoi.',
  },
  {
    term: 'hallucinations',
    definition:
      'Dans le contexte de l\'IA générative : fait, pour un modèle, d\'inventer une information fausse tout en la présentant avec assurance, comme si elle était vraie.',
  },
  {
    term: 'clustering',
    definition:
      'Technique qui regroupe automatiquement des données similaires entre elles, sans qu\'on lui dise à l\'avance quels groupes chercher.',
  },
  {
    term: 'apprentissage par renforcement',
    definition:
      'Méthode d\'apprentissage où un modèle apprend par essais-erreurs, en étant récompensé ou pénalisé selon les actions qu\'il choisit.',
  },
  {
    term: 'réseaux de neurones',
    definition:
      'Modèles informatiques composés de couches de "neurones" artificiels interconnectés, inspirés (de loin) du cerveau humain, capables d\'apprendre à repérer des régularités dans des données.',
  },
  {
    term: 'IED',
    definition:
      'Improvised Explosive Device (engin explosif improvisé) : dispositif explosif fabriqué et employé de façon non conventionnelle, souvent visé par des outils d\'anticipation prédictive en zone de conflit.',
  },
  {
    term: 'superintelligence',
    definition:
      'IA hypothétique qui dépasserait significativement les capacités cognitives humaines dans pratiquement tous les domaines — un horizon encore débattu, mais qui influence déjà les discussions sur la régulation de l\'IA.',
  },
  {
    term: 'meaningful human control',
    definition:
      '"Contrôle humain significatif" : principe selon lequel une décision d\'engager la force létale devrait toujours rester sous supervision humaine réelle, et non être entièrement déléguée à une machine.',
  },
  {
    term: 'dual use',
    definition:
      'Double usage civil et militaire d\'une même technologie : une innovation développée pour un usage peut, presque systématiquement, être réutilisée dans l\'autre domaine.',
  },
  {
    term: 'AI Act',
    definition:
      'Règlement européen sur l\'intelligence artificielle, encadrant juridiquement le développement et l\'usage de l\'IA selon son niveau de risque.',
  },
];
