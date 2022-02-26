import "./Card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Topic } from "../../../Redux/Slices/topicSlice";

const Card = (props) => {
  const dispatch = useDispatch();

  function setTopic() {
    dispatch(Topic(Number(props.topic)));
  }

  return (
    <div className="cardContainer">
      <section>
        <h1>{props.heading}</h1>
        <div className="content">
          <p>{props.content}</p>
          <Link to={props.Link} onClick={setTopic}>
            <button className="button">Attempt Quiz</button>
          </Link>
        </div>
        <div className="img">
          <img src={props.imgHead} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Card;
