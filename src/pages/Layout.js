import "../style/Layout.css";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="frame">
      <div className="title_container">
        <a href="/" className="title">
          TITLE
        </a>
        <div className="functionBar_container">
          <a href="/Retouch" className="function">
            Retouch
          </a>
          <a href="/PhotoFrame" className="function">
            Photo Frame
          </a>
        </div>
      </div>
      {/* <div className="title_horizontalLine"></div> */}
      <Outlet />
    </div>
  );
}
