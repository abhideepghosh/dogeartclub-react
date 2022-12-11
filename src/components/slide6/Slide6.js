import React from "react";
import "./slide6.css";
import { motion } from "framer-motion";

const Slide6 = () => {
  return (
    <div className="slide6image">
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        src="https://www.dogeartclub.com/_next/image?url=https%3A%2F%2Fdai1hr2knmld8.cloudfront.net%2Fdoges%2Fdogemoney.png&w=1920&q=75"
        alt=""
        className="dogSimple"
      />
      <img src="" alt="" className="dogShortener" />
      <motion.img
        initial={{ opacity: 0.8, scale: 0 }}
        whileInView={{
          opacity: 0.8,
          scale: 2,
          scaleX: -1,
        }}
        src="/assets/chatbox.png"
        className="chatbox6"
        alt="chatbox"
      />
      <motion.h2
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          translateX: 310,
          translateY: -410,
        }}
        className="h6"
      >
        Doges love money
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          translateX: 300,
          translateY: -400,
        }}
        className="p6"
      >
        Earn money by using our referral system! The project is designed to be
        community-run, and each of the Doges can become an influencer.
        <br />
        <br />
        <strong>
          Each minted Doge Art Club NFT carries a referral code - 30% of the
          value of every mint using your referral code goes to you!
        </strong>
        <br />
        <br />
        If you choose to mint your Doge Art Club NFT without a referral code -
        30% will go to charity initiative! Everything is encoded to the contract
        and will happen automatically!
      </motion.p>
    </div>
  );
};

export default Slide6;
