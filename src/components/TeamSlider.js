import React from "react";
import Slider from "react-slick";
import blogimage from "./images/blogimage.webp";

export default function TeamSlider() {
  const cardInfo = [
    {
      img: [blogimage],
      name: "Lalita",
      designation: "Director",
    },
    {
      img: [blogimage],
      name: "Miss.Ritu",
      designation: "Public relations manager",
    },
    {
      img: [blogimage],
      name: "Mrs.Neeraj",
      designation: "Social media manager",
    },
    {
      img: [blogimage],
      name: "Mrs.Bhavna",
      designation: "Program coordinator",
    },
    {
      img: [blogimage],
      name: "Mrs.Fouzia",
      designation: "It manager",
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
