// ============================================================
// SOURCES.JS — Bibliographie du dossier
// ============================================================
// Références groupées par thème, affichées sur la page /sources.
// "url" est optionnel : quand une source n'a pas de lien fiable
// vérifié, laisse-le vide (undefined) — la page affichera la
// référence en texte simple plutôt qu'un lien cassé.
//
// Pour ajouter une source : ajoute un objet { label, publisher,
// url } dans le tableau du thème concerné.
// ============================================================

export const sourcesByTheme = [
  {
    themeTitle: 'Risques et Dérives',
    items: [
      {
        label:
          'Convention sur certaines armes classiques (CCW) — discussions sur les systèmes d\'armes létales autonomes',
        publisher: 'Nations Unies (ONU)',
        url: 'https://www.un.org/disarmament/the-convention-on-certain-conventional-weapons/',
      },
      {
        label: 'Règlement européen sur l\'intelligence artificielle (AI Act)',
        publisher: 'Commission européenne',
        url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai',
      },
      {
        label:
          'Reportages sur l\'usage du drone Kargu-2 en Libye (2020) et le rapport du Groupe d\'experts de l\'ONU',
        publisher: 'Presse internationale / rapport ONU',
      },
      {
        label:
          'Couverture de la vidéo deepfake de Volodymyr Zelensky appelant à la reddition (mars 2022)',
        publisher: 'Presse internationale',
      },
    ],
  },
  {
    themeTitle: 'IA Prédictive',
    items: [
      {
        label: 'Programmes de maintenance prédictive dans l\'aviation militaire (US Air Force)',
        publisher: 'Communications officielles US Air Force',
      },
    ],
  },
  {
    themeTitle: 'Fonctionnement de l\'IA',
    items: [
      {
        label: 'Notions générales : Deep Learning, réseaux de neurones, API',
        publisher: 'Ressources pédagogiques générales sur l\'intelligence artificielle',
      },
    ],
  },
];
