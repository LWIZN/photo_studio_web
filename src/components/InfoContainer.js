import "../style/InfoContainer.css";
import facebook from "../image/facebook.svg";
import instagram from "../image/instagram.svg";
import wechat from "../image/wechat.svg";

export default function InfoContainer() {
  return (
    <div className="info_frame">
      <div className="copyright_info">
        <p>Copyright © Your Website 2023</p>
      </div>
      <div className="follow_info">
        <a href="https://facebook.com" className="facebook">
          <img src={facebook} alt="test"></img>
        </a>
        <a href="https://instagram.com" className="instagram">
          <img src={instagram} alt="test"></img>
        </a>
        <a href="https://www.wechat.com" className="wechat">
          <img src={wechat} alt="test"></img>
        </a>
      </div>
      <div className="privacy_info">
        <p>Privacy Policy</p>
      </div>
    </div>
  );
}
