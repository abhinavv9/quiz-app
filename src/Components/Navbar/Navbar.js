import { useState } from "react";
import { quiz } from "../../Utils/SelectQuiz";
//css import
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [selectQuizNo, setSelectQuizNo] = useState(null);
  console.log(selectQuizNo);

  return (
    <div className={classes.container}>
      <p className={classes.heading}>MT Prateek Badola</p>
      <div className={classes.dropdown + " btn-group"}>
        <button
          type="button"
          className={classes.btn + " btn btn-secondary dropdown-toggle"}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {selectQuizNo
            ? quiz[0][selectQuizNo - 1][0] +
              " - " +
              quiz[0][selectQuizNo - 1][1] +
              "  "
            : "Select Quiz"}
        </button>
        <div className="dropdown-menu">
          {quiz[0].map((arr, i) => {
            return (
              <div className={classes.select} key={i}>
                <button
                  className="dropdown-item"
                  onClick={() => setSelectQuizNo(i + 1)}
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
