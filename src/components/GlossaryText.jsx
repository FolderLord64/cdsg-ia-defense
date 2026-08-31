// ============================================================
// GLOSSARYTEXT.JSX — Détection automatique des termes du glossaire
// ============================================================
// Ce composant prend un texte simple (string) en entrée et
// repère automatiquement, dedans, tous les termes présents dans
// data/glossary.js. Chaque terme trouvé est enrobé du composant
// Tooltip pour devenir une info-bulle au survol/tap.
//
// UTILISATION dans une page :
//   <GlossaryText text={theme.definition} />
//
// Tu n'as RIEN à faire manuellement dans les textes de
// themes.js : ajoute juste le terme dans data/glossary.js et il
// sera détecté partout où il apparaît sur le site.
// ============================================================

import { glossary } from '../data/glossary';
import Tooltip from './Tooltip';

// Échappe les caractères spéciaux d'une chaîne pour l'utiliser
// dans une expression régulière (ex. le point dans "R.O.E.M.")
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Construit une seule expression régulière qui reconnaît
// n'importe lequel des termes du glossaire, en testant d'abord
// les termes les plus longs (pour éviter qu'un terme court comme
// "IA" ne "mange" un terme plus long qui le contient).
//
// \b ... \b = "limite de mot" : impose que le terme soit entouré
// d'une frontière de mot (début/fin de mot, espace, ponctuation)
// des deux côtés. Sans ça, "API" matchait aussi à l'intérieur de
// "rapidement" ou "rapidité" — bug corrigé grâce à ces \b.
const sortedTerms = [...glossary].sort(
  (a, b) => b.term.length - a.term.length
);
const pattern = new RegExp(
  `\\b(${sortedTerms.map((g) => escapeRegex(g.term)).join('|')})\\b`,
  'gi' // g = toutes les occurrences, i = insensible à la casse
);

export default function GlossaryText({ text }) {
  if (!text) return null;

  // Découpe le texte en gardant les termes trouvés grâce aux
  // parenthèses captantes de la regex (String.split conserve les
  // groupes capturés dans le tableau résultat).
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, index) => {
        // Cherche si ce fragment correspond exactement à un terme
        // du glossaire (comparaison insensible à la casse)
        const match = glossary.find(
          (g) => g.term.toLowerCase() === part.toLowerCase()
        );

        if (match) {
          return (
            <Tooltip
              key={`${match.term}-${index}`}
              term={match.term}
              definition={match.definition}
            >
              {part}
            </Tooltip>
          );
        }

        // Fragment de texte "normal" (pas un terme du glossaire)
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}
