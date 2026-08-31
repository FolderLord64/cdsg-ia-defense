// ============================================================
// NOTFOUND.JSX — Page 404 personnalisée
// ============================================================
// Affichée pour toute URL qui ne correspond à aucune route (voir
// la route catch-all path="*" dans App.jsx). Ton léger, cohérent
// avec l'identité "radar/détection" du site.
//
// L'arrière-plan animé est DÉSACTIVÉ par défaut (respect du
// confort de lecture / des personnes sensibles au mouvement) et
// s'active volontairement via l'interrupteur ci-dessous.
// ============================================================

import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  const [animated, setAnimated] = useState(false);

  return (
    <div className="page notfound-page">
      <p className="eyebrow">Erreur 404</p>
      <h1 className="notfound-title">Cible introuvable sur le radar 🎯</h1>
      <p className="notfound-text">
        La page que vous cherchez semble avoir été... déclassifiée. Ou alors
        elle n'a simplement jamais existé. Nos meilleurs analystes (une
        poignée de lignes de code) n'ont rien retrouvé à cette adresse.
      </p>

      {/* ---------- RADAR DÉCORATIF ---------- */}
      <div
        className={`notfound-radar ${animated ? 'is-animated' : ''}`}
        aria-hidden="true"
      >
        <div className="notfound-radar-sweep" />
        <span className="notfound-radar-blip" style={{ top: '32%', left: '62%' }} />
        <span
          className="notfound-radar-blip"
          style={{ top: '64%', left: '38%', animationDelay: '1.3s' }}
        />
        <span
          className="notfound-radar-blip"
          style={{ top: '48%', left: '78%', animationDelay: '2.4s' }}
        />
      </div>

      {/* ---------- INTERRUPTEUR ARRIÈRE-PLAN ANIMÉ ---------- */}
      <label className="notfound-toggle">
        <input
          type="checkbox"
          checked={animated}
          onChange={(e) => setAnimated(e.target.checked)}
        />
        <span className="notfound-toggle-track">
          <span className="notfound-toggle-thumb" />
        </span>
        Activer le radar animé
      </label>

      <div className="notfound-actions">
        <Link to="/" className="prev-next-link">
          <span className="prev-next-label">← Retour</span>
          <span className="prev-next-title">Accueil</span>
        </Link>
        <Link to="/synthese" className="prev-next-link">
          <span className="prev-next-label">Ou bien</span>
          <span className="prev-next-title">Voir la Synthèse</span>
        </Link>
      </div>
    </div>
  );
}
