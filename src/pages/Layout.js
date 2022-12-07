import "../style/Layout.css";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="frame">
      <div className="title_container">
        <a href="/" className="title">
          TITLE
        </a>
      </div>
      <div className="title_horizontalLine"></div>
      <div className="functionBar_container">
        <a href="/Retouch" className="function">
          FUNCTION1
        </a>
        <a href="/PhotoFrame" className="function">
          FUNCTION2
        </a>
      </div>
      <Outlet />
    </div>
  );
}
