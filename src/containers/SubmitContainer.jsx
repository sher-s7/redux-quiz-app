import { connect } from "react-redux";
import { setScore } from "../actions/score";
import Submit from "../components/Submit";

const mapStateToProps = (state) => ({
  questionsList: state.questions.questionsList,
  answers: state.answers,
  score: state.score,
});

const mapDispatchToProps = (dispatch) => ({
  setScore: (score) => dispatch(setScore(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Submit);
