// ============================================================
// WAVEBACKGROUND.JSX — Ondes animées en arrière-plan
// ============================================================
// Élément décoratif : deux lignes en forme d'onde/vague qui
// défilent lentement à l'horizontale, en écho au thème "signal /
// onde radio" du site (cohérent avec le ROEM vu en IA Descriptive
// et l'identité "Défense × Tech"). Très discret (faible opacité)
// pour ne jamais gêner la lecture du texte par-dessus.
//
// Technique : chaque <svg> contient DEUX fois le même motif de
// vague, mis côte à côte (viewBox deux fois plus large que le
// motif). Une animation CSS déplace le tout de 0 à -50% : comme
// les deux moitiés sont identiques, la boucle est invisible, on
// ne voit jamais la "couture".
//
// aria-hidden="true" : purement décoratif, ignoré par les
// lecteurs d'écran. Respecte aussi le réglage système "réduire
// les animations" (voir la règle prefers-reduced-motion dans
// styles/global.css, qui coupe cette animation comme toutes les
// autres du site).
// ============================================================

export default function WaveBackground() {
  return (
    <div className="wave-background" aria-hidden="true">
      {/* Vague avant : plus visible, défile vers la gauche */}
      <svg
        className="wave-layer wave-layer-front"
        viewBox="0 0 2400 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C150,40 300,160 600,100 C900,40 1050,160 1200,100
             C1350,40 1500,160 1800,100 C2100,40 2250,160 2400,100"
          fill="none"
          stroke="var(--accent-steel)"
          strokeWidth="1.5"
        />
      </svg>

      {/* Vague arrière : plus discrète et plus lente, défile vers la
          droite — le décalage de vitesse/sens donne un effet de
          profondeur (parallaxe) plutôt qu'un simple aller-retour. */}
      <svg
        className="wave-layer wave-layer-back"
        viewBox="0 0 2400 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,120 C200,180 400,60 700,120 C1000,180 1200,60 1500,120
             C1700,180 1900,60 2200,120 C2350,150 2400,110 2400,120"
          fill="none"
          stroke="var(--accent-military)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
