import { useState, useEffect, useRef } from "react";
// import SelectQuiz from "../../Utils/SelectQuiz";
import DataExports from "../../Utils/processData";
import { useSelector, useDispatch } from "react-redux";
import { Answer, ResetAnswer } from "../../Redux/Slices/answerSlice";
import { setQuestionNo } from "../../Redux/Slices/questionSlice";

import classes from "./Section.module.css";

const Section = () => {
  //Local states
  const [dataExports, setDataExports] = useState();
  const [answerLocal, setAnswerLocal] = useState("");
  const [selected, setSelected] = useState("");

  //redux states
  // const topic = useSelector((state) => state.topic.value);
  const quizNo = useSelector((state) => state.selectQuiz.value);
  const questionNo = useSelector((state) => state.question.value);

  const dispatch = useDispatch();
  const data = DataExports();
  const inputElement = useRef(null);

  useEffect(() => {
    if (!selected) {
      inputElement.current.focus();
    }
  }, [selected]);

  useEffect(() => {
    setDataExports(data);
  }, []);

  useEffect(() => {
    setDataExports(data);
    dispatch(ResetAnswer());
  }, [quizNo]);

  function handleClickNext() {
    if (questionNo >= data.length - 1) {
      console.log("end");
    } else {
      dispatch(setQuestionNo(questionNo + 1));

      dispatch(
        Answer({
          answer: answerLocal,
          id: questionNo,
          question: dataExports[questionNo].question,
          correctAnswer:
            dataExports[questionNo].answer !== undefined &&
            dataExports[questionNo].answer,
          status:
            String(answerLocal) === String(dataExports[questionNo].answer)
              ? "correct"
              : "incorrect",
        })
      );

      setAnswerLocal("");
    }
  }

  function handleClickPrev() {
    if (questionNo <= 1) {
      console.log("end");
    } else dispatch(setQuestionNo(questionNo - 1));
  }

  function changeHandler(e) {
    setAnswerLocal(e.target.value);
    setSelected(e.target.value);
  }

 const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleClickNext();
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.questionDiv}>
        {dataExports != null ? (
          <p>Q. {dataExports[questionNo].question}।</p>
        ) : null}
      </div>
      <div className={classes.inputDiv}>
        <input
          ref={inputElement}
          onChange={changeHandler}
          value={answerLocal}
          onKeyPress={handleKey}
          placeholder="Enter your answer"
        />
      </div>
      <div className={classes.btnDiv}>
        <button onClick={handleClickPrev}>
          Prev
        </button>
        <button onClick={handleClickNext}>Next</button>
      </div>
    </div>
  );
};

export default Section;
