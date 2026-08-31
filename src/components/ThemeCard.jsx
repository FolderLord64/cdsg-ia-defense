// ============================================================
// THEMECARD.JSX — Carte cliquable d'un thème (page d'accueil)
// ============================================================
// Affiche : le numéro du thème (01 à 06), son titre, son
// accroche (tagline), et une flèche indiquant que la carte est
// cliquable. Toute la carte est un lien vers /theme/<id>.
// ============================================================

import { Link } from 'react-router-dom';
import GlossaryText from './GlossaryText';

export default function ThemeCard({ theme }) {
  return (
    <Link
      to={`/theme/${theme.id}`}
      className={`theme-card chamfer-card accent-${theme.accent}`}
    >
      <span className="theme-card-number">{theme.number}</span>
      <h3 className="theme-card-title">{theme.title}</h3>
      <p className="theme-card-tagline">
        <GlossaryText text={theme.tagline} />
      </p>
      <span className="theme-card-arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
