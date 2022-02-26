import { useState } from "react";
import Quiz from "../../Utils/SelectQuiz";
//css import
import classes from "./Navbar.module.css";
import { Modal } from "react-bootstrap";

//redux
import { useSelector, useDispatch } from "react-redux";
import { Select } from "../../Redux/Slices/quizSlice.js";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const selectQuizNo = useSelector((state) => state.selectQuiz.value);
  const [show, setShow] = useState(false);

  const quizOptions = Quiz();
  const quiz = quizOptions[0].map((item) => {
    return item;
  });

  return (
    <div className={classes.container}>
      <p className={classes.heading}>
        MT PRATEEK BADOLA{" "}
        <i className="fa-solid fa-phone" onClick={() => setShow(!show)}></i>
      </p>

      <Modal show={show}>
        <Modal.Header>Contact</Modal.Header>
        <Modal.Body>
        <i className="fa-solid fa-phone"></i> 8881909016
        </Modal.Body>
        <Modal.Footer>
          <button className={classes.btn} onClick={() => setShow(!show)}>Close</button>
        </Modal.Footer>
      </Modal>
      <div className={classes.dropdown + " btn-group"}>
        {props.route === "quiz" && (
          <button
            type="button"
            className={classes.btn + " btn btn-secondary dropdown-toggle"}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {quiz[selectQuizNo][0] + " - " + quiz[selectQuizNo][1] + "  "}
          </button>
        )}
        <div className="dropdown-menu">
          {quiz.map((arr, i) => {
            return (
              <div className={classes.select} key={i}>
                <button
                  className="dropdown-item"
                  onClick={() => dispatch(Select(i))}
                >
                  {arr[0] + "-" + arr[1]}
                </button>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
