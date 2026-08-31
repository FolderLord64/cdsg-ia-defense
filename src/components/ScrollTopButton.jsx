// ============================================================
// SCROLLTOPBUTTON.JSX — Bouton "remonter en haut"
// ============================================================
// Reste invisible tant qu'on n'a pas défilé plus de 400px, puis
// apparaît en bas à droite de l'écran (utile sur les pages
// longues, surtout sur mobile). Défilement doux vers le haut au
// clic (pas un saut brutal).
// ============================================================

import { useState, useEffect } from 'react';

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`scroll-top-button ${visible ? 'is-visible' : ''}`}
      aria-label="Remonter en haut de la page"
      // Caché des lecteurs d'écran/clavier quand invisible, pour ne
      // pas piéger la navigation au clavier sur un bouton fantôme
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      ↑
    </button>
  );
}
