import "../style/Layout.css";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="frame">
      <div
        className={`position ${
          scrollTop > 150 ? "position_unavailable" : "position_available"
        }`}
      >
        <div
          className={`layout_container ${
            scrollTop > 150
              ? "layout_container_unavailable"
              : "layout_container_available"
          }`}
        >
          <a href="/" className="title">
            TITLE
          </a>
          <div className="functionBar_container">
            <a href="/Retouch" className="function1">
              Retouch
            </a>
            <a href="/PhotoFrame" className="function2">
              Photo Frame
            </a>
          </div>
        </div>
      </div>
      <Outlet />
      <a
        class={`btn-back ${
          scrollTop > 150 ? "btn_available" : "btn_unavailable"
        }`}
        href="#top"
      >
        ↑
      </a>
    </div>
  );
}
