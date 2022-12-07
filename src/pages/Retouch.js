import "../style/Retouch.css";
import InfoContainer from "../components/InfoContainer";

export default function Retouch() {
  return (
    <div className="retouch_frame">
      <div className="retouch_function"></div>
      <div className="retouch_image"></div>
      <div className="retouch_info"></div>
      <InfoContainer />
    </div>
  );
}
