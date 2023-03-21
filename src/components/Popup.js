import React from "react";
import Selector from "./Selector";

export default function Popup(props) {
  return props.trigger ? (
    <div className="popup_frame popup_frame_open">
      <p className="close_btn" onClick={() => props.setButtonPop(false)}>
        X
      </p>
      <div className="popup_inner popup_inner_open">
        <img className="popup_img" src={props.img} alt=""></img>
        <div className="popup_contant">
          <Selector value={props.num} />
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className="popup_inner popup_inner_close"></div>
      <div className="popup_frame popup_frame_close"></div>
    </div>
  );
}
