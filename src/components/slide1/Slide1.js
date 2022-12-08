import React from "react";
import "./slide1.css";

const Slide1 = () => {
  return (
    <div className="wrapper">
      <img
        src="https://www.dogeartclub.com/_next/image?url=https%3A%2F%2Fdai1hr2knmld8.cloudfront.net%2Fdac-main_hr.jpeg&w=1920&q=75"
        className="background"
        alt=""
      />
      <img
        src="https://www.dogeartclub.com/_next/image?url=https%3A%2F%2Fdai1hr2knmld8.cloudfront.net%2Fdac-neon.png&w=1920&q=75"
        className="background blink-animation"
        alt=""
      />
      <h3>Hello Dog</h3>
      <h4>Scroll down & join the club!</h4>
      <img src="/assets/scrolldown.png" className="image-scroll" alt="" />
    </div>
  );
};

export default Slide1;
