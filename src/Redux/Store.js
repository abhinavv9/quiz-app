import { configureStore } from "@reduxjs/toolkit";
import setTimeReducer from "./Slices/timeSlice";
import switchSectionReducer from "./Slices/switchSlice";
import questionNoReducer from "./Slices/questionSlice";
import answerReducer from "./Slices/answerSlice";
import quizReducer from "./Slices/quizSlice";
import topicReducer from "./Slices/topicSlice.js";

export const store = configureStore({
  reducer: {
    topic: topicReducer,
    selectQuiz: quizReducer,
    answer: answerReducer,
    question: questionNoReducer,
    switch: switchSectionReducer,
    time: setTimeReducer,
  },
});
