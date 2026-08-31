// ============================================================
// MAIN.JSX — Point d'entrée de l'application
// ============================================================
// Fichier technique : tu n'as normalement jamais besoin d'y
// toucher. Il branche React sur la page HTML (index.html) et
// active le routage (BrowserRouter, pour la navigation entre
// pages sans rechargement).
// ============================================================

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

// Import des feuilles de style, dans l'ordre : d'abord les
// variables/bases globales, puis les éléments réutilisables,
// puis la navigation, puis la mise en page des contenus.
import './styles/global.css';
import './styles/theme.css';
import './styles/navigation.css';
import './styles/pages.css';

// ============================================================
// CURSEURS PERSONNALISÉS — calcul des URLs
// ============================================================
// Les fichiers SVG des curseurs vivent dans public/cursors/. On
// ne peut pas écrire leur chemin "en dur" dans le CSS (ex.
// url('/cursors/reticle.svg')) car ce chemin doit tenir compte du
// paramètre "base" de vite.config.js (utile pour un déploiement
// dans un sous-dossier, comme GitHub Pages). On calcule donc ici
// l'URL correcte, et on la stocke dans des variables CSS que
// styles/global.css et styles/theme.css utilisent ensuite avec
// var(--cursor-default), var(--cursor-active), var(--cursor-help).
const cursorBase = import.meta.env.BASE_URL;
document.documentElement.style.setProperty(
  '--cursor-default',
  `url('${cursorBase}cursors/reticle.svg') 16 16, auto`
);
document.documentElement.style.setProperty(
  '--cursor-active',
  `url('${cursorBase}cursors/reticle-active.svg') 16 16, pointer`
);
document.documentElement.style.setProperty(
  '--cursor-help',
  `url('${cursorBase}cursors/reticle-active.svg') 16 16, help`
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*
      basename={import.meta.env.BASE_URL} : indispensable pour que
      la navigation fonctionne une fois déployé sur GitHub Pages,
      où le site vit dans un sous-dossier
      (https://<utilisateur>.github.io/<depot>/) et non à la racine
      du domaine. BASE_URL est fourni automatiquement par Vite et
      reprend la valeur de "base" définie dans vite.config.js — donc
      si tu changes "base" là-bas, cette ligne n'a rien à changer.
    */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
