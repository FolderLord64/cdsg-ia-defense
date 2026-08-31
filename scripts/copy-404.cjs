// ============================================================
// COPY-404.CJS — Compatibilité GitHub Pages / navigation directe
// ============================================================
// GitHub Pages sert des fichiers statiques : si quelqu'un ouvre
// directement une URL comme .../theme/generative (au lieu de
// cliquer depuis l'accueil), il n'y a pas de fichier
// "theme/generative/index.html" sur le serveur → erreur 404.
//
// L'astuce standard (utilisée par de nombreux sites React/Vue
// hébergés sur GitHub Pages) : dupliquer index.html en 404.html.
// GitHub Pages affiche alors index.html à la place de son "404
// standard", ce qui laisse le temps à React Router de prendre le
// relais et d'afficher la bonne page côté client.
//
// Ce script est lancé automatiquement après "npm run build" (voir
// le script "postbuild" dans package.json) — tu n'as normalement
// jamais besoin de l'exécuter toi-même.
// ============================================================

const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const indexPath = path.join(distDir, 'index.html');
const notFoundPath = path.join(distDir, '404.html');

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('✓ 404.html généré (copie de index.html) pour GitHub Pages');
} else {
  console.warn('⚠ dist/index.html introuvable — as-tu bien lancé "npm run build" ?');
}
