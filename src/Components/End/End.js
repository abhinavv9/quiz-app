import classes from "./End.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const End = () => {
  const answer = useSelector((state) => state.answer.value);
  const time = useSelector((state) => state.time.value);
  var score = 0;
  var noOfQuestionsAttempted = 0;

  answer.map((item, index) => {
    noOfQuestionsAttempted++;
    if (item.status === "correct") {
      score = score + 1;
    }
  });

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.title}>Results</div>
        <div className={classes.body}>
          <p className={classes.score}>
            Your score: {score}/{noOfQuestionsAttempted}
          </p>
          <p className={classes.percentage}>
            {(score / noOfQuestionsAttempted) * 100}%
          </p>
          <p className={classes.time}>Your time: {time}</p>
          <div className={classes.btnDiv}>
            <button className={classes.btn1}>See Wrong Answers</button>
            <button className={classes.btn2}>Try Again</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default End;
