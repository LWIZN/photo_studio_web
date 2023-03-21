import "../style/Modal.css";
import { useState } from "react";
import Popup from "./Popup";

export default function Modal(props) {
  const [ButtonPop, setButtonPop] = useState(false);
  return (
    <div className="modal_frame">
      <img
        className="modal_img"
        src={props.img}
        alt=""
        onClick={() => setButtonPop(true)}
      ></img>
      <Popup trigger={ButtonPop} setButtonPop={setButtonPop} />
    </div>
  );
}
