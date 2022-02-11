import { dataArticle, dataPenalCode } from "./data";
import SelectQuiz from "./SelectQuiz";
import { useSelector } from "react-redux";

function DataExports() {
  const quizData = [];
  const quizNo = SelectQuiz();
  const topicArr = [dataPenalCode, dataArticle];

  const topic = useSelector((state) => state.topic.value);

  topicArr[topic]
    .filter((item, index) => index >= (quizNo[1][0] + 1) && index <= quizNo[1][1] + 1)
    .map((filteredItem) => quizData.push(filteredItem));

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const dataArr = shuffle(quizData);

  return dataArr;
}
export default DataExports;
