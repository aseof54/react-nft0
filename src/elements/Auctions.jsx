import React from "react";
import Heading from "../components/Heading";
import { Carousel } from "@mantine/carousel";

import nft1 from "../assets/images/nfts/auction-image-1.png";
import nft2 from "../assets/images/nfts/auction-image-2.png";
import nft3 from "../assets/images/nfts/auction-image-3.png";

import heartIcon from "../assets/images/icons/heart-icon.svg";
import nftAuthor from "../assets/images/nft-authors/profile-image1.png";
import Button from "../components/Button";

import nftCardTimeBg from "../assets/images/banners/nft-cart-time-bg.svg";
import { ReactComponent as CarouselArrowIcon } from "../assets/images/icons/carousel-arrow.svg"


const auctionsData = [
  {
    image: nft1,
    authorImage: nftAuthor,
    authorName: "Purple thingy",
    authorLink: "@wzard",
    likes: 92,
    price: "4.532 ETH",
    time: "02:44:31"
  },
  {
    image: nft2,
    authorImage: nftAuthor,
    authorName: "Funny face",
    authorLink: "@skibidi",
    likes: 52,
    price: "4.219 ETH",
    time: "12:18:44"
  },
  {
    image: nft3,
    authorImage: nftAuthor,
    authorName: "Totally not stock",
    authorLink: "@linganguli",
    likes: 148,
    price: "3.86 ETH",
    time: "00:48:24"
  },

]
const Auctions = () => {
  return (
    <section className="auctions">
      <Heading bubbleColor="#8613A5">Live Auctions</Heading>
      <Carousel
        slideSize="33%"
        height={691}
        align="start"
        slideGap="42px"
        controlsOffset="xs"
        controlSize={40}
        loop
        dragFree
        nextControlIcon={<CarouselArrowIcon />}
        previousControlIcon={<CarouselArrowIcon />}
      >
        {[...auctionsData, ...auctionsData].map((card) => (
          <Carousel.Slide>
            <div className="carousel-card">
              <div
                className="nft-image"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="nft-timer" style={{ backgroundImage: `url(${nftCardTimeBg})` }}>{card.time}</div>
              </div>
              <div className="nft-author">
                <div className="author-info">
                  <img src={card.authorImage} alt="author" className="author-image" />

                  <div className="author-name">
                    <span className="name">{card.authorName}</span>
                    <span>by {card.authorLink}</span>
                  </div>
                </div>

                <div className="likes">
                  <img src={heartIcon} alt="heart" className="heart-icon" />
                  <span>{card.likes}</span>
                </div>
              </div>
              <div className="nft-price">
                <span>Current Bid</span>
                <span className="price">{card.price}</span>
              </div>
              <div className="place-bid-btn">
                <Button
                  padding="21px 0"
                  backgroundColor="#E9D7A7"
                  borderColor="#FDE8B3"
                  backgroundOpacity="0.1"
                  textColor="#FFFFFF"
                >
                  Place a bid
                </Button>
              </div></div>
          </Carousel.Slide>
        ))}

      </Carousel>
      <Button
        borderColor="#FFCE4E"
        padding="24px 65px"
        textColor="white"
        style={{

          display: "block",
          margin: "0 auto",
          fontFamily: "'Work Sans', sans-serif",
          fontWeight: 500,
          fontSize: "30px",
          lineHeight: "118%",
          letterSpacing: "0.05em",
          color: "#f5fbf2"
        }}
      >
        View All
      </Button>
    </section>
  );
};

export default Auctions;
