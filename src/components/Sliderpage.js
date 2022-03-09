import React from "react";
import "./Sliderpage.css";
import sliderimage1 from "./images/sliderimage 1.png";
import womenintec from "./images/womenintec (2).png";

export default function Sliderpage() {
  return (
    <>
      <div className="slider-container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={sliderimage1} alt="..." className="sliderimage" />
            </div>
            <div className="carousel-item">
              <img src={womenintec} alt="..." className="sliderimage" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
