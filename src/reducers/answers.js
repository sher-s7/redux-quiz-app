import { SET_ANSWER } from "../actions/answers";

const answers = (state = {}, action) => {
  switch (action.type) {
    case SET_ANSWER:
      return {
        ...state,
        [action.id]: { userAnswer: action.answer },
      };
    default:
      return state;
  }
};

export default answers;
