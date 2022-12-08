import Slider from "react-slick";
import "../style/Carousel.css";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
  };

  return (
    <div className="carousel_container">
      <Slider {...settings}>
        <div className="photo">1</div>
        <div className="photo">2</div>
        <div className="photo">3</div>
      </Slider>
    </div>
  );
}
