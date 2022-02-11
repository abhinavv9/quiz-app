import { configureStore } from "@reduxjs/toolkit";
import answerReducer from './Slices/answerSlice';
import quizReducer from "./Slices/quizSlice";
import topicReducer from "./Slices/topicSlice.js";

export const store = configureStore({
  reducer: { topic: topicReducer, selectQuiz: quizReducer, answer: answerReducer },

});
