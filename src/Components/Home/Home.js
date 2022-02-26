import Card from "../UI/Card/Card";
import CarouselComponent from "../UI/Carousel/Carousel";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.container}>
      <CarouselComponent />
    </div>
  );
};

export default Home;
