import React from "react";
import "./slide7.css";
import { motion } from "framer-motion";

const Slide7 = () => {
  return (
    <div className="slide7image">
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        src="https://www.dogeartclub.com/_next/image?url=https%3A%2F%2Fdai1hr2knmld8.cloudfront.net%2Fdoges%2Fdogespace.png&w=1920&q=75"
        alt=""
        className="dogAstro"
      />
      <motion.img
        src="/assets/cloudChatboxBlackInverted.png"
        className="chatbox7"
        alt="chatbox"
        initial={{ opacity: 0, scale: 0, translateX: 850, translateY: 180 }}
        whileInView={{
          opacity: 0.8,
          scale: 4.5,
          translateX: 850,
          translateY: 180,
        }}
      />
      <motion.button
        class="buttondoges1"
        initial={{ opacity: 0, scale: 0, translateX: 295, translateY: 70 }}
        whileInView={{
          opacity: 1,
          scale: 2.5,
          translateX: 295,
          translateY: 70,
        }}
      >
        ISHOTTHESHERIFF
      </motion.button>
      <motion.button
        class="buttondoges2"
        initial={{ opacity: 0, scale: 0, translateX: 345, translateY: 70 }}
        whileInView={{
          opacity: 1,
          scale: 2.5,
          translateX: 345,
          translateY: 70,
        }}
      >
        EPICODE
      </motion.button>
      <motion.button
        class="buttondoges3"
        initial={{ opacity: 0, scale: 0, translateX: 410, translateY: 70 }}
        whileInView={{
          opacity: 1,
          scale: 2.5,
          translateX: 410,
          translateY: 70,
        }}
      >
        OTHIS
      </motion.button>
      <motion.img
        src="https://dai1hr2knmld8.cloudfront.net/team/ishot_d.jpeg"
        alt=""
        className="ishot"
        initial={{ opacity: 0, scale: 0, translateX: -110, translateY: -120 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          translateX: -110,
          translateY: -120,
        }}
      />
      <motion.img
        src="https://dai1hr2knmld8.cloudfront.net/team/epicode_d.jpeg"
        alt=""
        className="epicode"
        initial={{ opacity: 0, scale: 0, translateX: -80, translateY: -120 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          translateX: -80,
          translateY: -120,
        }}
      />
      <motion.img
        src="https://dai1hr2knmld8.cloudfront.net/team/othis_d.jpeg"
        alt=""
        className="othis"
        initial={{ opacity: 0, scale: 0, translateX: -36, translateY: -120 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          translateX: -36,
          translateY: -120,
        }}
      />
      {/* <div className="text7">
        <h3 className="h7"> Doges love memes </h3>
        <p className="p7">
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

      {/* <div className="text7"> */}
      <motion.h2
        initial={{ opacity: 0, scale: 0, translateX: 850, translateY: -410 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          translateX: 850,
          translateY: -410,
        }}
        className="h7"
      >
        Doges are going to the moon
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, scale: 0, translateX: 800, translateY: -420 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          translateX: 800,
          translateY: -420,
        }}
        className="p7"
      >
        So when do we finally go to the moon? Soon! Doge Art Club is launching
        in Q1 of 2022. Be part of the Journey before we launch! Woof!
      </motion.p>
      {/* </div> */}

      {/* <span className="genesis">GENESIS DOGES</span>
      <span className="artist">ARTIST</span> */}
    </div>
  );
};

export default Slide7;
