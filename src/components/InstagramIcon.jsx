// ============================================================
// INSTAGRAMICON.JSX — Pictogramme Instagram (icône générique)
// ============================================================
// Icône simplifiée en traits (style "outline"), pas une
// reproduction du logo officiel Instagram — juste un pictogramme
// générique reconnaissable (carré arrondi + objectif + flash),
// dessiné en currentColor pour s'adapter à la couleur du texte
// environnant.
// ============================================================

export default function InstagramIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
