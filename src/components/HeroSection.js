import React from "react";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import image from "./images/image.png";
import Sliderpage from "./Sliderpage";

export default function HeroSection() {
  return (
    <>
      <section className="main-container d-flex justify-content-between">
        <div className="content-container px-4 py-4">
          <div className="content-text  ">
            <h1 className="empowerwit">EmpowerWit</h1>
            <p className="para-1">Future is technology! Plug into EWiT</p>
            <p className="para-2">
              A social action campaign that seeks to encourage and inspire
              qualified housewives to pursue a career in information technology
              by training them in the fields of web development, digital
              marketing & web designing.
            </p>
            <div className="knowmore">
              <Link to="/aboutus" className="kn">
                Know More
                <MdArrowRight size={25} />{" "}
              </Link>
            </div>
          </div>
        </div>
        <Sliderpage />
      </section>

      <section className="technology-container d-flex align-items-center justify-content-between">
        <div className="women-image">
          <img src={image} alt="..." className="sliderimage2" />
        </div>
        <div className="wit-content">
          <div className="wit-heading">
            <h1 className="wit">Women In Technology</h1>
            <p className="wit-para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
              earum animi soluta est laboriosam expedita assumenda vitae sed
              harum! Molestiae, maiores tempora dicta autem velit at impedit
              itaque sapiente possimus! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quam impedit, fuga mollitia natus quaerat esse
              quod nam perspiciatis facere culpa? Delectus iusto exercitationem
              repellat reiciendis vel nesciunt, quo natus tempore.
            </p>
            <p className="wit-para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
              earum animi soluta est laboriosam expedita assumenda vitae sed
              harum! Molestiae, maiores tempora dicta autem velit at impedit
              itaque sapiente possimus! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quam impedit, fuga mollitia natus quaerat esse
              quod nam perspiciatis facere culpa? Delectus iusto exercitationem
              repellat reiciendis vel nesciunt, quo natus tempore.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
