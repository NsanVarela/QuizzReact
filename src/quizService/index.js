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
      `Est-ce que React est une librairie JS pour développer des Web App côté Front ?`,
    answers: [`Vrai`, `Faux`],
    correct: `Vrai`,
    questionId: `3`
  },
  {
    question:
      `Est-ce que JS est un langage purement fonctionnel ?`,
    answers: [`Vrai`, `Faux`],
    correct: `Faux`,
    questionId: `4`
  },
  {
    question:
      `Est-ce que JS est un langage purement fonctionnel ?`,
    answers: [`Vrai`, `Faux`],
    correct: `Faux`,
    questionId: `5`
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
