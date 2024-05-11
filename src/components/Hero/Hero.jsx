import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left Side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Find, Buy and Sell <br /> Your Property <br />
              with us
            </motion.h1>
          </div>
          <motion.div
            className="flexColStart hero-desc"
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring", delay: 0.1 }}
          >
            <span className="secondaryText">
              Find a variety of properties that suit you and your needs
            </span>
            <span className="secondaryText">
              Forget All The difficult in finding a residence for you
            </span>
          </motion.div>
          <motion.div
            className="flexCenter search-bar"
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring", delay: 0.2 }}
          >
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </motion.div>
          <motion.div
            className="flexCenter stats"
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring", delay: 0.3 }}
          >
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8000} end={9100} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1900} end={2235} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={82} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>
          </motion.div>
        </div>
        {/* end of left side */}

        {/* Right Side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="hero" />
          </div>
        </div>
        {/* end right side */}
      </div>
    </section>
  );
};

export default Hero;
