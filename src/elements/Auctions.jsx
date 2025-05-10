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


const auctionsData = [
    {
        image:nft1,
        authorImage:nftAuthor,
        authorName:"Virtual Art",
        authorLink:"@wzard",
        likes:92,
        price:"4.89 ETH",
        time:"03:18:24"
    },
    {
        image:nft2,
        authorImage:nftAuthor,
        authorName:"Virtual Art",
        authorLink:"@wzard",
        likes:92,
        price:"4.89 ETH",
        time:"03:18:24"
    },
    {
        image:nft3,
        authorImage:nftAuthor,
        authorName:"Virtual Art",
        authorLink:"@wzard",
        likes:92,
        price:"4.89 ETH",
        time:"03:18:24"
    }
]
const Auctions = () => {
  return (
    <section className="auctions">
      <Heading bubbleColor="#8613A5">Live Auctions</Heading>
      <Carousel
        slideSize="33%"
        height={691}
        align="start"
        slideGap="xs"
        controlsOffset="xs"
        controlSize={40}
        loop
        dragFree
      >
        {auctionsData.map((card, index)=>(
        <Carousel.Slide>
        <div
          className="nft-image"
          style={{ backgroundImage: `url(${nft1})` }}
        >
          <div className="nft-timer" style={{ backgroundImage: `url(${nftCardTimeBg})` }}>03:18:24</div>
        </div>
        <div className="nft-author">
          <div className="author-info">
            <img src={nftAuthor} alt="author" className="author-image" />

            <div className="author-name">
              <span className="name">Virtual Art</span>
              <span>by @wzard</span>
            </div>
          </div>

          <div className="likes">
            <img src={heartIcon} alt="heart" className="heart-icon" />
            <span>92</span>
          </div>
        </div>
        <div className="nft-price">
          <span>Current Bid</span>
          <span className="price">0.99 ETH</span>
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
        </div>
      </Carousel.Slide>
        ))}

      </Carousel>
    </section>
  );
};

export default Auctions;
