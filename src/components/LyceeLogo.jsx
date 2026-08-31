// ============================================================
// LYCEELOGO.JSX — Logo officiel du lycée
// ============================================================
// Affiche le logo fourni (public/images/logo-lycee.png), avec un
// petit fond clair arrondi derrière : le logo utilise des
// couleurs vives (bleu, rouge, jaune, vert) pensées pour un fond
// clair, donc sans ce fond il serait moins lisible en mode sombre.
//
// Pour REMPLACER le logo par une autre image : dépose le nouveau
// fichier dans public/images/ et change le "src" ci-dessous.
// ============================================================

export default function LyceeLogo({ height = 40, className = '' }) {
  return (
    <span className={`lycee-logo-badge ${className}`} style={{ height }}>
      <img
        // import.meta.env.BASE_URL correspond au paramètre "base" de
        // vite.config.js — indispensable pour que l'image se charge
        // correctement une fois déployée dans un sous-dossier (ex.
        // GitHub Pages : /nom-du-depot/images/logo-lycee.png)
        src={`${import.meta.env.BASE_URL}images/logo-lycee.png`}
        alt="Logo du Lycée Les Sept Mares - Maurepas"
        style={{ height: height - 10 }}
      />
    </span>
  );
}
