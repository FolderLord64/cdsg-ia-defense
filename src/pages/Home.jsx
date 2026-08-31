// ============================================================
// HOME.JSX — Page d'accueil
// ============================================================
// Structure : un "hero" (titre + accroche), puis la grille des
// 6 thèmes (générée automatiquement depuis data/themes.js — pas
// besoin de la modifier si tu changes juste le texte d'un
// thème), puis une carte vers la page Synthèse.
//
// Pour changer le titre/l'accroche du hero : modifie directement
// le texte ci-dessous (section "HERO").
// ============================================================

import { Link } from 'react-router-dom';
import { themes } from '../data/themes';
import ThemeCard from '../components/ThemeCard';
import LyceeLogo from '../components/LyceeLogo';

export default function Home() {
  return (
    <div className="page">
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <LyceeLogo height={72} className="hero-logo" />
        <p className="eyebrow">Classe Défense — CDSG</p>
        <h1 className="hero-title">
          Intelligence Artificielle
          <br />
          <span className="hero-title-accent">& Défense</span>
        </h1>
        <p className="hero-subtitle">
          Six thèmes pour comprendre comment l'intelligence artificielle
          transforme, à la fois, le monde civil et le domaine militaire —
          ses capacités, ses limites, et les risques qu'elle porte.
        </p>
      </section>

      {/* ---------- GRILLE DES 6 THÈMES ---------- */}
      <section className="theme-grid" aria-label="Les six thèmes">
        {themes.map((theme) => (
          <ThemeCard key={theme.id} theme={theme} />
        ))}
      </section>

      {/* ---------- CARTE VERS LA SYNTHÈSE ---------- */}
      <Link to="/synthese" className="synthese-banner chamfer-card">
        <div>
          <p className="eyebrow">07 — Vision d'ensemble</p>
          <h3 className="synthese-banner-title">
            Voir la synthèse : ce qui relie ces six thèmes
          </h3>
        </div>
        <span aria-hidden="true" className="theme-card-arrow">
          →
        </span>
      </Link>

      {/* ---------- LIEN VERS LES ARCHIVES DE L'ANNÉE PRÉCÉDENTE ----------
          Pointe vers l'archive .zip du site CDSG 2024-2025, placée dans
          public/downloads/. Pour changer le fichier lié : remplace
          public/downloads/cdsg-2024-2025.zip par un autre fichier et
          mets à jour le href ci-dessous en conséquence. */}
      <a
        href={`${import.meta.env.BASE_URL}downloads/cdsg-2024-2025.zip`}
        download
        className="archive-banner chamfer-card"
      >
        <div>
          <p className="eyebrow">Archives</p>
          <h3 className="synthese-banner-title">
            Site CDSG 2024-2025 (année précédente)
          </h3>
        </div>
        <span aria-hidden="true" className="theme-card-arrow">
          ⬇
        </span>
      </a>
    </div>
  );
}
