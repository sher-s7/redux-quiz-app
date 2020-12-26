import { SET_ANSWER } from "../actions/answers";

const answers = (state = [], action) => {
  switch (action.type) {
    case SET_ANSWER:
      return [
        ...state.slice(0, action.id),
        action.answer,
        ...state.slice(action.id + 1),
      ];
    default:
      return state;
  }
};

export default answers;
