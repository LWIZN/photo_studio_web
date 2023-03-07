import Slider from "react-slick";
import "../style/Carousel.css";
import Images from "../image/index";

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
        <div className="photo">
          <img src={Images.pictureA} alt={"default"} />
        </div>
        <div className="photo">
          <img src={Images.pictureB} alt={"default"} />
        </div>
        <div className="photo">
          <img src={Images.pictureA} alt={"default"} />
        </div>
      </Slider>
    </div>
  );
}
