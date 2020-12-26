import { SET_SCORE } from "../actions/score";

const score = (state = null, action) => {
  switch (action.type) {
    case SET_SCORE:
      return action.score;
    default:
      return state;
  }
};

export default score;
