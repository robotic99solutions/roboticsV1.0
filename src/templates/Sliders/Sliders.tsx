import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./SliderStyles.css";

const Sliders = () => {
  useEffect(() => {
    console.log("Slider  Mounted:");
    return () => {
      console.log("Slider  Un-Mounted:");
    };
  }, []);

  /* axis="vertical"  autoPlay*/

  return (
    <Carousel infiniteLoop className="mySliderRoot">
      <div>
        <img
          src={require("../../assest/logos/DematAccount03.png")}
          alt="slider"
        />
        <p className="legend">Explore with Robotics</p>
      </div>
      <div>
        <img
          src={require("../../assest/logos/DematAccount01.png")}
          alt="slider"
        />
        <p className="legend">Best Service Provider</p>
      </div>
      <div>
        <img
          src={require("../../assest/logos/StockMarket01.png")}
          alt="slider"
        />
        <p className="legend">AI trading</p>
      </div>
      <div>
        <img
          src={require("../../assest/logos/DematAccount00.png")}
          alt="slider"
        />
        <p className="legend">We do all for you</p>
      </div>
      <div>
        <img
          src={require("../../assest/logos/StockMarket00.png")}
          alt="slider"
        />
        <p className="legend">AI trading</p>
      </div>
    </Carousel>
  );
};

export default Sliders;
