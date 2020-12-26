import axios from "axios";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const GET_QUESTIONS_SUCCESS = "GET_QUESTIONS_SUCCESS";
export const GET_QUESTIONS_FAILURE = "GET_QUESTIONS_FAILURE";

export const getQuestions = () => {
  return (dispatch) => {
    dispatch({ type: GET_QUESTIONS });
    return axios
      .get("https://opentdb.com/api.php?amount=5&difficulty=easy&type=boolean")
      .then((res) =>
        dispatch({ type: GET_QUESTIONS_SUCCESS, questions: res.data.results })
      )
      .catch((err) => dispatch({ type: GET_QUESTIONS_FAILURE, error: err }));
  };
};
