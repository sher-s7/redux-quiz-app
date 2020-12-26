import QuestionContainer from "../containers/QuestionContainer";

const QuestionsList = ({ questionsList, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>There was an error while fetching the questions</p>;

  return (
    <ol>
      {questionsList.map((question, index) => (
        <QuestionContainer key={index} text={question.question} id={index} />
      ))}
    </ol>
  );
};

export default QuestionsList;
