import React from "react";
import "./slide4.css";

const Slide4 = () => {
  return (
    <div className="slide4image">
      <img
        src="https://www.dogeartclub.com/_next/image?url=https%3A%2F%2Fdai1hr2knmld8.cloudfront.net%2Fdoges%2Fdoge1.png&w=1920&q=75"
        alt=""
        className="dogShort"
      />
      <div className="text4">
        <h2 className="h4"> Doges love people </h2>
        <p className="p4">
          Doge Art Club is open to like-minded Doges all around the globe. It’s
          a community-run project, and you are an important part of it. To take
          full advantage of the community perks and to exchange success stories
          and ideas with your fellow Doges, join the Doge Art Club Discord
          server - that’s where it’s all happening.
        </p>
      </div>

      <img src="/assets/chatbox.png" className="chatbox4" alt="chatbox" />

      <button className="button-doges4">JOIN OUR DISCORD!</button>
    </div>
  );
};

export default Slide4;
