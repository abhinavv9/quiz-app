import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import DataExports from "../../Utils/processData";
import Quiz from "../../Utils/SelectQuiz";
import classes from "./InfoSection.module.css";

const InfoSection = ({ questionNo, setQuestionNo }) => {
  const [visited, setVisited] = useState([]);
  const [active, setActive] = useState(1);
  const selectQuizNo = useSelector((state) => state.selectQuiz.value);

  const data = DataExports();

  var questionArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  ];

  const NoOfQuestions = [];

  questionArr
    .filter((item, index) => item < data.length)
    .map((filteredItem) => NoOfQuestions.push(filteredItem));

  function handleClick(i) {
    setVisited((visited) => [1, ...visited, i]);
    setActive(i);
    setQuestionNo(i);
  }

  useEffect(() => {
    setVisited([]);
    setActive(1);
    setQuestionNo(1);
  }, [selectQuizNo]);

  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <p>Time</p>
        <p>Topic Name</p>
      </div>
      <div className={classes.questionNoContainer}>
        {NoOfQuestions.map((item, i) => {
          return (
            <p
              key={i}
              onClick={() => handleClick(item)}
              className={classes.index}
              style={{
                backgroundColor: visited.includes(item)
                  ? item === active
                    ? "#33ff00"
                    : "#ffcbe3"
                  : item === active
                  ? "#33ff00"
                  : "white",
              }}
            >
              {item}
            </p>
          );
        })}
      </div>
      <hr className={classes.divider} />
      <button className={classes.btn}>Exit</button>
    </div>
  );
};

export default InfoSection;
