import React from 'react'
import Heading from '../components/Heading'
import iconWallet from "../assets/images/icons/howItWorks-wallet.svg"
import iconCollection from "../assets/images/icons/howItWorks-collection.svg"
import iconNft from "../assets/images/icons/howItWorks-nft.svg"
import iconSale from "../assets/images/icons/howItWorks-sale.svg"

const HowItWorksData = [
    {
        icon: iconWallet,
        title: "you give money"
    },
    {
        icon: iconCollection,
        title: "we take it"
    },
    {
        icon: iconNft,
        title: "we get rich"
    },
    {
        icon: iconSale,
        title: "haha u got scammed"
    }
]

const HowItWorks = () => {
  return (
    <section className="how-it-works">
        <Heading>How it works?</Heading>
        <div className="content">
            {HowItWorksData.map((element,key) => (
                <>
                    <div className="card" key={key}>
                        <div className="card-icon">
                            <img src={element.icon} alt=""  />
                        </div>
                        <h3 className='card-title'>{element.title}</h3>
                    </div>
                    {key !== HowItWorksData.length - 1 && (<div className='line'></div>)}
                </>
            ))}
        </div>
    </section>
  )
}

export default HowItWorks