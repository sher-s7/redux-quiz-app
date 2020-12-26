import React from "react";
import { connect } from "react-redux";
import { getQuestions } from "./actions/questions";
import Questions from "./containers/Questions";

class Quiz extends React.Component {
  componentDidMount() {
    this.props.dispatch(getQuestions());
  }
  render() {
    return (
      <div className="QuizApp">
        <Questions />
      </div>
    );
  }
}

export default connect()(Quiz);
