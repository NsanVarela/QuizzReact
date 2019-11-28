const qBank = [
  {
    question:
      `Est-ce que React est une librairie JS pour développer des Web App côté Front ?`,
    answers: [`Vrai`, `Faux`],
    correct: `Vrai`,
    questionId: `1`
  },
  {
    question:
      `Est-ce que JS est un langage purement fonctionnel ?`,
    answers: [`Vrai`, `Faux`],
    correct: `Faux`,
    questionId: `2`
  },
  {
    question:
      `La fonction ReactDOM.start() vous permet de rendre du contenu React dans une page HTML ??`,
    answers: [`Vrai`, `Faux`],
    correct: `Faux`,
    questionId: `3`
  },
  {
    question:
      `React est une bibliothèque JavaScript front-end développée par Facebook en 2011.`,
    answers: [`Vrai`, `Faux`],
    correct: `Vrai`,
    questionId: `4`
  },
  {
    question:
      `React utilise le DOM virtuel au lieu du DOM réel`,
    answers: [`Vrai`, `Faux`],
    correct: `Vrai`,
    questionId: `5`
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
