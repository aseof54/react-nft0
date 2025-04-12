import React from "react";
import Button from "../components/Button";
import bestNftImg from "../assets/images/banners/bestNft.png";
const Banner = () => {
  const statistics = [
    {
      value: "32k+",
      title: "Artworks",
    },
    {
      value: "32k+",
      title: "Auctions",
    },
    {
      value: "12k+",
      title: "Creators",
    },
  ];
  const bestNft = {
    img: { bestNftImg },
    price: "0.99 ETH",
    endsIn: "25 hrs",
    artist: "@wzard",
  };
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
        <div className="numbers">
          {statistics.map((element, key) => (
            <div key={key} className="number">
              <h3>{element.value}</h3>
              <span>{element.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="right-part">
        <div
          className="card"
          style={{ backgroundImage: `url(${bestNft.img})` }}
        >
          <div className="top-content">

            <div className="nft-info">
              <span>Current bid</span>
              <h3>{bestNft.price}</h3>
            </div>
            <div className="nft-info">
              <span>Ends in</span>
              <h3>{bestNft.endsIn}</h3>
            </div>

          </div>

          <div className="bottom-content">

            <div className="artist">
              <span>Artist</span>
              <span>{bestNft.artist}</span>
            </div>
            <Button
              backgroundColor="#FFCE4E"
              padding="23px 44px"
              textColor="#000"
            >
              Start Bid
            </Button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
