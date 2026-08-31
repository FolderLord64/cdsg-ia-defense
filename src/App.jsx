// ============================================================
// APP.JSX — Composant racine
// ============================================================
// Assemble les briques globales du site :
//   - ThemeProvider  : gère le mode clair/sombre pour tout le site
//   - GridBackground : le motif de grille en filigrane
//   - Navigation     : barre du haut + menu latéral
//   - Routes         : définit quelle page s'affiche selon l'URL
//
// Pour AJOUTER UNE PAGE : ajoute une nouvelle <Route path="..."
// element={<TaPage />} /> ci-dessous, et un lien correspondant
// dans components/Navigation.jsx.
// ============================================================

import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import GridBackground from './components/GridBackground';
import WaveBackground from './components/WaveBackground';
import Navigation from './components/Navigation';
import InstagramIcon from './components/InstagramIcon';
import ScrollTopButton from './components/ScrollTopButton';
import Home from './pages/Home';
import ThemePage from './pages/ThemePage';
import Synthese from './pages/Synthese';
import Sources from './pages/Sources';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <ThemeProvider>
      <WaveBackground />
      <GridBackground />
      <Navigation />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* :themeId est un paramètre dynamique — lu dans
              ThemePage.jsx via useParams() pour savoir quel thème
              afficher (voir data/themes.js) */}
          <Route path="/theme/:themeId" element={<ThemePage />} />
          <Route path="/synthese" element={<Synthese />} />
          <Route path="/sources" element={<Sources />} />
          {/* Route "catch-all" : toute URL qui ne correspond à rien
              d'autre ci-dessus tombe ici (page 404 personnalisée) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Bouton flottant "remonter en haut", visible sur toutes les
          pages après un certain défilement */}
      <ScrollTopButton />

      <footer className="app-footer">
        {/* Lien vers le compte Instagram du CDI — pour changer le
            lien ou le texte, édite directement ici. */}
        <a
          href="https://www.instagram.com/cdi_l7m/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <InstagramIcon size={17} />
          Suivez-nous sur Insta
        </a>
        <p>© 2025-2026 YoucefSabri — Tous droits réservés</p>
      </footer>
    </ThemeProvider>
  );
}
