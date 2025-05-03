import React from "react";
import coinbase from "../assets/images/banners/coinbase.svg";
import binance from "../assets/images/banners/binance.svg";
import bitmex from "../assets/images/banners/bitmex.svg";
import blockchain from "../assets/images/banners/blockchain.svg";
const partnersLogos = [
  {
    img: coinbase,
    name: "Coinbase",
  },
  {
    img: blockchain,
    name: "Blockchain",
  },
  {
    img: binance,
    name: "Binance",
  },
  {
    img: bitmex,
    name: "Bitmex",
  },
];
const Partners = () => {
  return (
    <div className="partners">
      {partnersLogos.map((partner) => (
        <img
          src={partner.img}
          alt={partner.name}
          key={partner.name}
          className="partner"
        />
      ))}
    </div>
  );
};

export default Partners;
