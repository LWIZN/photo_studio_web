import "../style/PhotoFrame.css";
import InfoContainer from "../components/InfoContainer";

export default function PhotoFrame() {
  return (
    <div className="photoFrame_frame">
      <div className="photoFrame_image"></div>
      <div className="photoFrame_style"></div>
      <InfoContainer />
    </div>
  );
}
