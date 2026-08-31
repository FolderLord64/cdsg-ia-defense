// ============================================================
// THEMEPAGE.JSX — Page générique pour un thème
// ============================================================
// Cette UNIQUE page sert à afficher N'IMPORTE LEQUEL des 6
// thèmes : elle lit l'id présent dans l'URL (ex. /theme/risques)
// et va chercher les données correspondantes dans data/themes.js.
//
// → C'est pour ça qu'il n'y a PAS 6 fichiers séparés : modifier
//   le contenu d'un thème se fait uniquement dans data/themes.js,
//   jamais ici.
// ============================================================

import { useParams, Link } from 'react-router-dom';
import { getThemeById, themes } from '../data/themes';
import ThemeSection from '../components/ThemeSection';
import ExampleBox from '../components/ExampleBox';
import GlossaryText from '../components/GlossaryText';
import ThemeQuiz from '../components/ThemeQuiz';
import { ICONS } from '../components/icons';

export default function ThemePage() {
  const { themeId } = useParams();
  const theme = getThemeById(themeId);

  // Sécurité : si quelqu'un visite une URL /theme/xxx qui n'existe
  // pas dans themes.js, on affiche un message plutôt qu'une page
  // cassée.
  if (!theme) {
    return (
      <div className="page">
        <p className="eyebrow">Page introuvable</p>
        <h1>Ce thème n'existe pas.</h1>
        <Link to="/" className="back-link">
          ← Retour à l'accueil
        </Link>
      </div>
    );
  }

  const hasExamples = theme.exempleCivil || theme.exempleMilitaire;
  const ThemeIconComponent = theme.themeIcon ? ICONS[theme.themeIcon] : null;

  // ---------- NAVIGATION THÈME PRÉCÉDENT / SUIVANT ----------
  // Calculée à partir de l'ordre du tableau "themes" dans data/themes.js.
  // Le premier thème n'a pas de "précédent" (on pourrait pointer vers
  // l'accueil), le dernier n'a pas de "suivant" (on pointe vers la
  // Synthèse à la place, qui est la suite logique du parcours).
  const currentIndex = themes.findIndex((t) => t.id === theme.id);
  const prevTheme = currentIndex > 0 ? themes[currentIndex - 1] : null;
  const nextTheme =
    currentIndex < themes.length - 1 ? themes[currentIndex + 1] : null;

  return (
    <div className="page">
      {/* ---------- EN-TÊTE DU THÈME ---------- */}
      <header className={`theme-header accent-${theme.accent}`}>
        <p className="eyebrow">Thème {theme.number} / 06</p>
        <div className="theme-header-row">
          <h1 className="theme-header-title">{theme.title}</h1>
          {/* Icône du thème — uniquement pour "Fonctionnement de l'IA",
              qui n'a pas d'exemples civil/militaire pour en porter une */}
          {ThemeIconComponent && (
            <span className="theme-header-icon">
              <ThemeIconComponent />
            </span>
          )}
        </div>
        {/* La "note" n'existe que pour le thème "Fonctionnement de l'IA" */}
        {theme.note && (
          <p className="theme-header-note">
            <GlossaryText text={theme.note} />
          </p>
        )}
      </header>

      {/* ---------- RÉSUMÉ "EN BREF" + ANALOGIE ----------
          Pratique pour réviser vite ou pour un professeur qui
          survole le contenu avant de le noter. */}
      {(theme.resume || theme.analogie) && (
        <div className="theme-brief">
          {theme.resume && (
            <div className="theme-brief-item">
              <p className="eyebrow">En bref</p>
              <p className="theme-brief-text">
                <GlossaryText text={theme.resume} />
              </p>
            </div>
          )}
          {theme.analogie && (
            <div className="theme-brief-item theme-brief-analogie">
              <p className="eyebrow">Pour l'imager</p>
              <p className="theme-brief-text">
                <GlossaryText text={theme.analogie} />
              </p>
            </div>
          )}
        </div>
      )}

      {/* ---------- DÉFINITION ---------- */}
      <ThemeSection title="Définition" text={theme.definition} />

      <div className="divider" />

      {/* ---------- FONCTIONNEMENT ---------- */}
      <ThemeSection title="Fonctionnement" text={theme.fonctionnement} />

      {/* ---------- SECTIONS SUPPLÉMENTAIRES ----------
          Uniquement présentes sur le thème "Fonctionnement de l'IA"
          (Deep Learning, API, superintelligence) — voir extraSections
          dans data/themes.js. */}
      {theme.extraSections &&
        theme.extraSections.map((section, index) => (
          <ThemeSection
            key={index}
            title={section.title}
            text={section.content}
          />
        ))}

      <div className="divider" />

      {/* ---------- CAPACITÉS ET LIMITES (côte à côte) ---------- */}
      <div className="theme-two-col">
        <ThemeSection title="Capacités" items={theme.capacites} />
        <ThemeSection title="Limites" items={theme.limites} />
      </div>

      {/* ---------- EXEMPLES CIVIL / MILITAIRE ----------
          Absents uniquement pour le thème "Fonctionnement de l'IA" */}
      {hasExamples && (
        <>
          <div className="divider" />
          <section className="theme-examples">
            {theme.exempleCivil && (
              <ExampleBox
                type="civil"
                text={theme.exempleCivil}
                icon={theme.exempleCivilIcon}
                photo={theme.exempleCivilPhoto}
              />
            )}
            {theme.exempleMilitaire && (
              <ExampleBox
                type="militaire"
                text={theme.exempleMilitaire}
                icon={theme.exempleMilitaireIcon}
                photo={theme.exempleMilitairePhoto}
              />
            )}
          </section>
        </>
      )}

      {/* ---------- ZOOMS (uniquement thème "Risques et Dérives") ----------
          Deepfakes et drones — voir "zooms" dans data/themes.js */}
      {theme.zooms && (
        <>
          <div className="divider" />
          <section className="zooms">
            {theme.zooms.map((zoom, index) => {
              const ZoomIcon = zoom.icon ? ICONS[zoom.icon] : null;
              return (
              <article key={index} className="zoom-card chamfer-card">
                <div className="zoom-card-header">
                  {ZoomIcon && (
                    <span className="zoom-card-icon">
                      <ZoomIcon />
                    </span>
                  )}
                  <h3 className="zoom-card-title">{zoom.title}</h3>
                </div>

                <p className="zoom-card-label">Ce que c'est</p>
                <p className="zoom-card-text">
                  <GlossaryText text={zoom.cequecest} />
                </p>

                <p className="zoom-card-label">Dérive civile</p>
                <p className="zoom-card-text">
                  <GlossaryText text={zoom.deriveCivile} />
                </p>

                <p className="zoom-card-label">Dérive militaire</p>
                <p className="zoom-card-text">
                  <GlossaryText text={zoom.deriveMilitaire} />
                </p>

                <p className="zoom-card-label">Limite de la contre-mesure</p>
                <p className="zoom-card-text">
                  <GlossaryText text={zoom.limite} />
                </p>
              </article>
              );
            })}
          </section>
        </>
      )}

      {/* ---------- QUIZ DE RÉVISION ---------- */}
      {theme.quiz && (
        <>
          <div className="divider" />
          <section>
            <h2 className="theme-section-title">Quiz de révision</h2>
            <ThemeQuiz questions={theme.quiz} />
          </section>
        </>
      )}

      <Link to="/synthese" className="back-link">
        Voir comment ce thème se relie aux autres → Synthèse
      </Link>

      {/* ---------- NAVIGATION THÈME PRÉCÉDENT / SUIVANT ---------- */}
      <nav className="theme-prev-next" aria-label="Navigation entre thèmes">
        {prevTheme ? (
          <Link to={`/theme/${prevTheme.id}`} className="prev-next-link prev-next-prev">
            <span className="prev-next-label">← Précédent</span>
            <span className="prev-next-title">{prevTheme.title}</span>
          </Link>
        ) : (
          <Link to="/" className="prev-next-link prev-next-prev">
            <span className="prev-next-label">← Retour</span>
            <span className="prev-next-title">Accueil</span>
          </Link>
        )}

        {nextTheme ? (
          <Link to={`/theme/${nextTheme.id}`} className="prev-next-link prev-next-next">
            <span className="prev-next-label">Suivant →</span>
            <span className="prev-next-title">{nextTheme.title}</span>
          </Link>
        ) : (
          <Link to="/synthese" className="prev-next-link prev-next-next">
            <span className="prev-next-label">Suivant →</span>
            <span className="prev-next-title">Synthèse</span>
          </Link>
        )}
      </nav>
    </div>
  );
}
