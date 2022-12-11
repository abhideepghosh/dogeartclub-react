import React from "react";
import "./slide5.css";
import { motion } from "framer-motion";

const Slide5 = () => {
  return (
    <div className="slide5image">
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        src="https://www.dogeartclub.com/_next/image?url=https%3A%2F%2Fdai1hr2knmld8.cloudfront.net%2Fdoges%2Fcyborg_pumped.png&w=1920&q=75"
        alt=""
        className="dogShrink"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        src="https://www.dogeartclub.com/_next/image?url=https%3A%2F%2Fdai1hr2knmld8.cloudfront.net%2Fdoges%2Fcyborg.png&w=1920&q=75"
        alt=""
        className="dogShrink2"
      />

      <div className="text5">
        <motion.h2
          className="h5"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            translateX: 25,
            translateY: -5,
          }}
        >
          D&nbsp;o&nbsp;g&nbsp;e&nbsp;s
          &nbsp;&nbsp;l&nbsp;o&nbsp;v&nbsp;e&nbsp;&nbsp; p&nbsp;u&nbsp;m&nbsp;p
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            translateX: 25,
            translateY: -5,
          }}
          className="p5"
        >
          The best and absolute unique utility of Doge Art Club is its
          innovative Doge mechanism. Take your Doge to the Gym - an
          inhouse-built NFT staking solution where your Doge can train and gain
          strength and experience. Continuous staking unlocks the final form of
          your Doge - the Buffed Doge.
          <br />
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            translateX: 25,
            translateY: -5,
          }}
          className="p55"
        >
          If that’s not enough, every single Doge will get so euphoric they’ll
          unlock the Buffed Doge as soon as they go to the moon - when dogecoin
          price reaches $1, or as soon as rocket DOGE-1 (actually scheduled for
          a moon mission) lands on the Moon!
        </motion.p>
      </div>
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.8, scale: 3.5, scaleX: -1 }}
        src="/assets/chatboxBlack.png"
        className="chatbox5"
        alt="chatbox"
      />
      {/* <img src="" className="" alt="chatbox" /> */}
    </div>
  );
};

export default Slide5;
