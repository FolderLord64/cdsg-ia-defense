// ============================================================
// THEMECONTEXT.JSX — Gestion du mode clair / sombre
// ============================================================
// Ce fichier crée un "Contexte" React : un état partagé par
// toute l'application, accessible depuis n'importe quel
// composant via le hook useTheme() (ex. dans Navigation.jsx
// pour le bouton soleil/lune).
//
// Fonctionnement :
//   - "theme" vaut 'dark' ou 'light'
//   - à chaque changement, on pose l'attribut data-theme sur la
//     balise <html>, ce qui active automatiquement les bonnes
//     variables CSS définies dans styles/global.css
//
// ℹ️ Remarque sur la persistance : dans l'environnement Claude,
// le stockage navigateur (localStorage) n'est pas disponible,
// donc le choix clair/sombre est remis à zéro (mode sombre par
// défaut) à chaque rechargement complet de la page. Si tu
// déploies ce site en dehors de Claude (Netlify, GitHub Pages,
// etc.), tu peux décommenter les lignes marquées
// "// PERSISTANCE" ci-dessous pour que le choix soit mémorisé
// entre les visites.
// ============================================================

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  // État du thème actuel : 'dark' (par défaut) ou 'light'
  const [theme, setTheme] = useState('dark');

  // PERSISTANCE (désactivée par défaut, voir remarque ci-dessus) :
  // useEffect(() => {
  //   const saved = localStorage.getItem('cdsg-theme');
  //   if (saved) setTheme(saved);
  // }, []);

  // À chaque changement de thème, on met à jour l'attribut
  // data-theme sur <html> pour activer les bonnes variables CSS
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    // PERSISTANCE : localStorage.setItem('cdsg-theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook à utiliser dans les composants : const { theme, toggleTheme } = useTheme();
export function useTheme() {
  return useContext(ThemeContext);
}
