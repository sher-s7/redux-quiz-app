import { connect } from "react-redux";
import QuestionsList from "../components/QuestionsList";

const mapStateToProps = (state) => ({
  questionsList: state.questions.questionsList,
  loading: state.questions.loading,
  error: state.questions.error,
});

export default connect(mapStateToProps)(QuestionsList);
