import React from "react";
import Button from "../components/Button";

const Banner = () => {
  return (
    <section className="banner">
      <div className="left-part">
        <div className="heading">
          <h1>
            Explore, Buy and Sell the <span>Best NFTs!</span>
          </h1>
        </div>
        <div className="buttons">
          <Button
            backgroundColor="#FFCE4E"
            padding="24px 76px"
            textColor="#000"
          >
            Explore
          </Button>
          <Button
            borderColor="#FFCE4E"
            backgroundColor="#E9D7A7"
            backgroundOpacity="0.1"
            padding="24px 76px"
            textColor="#000"
          >
            Create
          </Button>
        </div>
        <div className="numbers"></div>
      </div>
      <div className="right-part"></div>
    </section>
  );
};

export default Banner;
