import React from "react";
import "./slide2.css";
import { motion } from "framer-motion";

const Slide2 = () => {
  return (
    <div className="slide2image">
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        src="https://www.dogeartclub.com/_next/image?url=https%3A%2F%2Fdai1hr2knmld8.cloudfront.net%2Fdoges%2Fdogememes.png&w=1920&q=75"
        alt=""
        className="dogSimple"
      />
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{
          opacity: 1,
          scale: 2.5,
          translateY: 50,
          translateX: 260,
        }}
        className="button-doges-memes"
      >
        Proof of memes
      </motion.button>

      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.8, scale: 3.5, scaleX: -1 }}
        src="/assets/chatbox.png"
        className="chatbox2"
        alt="chatbox"
      />

      <motion.h2
        className="h2"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          translateX: 500,
          translateY: -380,
        }}
      >
        Doges love memes
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          translateX: 500,
          translateY: -380,
        }}
        className="p2"
      >
        Dogecoin started as a meme and evolved to be so much <br /> more!
        Inspired by that, the first product by Doge Art <br />
        Club is the NFT Meme Generator.
      </motion.p>
    </div>
  );
};

export default Slide2;
