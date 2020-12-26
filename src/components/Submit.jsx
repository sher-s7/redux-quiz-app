const Submit = ({ questionsList, answers, score, setScore }) => {
  const handleSubmitQuiz = () => {
    let count = 0;
    questionsList.forEach((question, index) => {
      if (
        answers[index] &&
        question.correct_answer === answers[index].userAnswer
      ) {
        count++;
      }
    });
    setScore(count);
  };
  return (
    <div>
      <button onClick={handleSubmitQuiz}>SUBMIT</button>
      {score !== null ? <h1>SCORE: {score}</h1> : null}
    </div>
  );
};

export default Submit;
