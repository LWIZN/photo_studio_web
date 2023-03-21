import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/Carousel.css";
import Images from "../image/index";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    arrows: false,
  };

  return (
    <div className="carousel_container">
      <Slider {...settings}>
        <div className="img_container">
          <img src={Images.sample1} alt={"default"} />
        </div>
        <div className="img_container">
          <img src={Images.sample2} alt={"default"} />
        </div>
        <div className="img_container">
          <img src={Images.sample3} alt={"default"} />
        </div>
        <div className="img_container">
          <img src={Images.sample4} alt={"default"} />
        </div>
        <div className="img_container">
          <img src={Images.sample5} alt={"default"} />
        </div>
      </Slider>
    </div>
  );
}
