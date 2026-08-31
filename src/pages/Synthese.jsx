// ============================================================
// SYNTHESE.JSX — Page de synthèse
// ============================================================
// Affiche l'intro, les 4 fils conducteurs (threads) et le
// tableau récapitulatif, tous définis dans data/synthese.js.
// ============================================================

import { Link } from 'react-router-dom';
import { syntheseIntro, threads, summaryTable } from '../data/synthese';
import { getThemeById } from '../data/themes';
import GlossaryText from '../components/GlossaryText';

export default function Synthese() {
  return (
    <div className="page">
      <header className="theme-header accent-steel">
        <p className="eyebrow">07 — Vision d'ensemble</p>
        <h1 className="theme-header-title">Synthèse</h1>
        <p className="theme-header-note">Pourquoi une synthèse ?</p>
      </header>

      <p className="theme-section-text">
        <GlossaryText text={syntheseIntro} />
      </p>

      <div className="divider" />

      {/* ---------- LES 4 FILS CONDUCTEURS ---------- */}
      <div className="threads">
        {threads.map((thread) => (
          <article key={thread.number} className="thread-card chamfer-card">
            <span className="thread-card-number">{thread.number}</span>
            <h2 className="thread-card-title">{thread.title}</h2>

            {/* Badges rappelant quels thèmes sont concernés par ce fil */}
            <div className="thread-card-tags">
              {thread.themesLies.map((id) => {
                const t = getThemeById(id);
                return t ? (
                  <Link
                    key={id}
                    to={`/theme/${id}`}
                    className="badge badge-civil"
                  >
                    {t.title}
                  </Link>
                ) : null;
              })}
            </div>

            <p className="thread-card-text">
              <GlossaryText text={thread.content} />
            </p>
          </article>
        ))}
      </div>

      <div className="divider" />

      {/* ---------- TABLEAU RÉCAPITULATIF ---------- */}
      <section className="summary-table-wrap">
        <h2 className="theme-section-title">En résumé</h2>
        <table className="summary-table">
          <thead>
            <tr>
              <th>Fil conducteur</th>
              <th>Thèmes concernés</th>
            </tr>
          </thead>
          <tbody>
            {summaryTable.map((row, index) => (
              <tr key={index}>
                <td>{row.fil}</td>
                <td>{row.themes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
