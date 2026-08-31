// ============================================================
// GRIDBACKGROUND.JSX — Motif de grille en filigrane
// ============================================================
// Élément purement décoratif : un quadrillage très discret,
// façon carte tactique / circuit imprimé, fixé en arrière-plan
// de toute l'application (voir App.jsx). Les couleurs viennent
// des variables --grid-line-color / --grid-dot-color définies
// dans styles/global.css (donc adaptées automatiquement au mode
// clair/sombre).
//
// aria-hidden="true" : cet élément est ignoré par les lecteurs
// d'écran puisqu'il n'apporte aucune information, seulement de
// la décoration.
// ============================================================

export default function GridBackground() {
  return (
    <div className="grid-background" aria-hidden="true">
      <svg width="100%" height="100%">
        <defs>
          {/* Motif répété : une case de grille de 48x48px avec un
              point à l'intersection */}
          <pattern
            id="tactical-grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="var(--grid-line-color)"
              strokeWidth="1"
            />
            <circle cx="0" cy="0" r="1.5" fill="var(--grid-dot-color)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tactical-grid)" />
      </svg>
    </div>
  );
}
