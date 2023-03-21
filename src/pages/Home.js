import "../style/Home.css";
import AboutContainer from "../components/AboutContainer";
import Carousel from "../components/Carousel";
import Intorduce from "../components/Intorduce";
import InfoContainer from "../components/InfoContainer";

export default function Home() {
  return (
    <div className="home_background">
      <div className="welcome_container">
        <h1 className="welcome">
          Welcome To Our Studio
          <p>NICE TO MEET YOU</p>
        </h1>
      </div>
      <h1 className="about">
        ABOUT
        <p>Welcome To Our Studio, There is what we do about.</p>
      </h1>
      <div className="about_container">
        <AboutContainer />
      </div>
      <div className="image_container">
        <Carousel />
      </div>
      <div className="introduce_container">
        <Intorduce />
      </div>
      <div className="info_container">
        <InfoContainer />
      </div>
    </div>
  );
}
