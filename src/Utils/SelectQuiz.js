import { useSelector } from "react-redux";

function SelectQuiz() {
  const topic = useSelector((state) => state.topic.value);
  const QuizNo = useSelector((state) => state.selectQuiz.value);

  const quizOption = [
    [
      [1, 50],
      [51, 100],
      [101, 150],
      [151, 200],
      [201, 250],
      [251, 300],
      [301, 350],
      [351, 400],
      [401, 450],
      [451, 517],
    ],
    [
      [1, 50],
      [51, 100],
      [101, 150],
      [151, 200],
      [201, 250],
      [251, 300],
      [301, 350],
      [351, 400],
      [401, 469],
    ],
    [[1, 500]],
  ];

  return [quizOption[topic], quizOption[topic][QuizNo]];
}

export default SelectQuiz;
