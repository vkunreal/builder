import React from "react";
import iphone from "../../images/iphone.png";
import googleplay from "../../images/googleplay.png";
import appstore from "../../images/appstore.png";
import "./styles.scss";

export const Page1: React.FC = React.memo(() => {
  return (
    <div className="page1">
      {/* leftside */}
      <div className="page1-leftside">
        {/* promo */}
        <div className="page1-promo">
          <p>Скоро запуск</p>
        </div>

        {/* text */}
        <p className="page1-heading">Постройте дом с</p>
        <p className="page1-brand">ИЖС App</p>
        <p className="page1-underheading">
          Выберите дом напрямую от застройщиков и стройте через приложение
        </p>

        {/* app in stores */}
        <div className="page1-source">
          <a href="*">
            <img src={googleplay} alt="Google Play" />
          </a>

          <a href="*">
            <img src={appstore} alt="App Store" />
          </a>
        </div>
      </div>

      {/* iPhone image */}
      <div>
        <img src={iphone} alt="iPhone" />
      </div>
    </div>
  );
});
