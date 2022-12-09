import React from "react";
import "./slide2.css";

const Slide2 = () => {
  return (
    <div className="slide2image">
      <img
        src="https://www.dogeartclub.com/_next/image?url=https%3A%2F%2Fdai1hr2knmld8.cloudfront.net%2Fdoges%2Fdogememes.png&w=1920&q=75"
        alt=""
        className="dogSimple"
      />
      <div className="chat-box">
        {/* <h3> Doges love memes </h3>
        <p className="fs-6">
          Dogecoin started as a meme and evolved to be so much more! Inspired by
          that, the first product by Doge Art Club Clone is the NFT Meme
          Generator
          <br />
          It is a tool to empower creative individuals to easily turn their art
          into NFTs without a single line of code and for free!
        </p> */}
      </div>

      {/* <img src="/assets/chatbox.png" className="chatbox2" alt="chatbox" /> */}
    </div>
  );
};

export default Slide2;
