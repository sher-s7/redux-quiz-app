import { connect } from "react-redux";
import { setAnswer } from "../actions/answers";
import Question from "../components/Question";

const mapDispatchToProps = (dispatch, ownProps) => ({
  setAnswer: (answer) => dispatch(setAnswer(answer, ownProps.id)),
});

export default connect(null, mapDispatchToProps)(Question);
