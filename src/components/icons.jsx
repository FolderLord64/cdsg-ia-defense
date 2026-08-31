// ============================================================
// ICONS.JSX — Icônes originales par thème/exemple
// ============================================================
// Chaque icône est un petit dessin SVG en ligne (style "outline"),
// dessiné pour ce projet — donc aucun souci de droits d'auteur,
// contrairement à des images trouvées sur le web. Elles héritent
// de la couleur du texte parent via "currentColor".
//
// Pour ajouter une icône : copie le modèle d'un export existant,
// dessine ton propre tracé SVG, puis référence son nom dans
// data/themes.js (voir la fonction ICONS en bas de ce fichier).
// ============================================================

const common = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

// Tableau de bord / graphique (IA Descriptive — exemple civil)
export function ChartIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 15l3-4 3 2 4-6" />
    </svg>
  );
}

// Antenne / signal (IA Descriptive — exemple militaire, ROEM)
export function SignalIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <path d="M12 20v-7" />
      <path d="M8 13a5 5 0 0 1 8 0" />
      <path d="M5 10a9 9 0 0 1 14 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Jauge / maintenance (IA Prédictive — exemple civil)
export function GaugeIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 13l3.5-3.5" />
      <path d="M9 5.5l.5-1.8M15 5.5l-.5-1.8" />
    </svg>
  );
}

// Avion (IA Prédictive — exemple militaire, maintenance aéronefs)
export function PlaneIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <path d="M2 12l20-6-6 6 6 6z" />
      <path d="M9 12H2" />
    </svg>
  );
}

// Itinéraire / route (IA Prescriptive — exemple civil)
export function RouteIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="6" r="2" />
      <path d="M5 16C5 10 9 10 12 10s7 0 7-4" strokeDasharray="2 2.5" />
    </svg>
  );
}

// Écrans de commandement (IA Prescriptive — exemple militaire)
export function CommandIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <rect x="3" y="4" width="8" height="6" rx="1" />
      <rect x="13" y="4" width="8" height="6" rx="1" />
      <rect x="3" y="13" width="8" height="6" rx="1" />
      <rect x="13" y="13" width="8" height="6" rx="1" />
    </svg>
  );
}

// Bulle de dialogue (IA Générative — exemple civil)
export function ChatIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <path d="M4 5h16v11H9l-4 4V5z" />
      <path d="M8 9h8M8 12h5" />
    </svg>
  );
}

// Visage scanné / écran altéré (IA Générative — exemple militaire, deepfake)
export function FaceScanIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <path d="M4 8V5a1 1 0 0 1 1-1h3M20 8V5a1 1 0 0 0-1-1h-3M4 16v3a1 1 0 0 0 1 1h3M20 16v3a1 1 0 0 1-1 1h-3" />
      <circle cx="9" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="11" r="1" fill="currentColor" stroke="none" />
      <path d="M9 15c1 1 5 1 6 0" />
    </svg>
  );
}

// Réseau de nœuds (Fonctionnement de l'IA)
export function NetworkIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <circle cx="12" cy="5" r="1.6" />
      <circle cx="5" cy="12" r="1.6" />
      <circle cx="19" cy="12" r="1.6" />
      <circle cx="12" cy="19" r="1.6" />
      <path d="M12 6.6L5.9 11M12 6.6L18.1 11M6.6 12h10.8M12 17.4V13" />
    </svg>
  );
}

// Balance (Risques et Dérives — exemple civil, biais algorithmique)
export function ScaleIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <path d="M12 3v18M7 21h10" />
      <path d="M4 7l4-1.3L4 7zM4 7l4 1.3M4 7l-2 5a3 3 0 0 0 6 0zM16 7l4-1.3M16 7l4 1.3M16 7l-2 5a3 3 0 0 0 6 0z" />
    </svg>
  );
}

// Drone (Risques et Dérives — exemple militaire, zoom drones)
export function DroneIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <circle cx="12" cy="12" r="2.4" />
      <path d="M6 6l3 3M18 6l-3 3M6 18l3-3M18 18l-3-3" />
      <circle cx="5" cy="5" r="2" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
    </svg>
  );
}

// Registre : associe un nom de code (utilisé dans data/themes.js) à
// son composant icône. C'est ce que lisent ExampleBox et ThemePage.
export const ICONS = {
  chart: ChartIcon,
  signal: SignalIcon,
  gauge: GaugeIcon,
  plane: PlaneIcon,
  route: RouteIcon,
  command: CommandIcon,
  chat: ChatIcon,
  faceScan: FaceScanIcon,
  network: NetworkIcon,
  scale: ScaleIcon,
  drone: DroneIcon,
};
