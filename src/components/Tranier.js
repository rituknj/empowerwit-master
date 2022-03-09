import React from "react";
import Slider from "react-slick";
import blogimage from "./images/blogimage.webp";

export default function Tranier() {
  const cardInfo = [
    {
      img: [blogimage],
      name: "Nikhil Rana",
      designation: "Tranier",
    },
    {
      img: [blogimage],
      name: "Mustafa",
      designation: "Tranier",
    },
    {
      img: [blogimage],
      name: "Mayank",
      designation: "Tranier",
    },
    {
      img: [blogimage],
      name: "XYZ",
      designation: "Trainer",
    },
  ];
  const renderCard = (cardInfo, index) => {
    return (
      <div className="image-container" key={index}>
        <div className="images">
          <div className="ic">
            <img src={cardInfo.img} className="image" alt="imglogo" />
          </div>
          <div className="details">
            <p className="name">{cardInfo.name}</p>
            <span className="designation">{cardInfo.designation}</span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="slider-container">
        <Slider
          dots={false}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
          responsive={[
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {cardInfo.map(renderCard)}
          {console.log(cardInfo.map(renderCard))}
        </Slider>
      </div>
    </>
  );
}
