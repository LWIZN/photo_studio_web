import "../style/Intorduce.css";
import Modal from "./Modal";
import Images from "../image";
import Popup from "./Popup";

export default function Intorduce() {
  return (
    <div className="intorduce_frame">
      <div className="block">
        <Modal img={Images.pictureA} />
      </div>
      <div className="block">
        <Modal img={Images.pictureB} />
      </div>
      <div className="block">
        <Modal img={Images.home_background} />
      </div>
      <div className="block">
        <Modal img={Images.sample5} />
      </div>
      <div className="block">
        <Modal img={Images.sample1} />
      </div>
      <div className="block">
        <Modal img={Images.sample2} />
      </div>
      <div className="block">
        <Modal img={Images.sample3} />
      </div>
      <div className="block">
        <Modal img={Images.sample4} />
      </div>
    </div>
  );
}
