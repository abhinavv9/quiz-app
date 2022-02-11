import { useState, useEffect, useMemo } from "react";
import SelectQuiz from "../../Utils/SelectQuiz";
import DataExports from "../../Utils/processData";
import { useSelector, useDispatch } from "react-redux";
import { Answer, ResetAnswer } from "../../Redux/Slices/answerSlice";

import classes from "./Section.module.css";

const Section = ({ questionNo, setQuestionNo }) => {
  //Local states
  const [dataExports, setDataExports] = useState();
  const [answerLocal, setAnswerLocal] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  //redux states
  const topic = useSelector((state) => state.topic.value);
  const quizNo = useSelector((state) => state.selectQuiz.value);
  const answer = useSelector((state) => state.answer.value);
  const dispatch = useDispatch();
  const data = DataExports();

  useEffect(() => {
    setDataExports(data);
  }, []);

  useEffect(() => {
    setDataExports(data);
    dispatch(ResetAnswer());
  }, [quizNo]);

  function handleClickNext() {
    setQuestionNo(questionNo + 1);
    checkAnswer();
  }
  //dispatch async action
  useEffect(() => {
    dispatch(
      Answer({
        status: isCorrect ? "correct" : "incorrect",
        answer: answerLocal,
        id: questionNo,
        correctAnswer: (dataExports[questionNo].answer !== undefined && dataExports[questionNo].answer),
      })
    );
  }, [isCorrect]);

  function handleClickPrev() {
    setQuestionNo(questionNo - 1);
  }

  function checkAnswer() {
    if (String(answerLocal) === String(dataExports[questionNo].answer)) {
      setIsCorrect(true);
      console.log(answerLocal, dataExports[questionNo].answer, "hahah");
    }
  }
  console.log(answer);
  return (
    <div className={classes.container}>
      <div className={classes.questionDiv}>
        {dataExports != null ? <p>{dataExports[questionNo].question}</p> : null}
      </div>
      <div className={classes.inputDiv}>
        <input onChange={(e) => setAnswerLocal(e.target.value)} />
      </div>
      <div className={classes.btnDiv}>
        <button onClick={handleClickPrev}>Prev</button>
        <button onClick={handleClickNext}>Next</button>
      </div>
    </div>
  );
};

export default Section;
