import React from "react";
import { connect } from "react-redux";
import { getQuestions } from "./actions/questions";
import Questions from "./containers/Questions";
import SubmitContainer from "./containers/SubmitContainer";

class Quiz extends React.Component {
  componentDidMount() {
    this.props.dispatch(getQuestions());
  }
  render() {
    return (
      <div className="QuizApp">
        <Questions />
        <SubmitContainer />
      </div>
    );
  }
}

export default connect()(Quiz);
