import { combineReducers } from "redux";
import answers from "./answers";
import questions from "./questions";
import score from "./score";

export default combineReducers({ questions, answers, score });
