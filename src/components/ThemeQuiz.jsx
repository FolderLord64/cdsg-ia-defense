// ============================================================
// THEMEQUIZ.JSX — Quiz de révision interactif
// ============================================================
// Affiche les questions une par une (voir data/themes.js, champ
// "quiz" de chaque thème). Au clic sur une réponse : la bonne/
// mauvaise réponse s'affiche immédiatement avec une explication,
// puis un bouton permet de passer à la question suivante. À la
// fin, un score récapitulatif s'affiche avec un bouton pour
// recommencer.
//
// Pour changer le nombre de questions ou leur contenu : tout se
// passe dans data/themes.js (champ "quiz" de chaque thème), pas
// ici.
// ============================================================

import { useState } from 'react';

export default function ThemeQuiz({ questions }) {
  const [step, setStep] = useState(0); // index de la question actuelle
  const [selected, setSelected] = useState(null); // option choisie pour la question actuelle
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!questions || questions.length === 0) return null;

  const current = questions[step];
  const isLast = step === questions.length - 1;

  function handleSelect(optionIndex) {
    if (selected !== null) return; // empêche de changer de réponse après coup
    setSelected(optionIndex);
    if (optionIndex === current.correct) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    if (isLast) {
      setFinished(true);
    } else {
      setStep((s) => s + 1);
      setSelected(null);
    }
  }

  function handleRestart() {
    setStep(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <div className="quiz-card chamfer-card">
        <p className="eyebrow">Quiz terminé</p>
        <p className="quiz-score">
          {score} / {questions.length} bonnes réponses
        </p>
        <button type="button" className="quiz-restart" onClick={handleRestart}>
          Recommencer le quiz
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-card chamfer-card">
      <div className="quiz-header">
        <p className="eyebrow">
          Quiz de révision — question {step + 1} / {questions.length}
        </p>
      </div>

      <p className="quiz-question">{current.question}</p>

      <div className="quiz-options">
        {current.options.map((option, index) => {
          const isSelected = selected === index;
          const isCorrectOption = index === current.correct;
          // Détermine la classe visuelle : neutre / correcte / incorrecte
          let optionClass = 'quiz-option';
          if (selected !== null) {
            if (isCorrectOption) optionClass += ' quiz-option-correct';
            else if (isSelected) optionClass += ' quiz-option-incorrect';
          }
          return (
            <button
              key={index}
              type="button"
              className={optionClass}
              onClick={() => handleSelect(index)}
              disabled={selected !== null}
            >
              {option}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className="quiz-feedback">
          <p className="quiz-feedback-verdict">
            {selected === current.correct ? '✓ Bonne réponse !' : '✗ Pas tout à fait.'}
          </p>
          <p className="quiz-feedback-explanation">{current.explanation}</p>
          <button type="button" className="quiz-next" onClick={handleNext}>
            {isLast ? 'Voir mon score' : 'Question suivante →'}
          </button>
        </div>
      )}
    </div>
  );
}
