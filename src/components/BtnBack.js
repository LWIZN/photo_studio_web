import { useEffect, useState } from "react";
import "../style/BtnBack.css";

export default function BtnBack() {
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
    <div>
      <a
        class={`btn-back ${scrollTop > 150 ? "available" : "unavailable"}`}
        href="#top"
      >
        ↑
      </a>
    </div>
  );
}
