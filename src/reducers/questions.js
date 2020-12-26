import {
  GET_QUESTIONS,
  GET_QUESTIONS_FAILURE,
  GET_QUESTIONS_SUCCESS,
} from "../actions/questions";

const initialState = {
  questionsList: [],
  loading: false,
  error: null,
};

const questions = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return { ...state, loading: true, error: null };
    case GET_QUESTIONS_SUCCESS:
      return { ...state, questionsList: action.questions, loading: false };
    case GET_QUESTIONS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
        questionsList: [],
      };
    default:
      return state;
  }
};

export default questions;
