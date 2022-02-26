import Card from "../Card/Card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/cube.jpg";
import img2 from "../../../assets/penal.png";
import img3 from "../../../assets/section.jpg";
import "./Carousel.css";

//

const CarouselComponent = () => {
  return (
    <div className="container">
      <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showArrows={true}
        showThumbs={false}
        // stopOnHover={false}
      >
        <Card
          heading="Record"
          imgHead={img2}
          content="The record for being the fastest to recite all the amendments of the Indian Penal Code was set by Prateek Badola (born on January 1, 1992) of Lakhimpur, Uttar Pradesh. He recited 76 amendments of the Indian Penal code in 6 minutes and 18 seconds, as confirmed on March 2, 2021."
          Link="/quiz"
          topic="0"
        />
        <Card
          heading="Record"
          imgHead={img3}
          content="Prateek Badola (born on January 1, 1992) of Uttar Pradesh, India, set a record for being the fastest to recite all the amendments of the Constitution of India. He recited 104 amendments of the Constitution of India (enacted from 1950 till January 2020), in 13 minutes and 6 seconds, as confirmed on January 18, 2021."
          Link="/quiz"
          topic="1"
        />
        <Card
          heading="Record"
          imgHead={img1}
          content="Prateek Badola (born on January 1, 1992) of Uttar Pradesh, India, set a World record for reciting the cubes of the maximum numbers. He spontaneously recited the cubes of numbers from 1-500 in 16 minutes, 21 seconds and 51 milliseconds, as confirmed on December 31, 2020."
          Link="/quiz"
          topic="2"
        />

        {/* <div>
          <Card
            imgHead={img1}
            content="Prateek Badola (born on January 1, 1992) of Uttar Pradesh, India, set a World record for reciting the cubes of the maximum numbers. He spontaneously recited the cubes of numbers from 1-500 in 16 minutes, 21 seconds and 51 milliseconds, as confirmed on December 31, 2020."
          />
        </div>
        <div>
          <Card
            imgHead={img1}
            content="Prateek Badola (born on January 1, 1992) of Uttar Pradesh, India, set a World record for reciting the cubes of the maximum numbers. He spontaneously recited the cubes of numbers from 1-500 in 16 minutes, 21 seconds and 51 milliseconds, as confirmed on December 31, 2020."
          />
        </div> */}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
