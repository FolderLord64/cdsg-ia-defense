// ============================================================
// NAVIGATION.JSX — Barre supérieure + menu latéral repliable
// ============================================================
// Structure :
//   - Une barre fixe en haut (logo/titre, bouton hamburger,
//     bouton clair/sombre) toujours visible
//   - Un panneau qui glisse depuis la gauche quand on clique sur
//     le hamburger, listant : Accueil, les 6 thèmes, Synthèse
//   - Un fond semi-transparent (overlay) derrière le panneau,
//     qui referme le menu si on clique dessus
//
// Pour AJOUTER/RETIRER un lien du menu (ex. si tu ajoutes un 7e
// thème), modifie le tableau "navLinks" ci-dessous.
// ============================================================

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import { themes } from '../data/themes';
import LyceeLogo from './LyceeLogo';

// Construit la liste des liens du menu à partir de themes.js,
// encadrée par Accueil (au début) et Synthèse (à la fin).
const navLinks = [
  { to: '/', label: 'Accueil', number: '—' },
  ...themes.map((t) => ({
    to: `/theme/${t.id}`,
    label: t.title,
    number: t.number,
  })),
  { to: '/synthese', label: 'Synthèse', number: '07' },
  { to: '/sources', label: 'Sources', number: '📎' },
];

export default function Navigation() {
  // État d'ouverture/fermeture du panneau latéral
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      {/* ---------- BARRE SUPÉRIEURE FIXE ---------- */}
      <header className="topbar">
        <NavLink to="/" className="topbar-brand" onClick={closeMenu}>
          <LyceeLogo height={38} />
          <span>
            IA <span className="topbar-brand-accent">&</span> DÉFENSE
          </span>
        </NavLink>

        <div className="topbar-actions">
          {/* Bouton bascule clair/sombre */}
          <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label={
              theme === 'dark'
                ? 'Activer le mode clair'
                : 'Activer le mode sombre'
            }
            title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>

          {/* Bouton hamburger — ouvre/ferme le menu latéral */}
          <button
            type="button"
            className={`hamburger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* ---------- OVERLAY (fond assombri derrière le panneau) ---------- */}
      {menuOpen && (
        <div
          className="nav-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* ---------- PANNEAU LATÉRAL ---------- */}
      <nav
        className={`side-panel ${menuOpen ? 'is-open' : ''}`}
        aria-label="Navigation principale"
      >
        <p className="side-panel-eyebrow eyebrow">Sommaire</p>
        <ul className="side-panel-list">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={closeMenu}
                // "end" pour que le lien Accueil ne reste pas actif
                // en permanence sur toutes les sous-pages
                end={link.to === '/'}
                className={({ isActive }) =>
                  `side-panel-link ${isActive ? 'is-active' : ''}`
                }
              >
                <span className="side-panel-link-number">{link.number}</span>
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
