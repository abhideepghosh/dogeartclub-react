import React from "react";
import "./slide4.css";
import { motion } from "framer-motion";

const Slide4 = () => {
  return (
    <div className="slide4image">
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        src="https://www.dogeartclub.com/_next/image?url=https%3A%2F%2Fdai1hr2knmld8.cloudfront.net%2Fdoges%2Fdoge1.png&w=1920&q=75"
        alt=""
        className="dogShort"
      />
      <div className="text4">
        <motion.h2
          className="h4"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          Doges Love People
        </motion.h2>
        <motion.p
          className="p4"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          Doge Art Club is open to like-minded Doges all around the globe. It’s
          a community-run project, and you are an important part of it. To take
          full advantage of the community perks and to exchange success stories
          and ideas with your fellow Doges, join the Doge Art Club Discord
          server - that’s where it’s all happening.
        </motion.p>
      </div>

      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.8, scale: 4, scaleX: -1 }}
        src="/assets/chatbox.png"
        className="chatbox4"
        alt="chatbox"
      />

      <motion.button
        className="button-doges4"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{
          opacity: 1,
          scale: 2.5,
          translateX: -200,
          translateY: -20,
        }}
      >
        JOIN OUR DISCORD!
      </motion.button>
    </div>
  );
};

export default Slide4;
