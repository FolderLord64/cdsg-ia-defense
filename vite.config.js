import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // ============================================================
  // "base" — IMPORTANT POUR GITHUB PAGES
  // ============================================================
  // GitHub Pages héberge normalement un site à une adresse du
  // type https://<utilisateur>.github.io/<nom-du-depot>/ — donc
  // PAS à la racine du domaine. Sans ce réglage, les images, le
  // CSS et les polices ne se chargeraient pas correctement une
  // fois déployés (le site chercherait les fichiers à la racine
  // du domaine github.io au lieu du sous-dossier du dépôt).
  //
  // ⚠️ REMPLACE '/NOM-DU-DEPOT/' PAR LE NOM EXACT DE TON DÉPÔT
  // GitHub (celui visible dans l'URL du dépôt), avec un slash
  // au début ET à la fin. Exemple : si ton dépôt s'appelle
  // "cdsg-ia-defense", laisse '/cdsg-ia-defense/'.
  //
  // Si un jour tu déploies ailleurs qu'à
  // <utilisateur>.github.io/<nom-du-depot>/ (Netlify, Vercel,
  // domaine personnel...), remets simplement base: '/'.
  base: '/cdsg-ia-defense/',
})
