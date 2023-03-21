import React from "react";
import sample from "../image/sample1.jpg";

export default function Popup(props) {
  return props.trigger ? (
    <div className="popup_frame">
      <p className="close_btn" onClick={() => props.setButtonPop(false)}>
        X
      </p>
      <div className="popup_inner">
        <div className="popup_contant">props.content</div>
        <img className="popup_img" src={sample} alt=""></img>
      </div>
    </div>
  ) : (
    ""
  );
}
