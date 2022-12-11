import React from "react";
import "./slide6.css";

const Slide6 = () => {
  return (
    <div className="slide6image">
      <img
        src="https://www.dogeartclub.com/_next/image?url=https%3A%2F%2Fdai1hr2knmld8.cloudfront.net%2Fdoges%2Fdogemoney.png&w=1920&q=75"
        alt=""
        className="dogShortener"
      />
      <img src="/assets/chatbox.png" className="chatbox6" alt="chatbox" />
      <h2 className="h6">Doges love money</h2>
      <p className="p6">
        Earn money by using our referral system! The project is designed to be
        community-run, and each of the Doges can become an influencer.
        <br />
        <br />
        Each minted Doge Art Club NFT carries a referral code - 30% of the value
        of every mint using your referral code goes to you!
        <br />
        <br />
        If you choose to mint your Doge Art Club NFT without a referral code -
        30% will go to charity initiative! Everything is encoded to the contract
        and will happen automatically!
      </p>
    </div>
  );
};

export default Slide6;
