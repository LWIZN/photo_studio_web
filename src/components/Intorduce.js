import "../style/Intorduce.css";
import Modal from "./Modal";
import Images from "../image";

export default function Intorduce() {
  return (
    <div className="intorduce_frame">
      <div className="block">
        <Modal img={Images.pictureA} num={1} size={" 9 x 13"} />
      </div>
      <div className="block">
        <Modal img={Images.pictureB} num={2} size={"10 x 15"} />
      </div>
      <div className="block">
        <Modal img={Images.home_background} num={3} size={"13 x 18"} />
      </div>
      <div className="block">
        <Modal img={Images.sample5} num={4} size={"15 x 21"} />
      </div>
      <div className="block">
        <Modal img={Images.sample1} num={5} size={"20 x 30"} />
      </div>
      <div className="block">
        <Modal img={Images.sample2} size={"25 x 30"} />
      </div>
      <div className="block">
        <Modal img={Images.sample3} size={"30 x 40"} />
      </div>
      <div className="block">
        <Modal img={Images.sample4} size={"30 x 45"} />
      </div>
    </div>
  );
}
