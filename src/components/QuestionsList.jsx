const QuestionsList = ({ questionsList, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>There was an error while fetching the questions</p>;

  return (
    <ul>
      {questionsList.map((question, index) => (
        <li key={index}>{question.question}</li>
      ))}
    </ul>
  );
};

export default QuestionsList;
