# IA & Défense — Site CDSG

Site de présentation pour le projet de classe Défense (CDSG) sur l'intelligence
artificielle dans les domaines civil et militaire.

## Démarrer le projet en local

1. Installer les dépendances (une seule fois) :
   ```
   npm install
   ```

2. Lancer le serveur de développement :
   ```
   npm run dev
   ```
   Le site s'ouvre sur http://localhost:5173

3. Générer la version finale (pour l'hébergement) :
   ```
   npm run build
   ```
   Les fichiers prêts à héberger sont générés dans le dossier `dist/`.

## Où modifier le contenu

- **Texte des 6 thèmes** → `src/data/themes.js`
- **Texte de la page Synthèse** → `src/data/synthese.js`
- **Termes du glossaire (info-bulles)** → `src/data/glossary.js`
- **Couleurs / polices** → `src/styles/global.css`
- **Titre du site, texte de la page d'accueil** → `src/pages/Home.jsx`

Chaque fichier contient des commentaires expliquant sa structure et comment
le modifier sans connaissances avancées en React.

## Structure du projet

```
src/
├── main.jsx              (point d'entrée technique)
├── App.jsx                (assemble navigation + routes)
├── ThemeContext.jsx        (gestion du mode clair/sombre)
├── styles/
│   ├── global.css          (variables de couleurs, polices)
│   ├── theme.css            (cartes chanfreinées, badges, tooltip)
│   ├── navigation.css       (menu, barre du haut)
│   └── pages.css            (mise en page du contenu)
├── data/
│   ├── themes.js            (⭐ contenu des 6 thèmes)
│   ├── synthese.js          (⭐ contenu de la page Synthèse)
│   └── glossary.js          (⭐ termes techniques du glossaire)
├── components/               (briques réutilisables)
└── pages/                     (Home, ThemePage, Synthese)
```

## Déploiement sur GitHub Pages

Le projet est déjà configuré pour GitHub Pages (paquet `gh-pages` installé,
scripts prêts). Voici la marche à suivre complète :

1. **Créer un dépôt sur GitHub** (sur github.com, bouton "New repository").
   Note bien son nom exact (ex. `cdsg-ia-defense`).

2. **Vérifier `vite.config.js`** : la ligne `base: '/cdsg-ia-defense/'` doit
   correspondre EXACTEMENT au nom de ton dépôt GitHub, avec un `/` au début
   et à la fin. Si ton dépôt porte un autre nom, modifie cette ligne.

3. **Envoyer le code sur GitHub** (dans le dossier du projet, terminal) :
   ```
   git init
   git add .
   git commit -m "Premier envoi du site"
   git branch -M main
   git remote add origin https://github.com/<TON-PSEUDO>/<NOM-DU-DEPOT>.git
   git push -u origin main
   ```
   (remplace `<TON-PSEUDO>` et `<NOM-DU-DEPOT>` par tes informations)

4. **Déployer** (une seule commande, à relancer à chaque mise à jour du
   site) :
   ```
   npm run deploy
   ```
   Cette commande construit le site (`npm run build`), génère le
   `404.html` nécessaire à la navigation (voir `scripts/copy-404.cjs`), et
   envoie automatiquement le résultat sur une branche `gh-pages` du dépôt.

5. **Activer GitHub Pages** : sur la page du dépôt GitHub → onglet
   **Settings** → section **Pages** (menu de gauche) → sous "Build and
   deployment", choisis la branche **gh-pages** et le dossier **/ (root)**
   → **Save**.

6. Après une ou deux minutes, le site est en ligne à l'adresse :
   ```
   https://<TON-PSEUDO>.github.io/<NOM-DU-DEPOT>/
   ```

### Mettre à jour le site après une modification

À chaque fois que tu modifies un fichier (ex. `src/data/themes.js`) :
```
git add .
git commit -m "Description de la modification"
git push
npm run deploy
```
Le `git push` sauvegarde ton code source sur GitHub (pour toi/l'historique),
et `npm run deploy` republie la version visible en ligne — les deux étapes
sont indépendantes, pense à faire les deux.

### Autres hébergeurs (alternative)

Le dossier `dist/` généré par `npm run build` peut aussi être déployé tel
quel sur **Netlify** ou **Vercel** (glisser-déposer le dossier, ou connecter
le dépôt Git avec build command `npm run build` et publish directory
`dist`). Dans ce cas, remets `base: '/'` dans `vite.config.js`, ces
hébergeurs servant le site à la racine du domaine.
