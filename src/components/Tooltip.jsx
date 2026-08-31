// ============================================================
// TOOLTIP.JSX — Info-bulle de définition (glossaire)
// ============================================================
// Enrobe un mot/terme technique et affiche sa définition dans
// une petite bulle flottante :
//   - au SURVOL de la souris (onMouseEnter / onMouseLeave)
//   - au TAP sur mobile/tactile, puisque le survol n'existe pas
//     au doigt (onClick bascule l'affichage)
//
// Utilisé automatiquement par GlossaryText.jsx — tu n'as en
// principe pas besoin d'utiliser ce composant directement.
// ============================================================

import { useState, useRef, useEffect } from 'react';

export default function Tooltip({ term, definition, children }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Ferme la bulle si on clique/tape n'importe où EN DEHORS d'elle.
  // Nécessaire sur mobile (tap) puisqu'il n'y a pas de mouseleave
  // au doigt pour fermer automatiquement la bulle.
  useEffect(() => {
    if (!open) return;

    function handleOutsideClick(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [open]);

  return (
    <span
      ref={wrapperRef}
      className="tooltip-wrapper"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="tooltip-trigger"
        // onClick permet le tap sur mobile (pas de hover au doigt).
        // On ouvre systématiquement (jamais un simple toggle) car un
        // clic souris déclenche d'abord onMouseEnter (open=true) : un
        // toggle ici refermerait la bulle aussitôt ouverte.
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
        aria-expanded={open}
        aria-label={`Définition de ${term}`}
      >
        {children}
      </button>

      {open && (
        <span className="tooltip-bubble" role="tooltip">
          <span className="tooltip-term">{term}</span>
          <span className="tooltip-definition">{definition}</span>
        </span>
      )}
    </span>
  );
}
