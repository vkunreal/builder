import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import arrow from "../../images/arrow.png";
import { Page1 } from "../Page1";
import "./styles.scss";

const btns = [1, 2, 3, 4, 5];

export const Slider: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);

  const handleNextSlide = () => setPage((prevVal) => prevVal + 1);

  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPage(Number(e.target.value));

  // change slide by selected page
  useEffect(() => {
    if (page > 5) return setPage(1);

    setOffset(800 * page - 800);
  }, [page]);

  return (
    <div>
      {/* logo */}
      <img src={logo} alt="Logo" />

      {/* clider with pages */}
      <div className="slider-block">
        {/* container */}
        <div className="container">
          <div className="slider" style={{ top: -offset + "px" }}>
            <div className="block">
              <Page1 />
            </div>

            <div className="block">2</div>
            <div className="block">3</div>
            <div className="block">4</div>
            <div className="block">5</div>
          </div>
        </div>

        {/* radio btns */}
        <form className="radio-btns" style={{ margin: "30px" }}>
          {btns.map((btn) => (
            <label>
              <input
                type="radio"
                name="slider"
                value={btn}
                checked={page === btn}
                onChange={handleRadioClick}
              />
              0{btn}
            </label>
          ))}
        </form>
      </div>

      {/* next btn */}
      <div className="slider-btn">
        <button onClick={handleNextSlide}>
          <img src={arrow} alt="Arrow" />
        </button>
      </div>
    </div>
  );
};
