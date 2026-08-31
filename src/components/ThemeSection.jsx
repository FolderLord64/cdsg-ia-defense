// ============================================================
// THEMESECTION.JSX — Bloc de section réutilisable
// ============================================================
// Affiche un titre de section + soit un paragraphe (prop "text"),
// soit une liste à puces (prop "items", tableau de strings).
// Utilisé pour Définition / Fonctionnement / Capacités / Limites
// sur chaque page thème, afin de ne pas dupliquer le HTML.
// ============================================================

import GlossaryText from './GlossaryText';

export default function ThemeSection({ title, text, items }) {
  return (
    <section className="theme-section">
      <h2 className="theme-section-title">{title}</h2>

      {/* Cas "paragraphe simple" */}
      {text && (
        <p className="theme-section-text">
          <GlossaryText text={text} />
        </p>
      )}

      {/* Cas "liste à puces" (capacités, limites...) */}
      {items && (
        <ul className="theme-section-list">
          {items.map((item, index) => (
            <li key={index}>
              <GlossaryText text={item} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
