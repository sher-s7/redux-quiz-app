const createMarkup = (text) => {
  return { __html: text };
};
const Question = ({ text, id, setAnswer }) => {
  return (
    <li>
      <p dangerouslySetInnerHTML={createMarkup(text)} />
      <label htmlFor="True">
        <input
          type="radio"
          value="True"
          name={`answer${id}`}
          onClick={() => setAnswer("True")}
        />{" "}
        True
      </label>
      <label htmlFor="False">
        <input
          type="radio"
          value="False"
          name={`answer${id}`}
          onClick={() => setAnswer("False")}
        />{" "}
        False
      </label>
    </li>
  );
};
export default Question;
