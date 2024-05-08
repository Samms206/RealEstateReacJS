import React from "react";
import "./Hero.css"

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                <div className="flexColCenter hero-left">
                    <h1 className="hero-heading">
                        Find, Buy and Sell <br /> Your Property with us 
                    </h1>
                    <p className="hero-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button className="button">
                        <a href="#">Explore</a>
                    </button>
                </div>
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="hero" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero