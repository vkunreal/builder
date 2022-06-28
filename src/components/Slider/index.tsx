import { useState } from "react";
import logo from "../../images/logo.png";
import arrow from "../../images/arrow.png";
import "./styles.scss";

export const Slider: React.FC = () => {
  const [offset, setOffset] = useState(0);

  const handleNextSlide = () => {
    if (offset >= 3200) setOffset(0);
    else setOffset((prevVal) => prevVal + 800);
  };

  return (
    <div>
      <img src={logo} alt="Logo" />

      <div className="container">
        <div className="slider" style={{ top: -offset + "px" }}>
          <div className="block">1</div>
          <div className="block">2</div>
          <div className="block">3</div>
          <div className="block">4</div>
          <div className="block">5</div>
        </div>
      </div>

      <button className="slider-btn" onClick={handleNextSlide}>
        <img src={arrow} alt="Arrow" />
      </button>
    </div>
  );
};
