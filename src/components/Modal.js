import "../style/Modal.css";
import { useState } from "react";
import Popup from "./Popup";

export default function Modal(props) {
  const [ButtonPop, setButtonPop] = useState(false);
  return (
    <div className="modal_frame">
      <div onClick={() => setButtonPop(true)}>
        <img className="modal_img" src={props.img} alt="" />
        <div className="middle">
          <h1 className="header">{props.size}</h1>
        </div>
      </div>
      <Popup
        trigger={ButtonPop}
        setButtonPop={setButtonPop}
        img={props.img}
        num={props.num}
      />
    </div>
  );
}
