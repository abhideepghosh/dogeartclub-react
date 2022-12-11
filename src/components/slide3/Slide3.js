// import React from "react";
import "./slide3.css";

const Slide3 = () => {
  return (
    <div className="myWrapper3">
      <img
        src="https://www.dogeartclub.com/_next/image?url=https%3A%2F%2Fdai1hr2knmld8.cloudfront.net%2Fdoges%2Fdogeart.png&w=1920&q=75"
        className="foreground3"
        alt="Bg2"
      />

      <img src="/assets/chatboxBlack.png" className="chatbox3" alt="chatbox" />
      {/* <div className="text3">
        <h3> Doges love ART </h3>
        <p>
          Dogecoin started as a meme and evolved to be so much more!
          <br /> Inspired by that, the first product by Doge Art Club Clone{" "}
          <br />
          is the NFT Meme Generator
          <br />
          It is a tool to empower creative individuals to easily turn their art
          into NFTs without
          <br /> a single line of code and for free!
        </p>
      </div> */}
      <button className="button-doges">DOGES INSTAGRAM</button>
      <button className="button-doges2">ARTIST'S INSTAGRAM</button>
      <div className="chatText">
        <h2 className="h3arrange">Doges love art</h2>
        <p className="p3">
          The Doge Art Club NFT collection is absolutely unique, with artwork
          custom designed from scratch by Polish artist Maciek Ignaciuk aka
          Othis - graphic designer with a background in street art and murals.
          Together we created 9001 Doges using over 200 unique traits. Your
          minted Doge will be like no other on Ethereum blockchain.
        </p>
      </div>
    </div>
  );
};

export default Slide3;
