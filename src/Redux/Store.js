import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./Slices/quizSlice";
import topicReducer from "./Slices/topicSlice.js";

export const store = configureStore({
  reducer: { topic: topicReducer, quiz: quizReducer },
});
