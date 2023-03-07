import "../style/Home.css";
import InfoContainer from "../components/InfoContainer";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className="home_background">
      <div className="home_frame">
        <div className="image_container">
          <Carousel />
        </div>
        <InfoContainer />
      </div>
    </div>
  );
}
