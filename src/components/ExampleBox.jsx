// ============================================================
// EXAMPLEBOX.JSX — Bloc "exemple civil" ou "exemple militaire"
// ============================================================
// Prop "type" : 'civil' ou 'militaire' — détermine le badge de
// couleur affiché (bleu acier pour civil, vert militaire pour
// militaire), cohérent avec l'identité visuelle du site.
//
// Prop "icon" : nom de code d'une icône définie dans
// components/icons.jsx (ex. "chart", "plane"...) — dessinée par
// nos soins, donc libre de droits.
//
// Prop "photo" (optionnelle) : { url, credit } — une vraie photo
// libre de droits (Unsplash/Pexels, licence vérifiée) à afficher
// au-dessus du texte. Quand ce champ est absent dans
// data/themes.js, seule l'icône est affichée — aucune image
// cassée, aucun placeholder.
// ============================================================

import GlossaryText from './GlossaryText';
import { ICONS } from './icons';

export default function ExampleBox({ type, text, icon, photo }) {
  const isCivil = type === 'civil';
  const IconComponent = icon ? ICONS[icon] : null;

  return (
    <div className="example-box chamfer-card">
      {/* Photo libre de droits (si renseignée dans data/themes.js) */}
      {photo && (
        <div className="example-box-photo">
          <img src={photo.url} alt="" loading="lazy" />
          <span className="example-box-credit">{photo.credit}</span>
        </div>
      )}

      <div className="example-box-header">
        {IconComponent && (
          <span className={`example-box-icon ${isCivil ? 'icon-civil' : 'icon-militaire'}`}>
            <IconComponent />
          </span>
        )}
        <span className={`badge ${isCivil ? 'badge-civil' : 'badge-militaire'}`}>
          Exemple {isCivil ? 'civil' : 'militaire'}
        </span>
      </div>

      <p className="example-box-text">
        <GlossaryText text={text} />
      </p>
    </div>
  );
}
