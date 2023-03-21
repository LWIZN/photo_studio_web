import "../style/AboutContainer.css";
import about_img from "../image/about.svg";
import ship_img from "../image/ship.svg";
import chat_img from "../image/chat.svg";

export default function AboutContainer() {
  return (
    <div className="about_frame">
      <div className="about_info">
        <img src={about_img} alt="test"></img>
        <h1>ABOUT</h1>
        <p>
          The word "about" is a small but powerful term that can greatly enhance
          your writing. It is often used to provide context, clarification, and
          additional information about a topic.
        </p>
      </div>
      <div className="ship_info">
        <img src={ship_img} alt="test"></img>
        <h1>TRANSPORT</h1>
        <p>
          The word "about" is a small but powerful term that can greatly enhance
          your writing. It is often used to provide context, clarification, and
          additional information about a topic.
        </p>
      </div>
      <div className="other_info">
        <img src={chat_img} alt="test"></img>
        <h1>OTHER</h1>
        <p>
          The word "about" is a small but powerful term that can greatly enhance
          your writing. It is often used to provide context, clarification, and
          additional information about a topic.
        </p>
      </div>
    </div>
  );
}
