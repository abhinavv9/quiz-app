import classes from "./End.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap";

const End = () => {
  const [show, setShow] = useState(false);

  const answer = useSelector((state) => state.answer.value);
  const time = useSelector((state) => state.time.value);
  var score = 0;
  var noOfQuestionsAttempted = 0;

  const wrongAnswers = [];
  answer.map((item, index) => {
    noOfQuestionsAttempted++;
    if (item.status === "correct") {
      score = score + 1;
    }
    if (item.status === "incorrect") {
      wrongAnswers.push(item);
    }
    return null;
  });
  var percent = (score / noOfQuestionsAttempted) * 100;
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.title}>Results</div>
        <div className={classes.body}>
          <p className={classes.score}>
            Your score: {score}/{noOfQuestionsAttempted}
          </p>
          <p className={classes.percentage}>{isNaN(percent) ? 0 : percent}%</p>
          <p className={classes.time}>Your time: {time}</p>
          <div className={classes.btnDiv}>
            <button className={classes.btn1} onClick={() => setShow(!show)}>
              See Wrong Answers
            </button>
            <Link to="/quiz">
              <button className={classes.btn2}>Try Again</button>
            </Link>
          </div>
        </div>
      </div>
      <Modal show={show} className={classes.modal}>
        <Modal.Header>WRONG ANSWERS</Modal.Header>
        <Modal.Body>
          <ul>
            {wrongAnswers.map((item, index) => {
              return (
                <li id={index} className={classes.section}>
                  <p id={index} className={classes.question}>
                    {item.question}
                  </p>
                  <div id={index} className={classes.ansSection}>
                    <div id={index} className={classes.ansDiv}>
                      your answer: {item.answer}
                    </div>
                    <div id={index} className={classes.correctAnsDiv}>
                      correct answer: {item.correctAnswer}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setShow(!show)} className={classes.closeBtn}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default End;
