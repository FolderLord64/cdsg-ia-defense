// ============================================================
// SOURCES.JSX — Page bibliographie
// ============================================================
// Affiche les références de data/sources.js, groupées par thème.
// ============================================================

import { sourcesByTheme } from '../data/sources';

export default function Sources() {
  return (
    <div className="page">
      <header className="theme-header accent-steel">
        <p className="eyebrow">Bibliographie</p>
        <h1 className="theme-header-title">Sources</h1>
        <p className="theme-header-note">
          Les principales références utilisées pour construire ce dossier.
        </p>
      </header>

      {sourcesByTheme.map((group) => (
        <section key={group.themeTitle} className="sources-group">
          <h2 className="theme-section-title">{group.themeTitle}</h2>
          <ul className="sources-list">
            {group.items.map((item, index) => (
              <li key={index} className="sources-item">
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <span>{item.label}</span>
                )}
                <span className="sources-publisher"> — {item.publisher}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
