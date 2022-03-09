import React from "react";
import { Link } from "react-router-dom";
// import Misson from "../images/Misson.png";
// import Vision from "../images/Vision.png";
import Aboutimage from "../images/Aboutimage.png";
import "./pages.css";
import myvision from "../images/myvision.png";
export default function About() {
  return (
    <>
      <section className="about-container">
        <h2 className="intro py-2  text-center">About Us</h2>
        <div className="about-content py-lg-5 px-lg-5 d-flex align-items-center">
          <div className="image-container">
            <img
              src={Aboutimage}
              alt="image1"
              srcSet=""
              className="img2"
            />
          </div>
          <div className="heading-content px-4">
            <h3 className="heading-2 px-4"> What We Are?</h3>
            <h4 className="heading-2 py-3 px-4">
              We Provide a Digital Platform To Educated housewives to realize
              their true potential and achieve economic independence.
            </h4>
            <ul className="para-3 py-3 px-4">
              <li>
                Many educated housewives in our friends circle, neighbor and in
                our family, who engaged in household work and children.
              </li>
              <br />

              <li>
                When we get together they always talk about their education and
                potential. they also want to earn money and spend their life
                according to their wish But they cannot step out from the house.
              </li>
              <br />

              <li>
                In Response,{" "}
                <Link to="/" className="kesavilink">
                  <span className="k">K</span>
                  <span className="esavi">esavi</span>
                </Link>
                <span className="sw"> Web Solutions </span>
                and{" "}
                <Link to="/" className="empowerwit">
                  <span className="ew"> Empowerwit</span>
                </Link>{" "}
                group Committed to jointly develop an online platform for
                women's learning and economic empowerment{" "}
                <Link to="/" className="link">
                  {" "}
                  www.empowerwit.com{" "}
                </Link>
              </li>
              <br />

              <li>On March 2021, this platform was launched.</li>
              <br />

              <li>
                Since, then empoerwit has grown into a global movement with our
                team.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mv-container">
        <div className="img">
      <img src={myvision} alt="images"/>
      </div>
        <div className="mission-container">
          <h2 className="mission-heading text-center px-5 py-2">Vision</h2>
          <p className="mission-para px-5">
          	Empowerment of women across the globe in the field of information technology.<br/>
            A world where every woman is able to use their potential, make her
            own decisions, and earn.
          </p>
          
        </div>
        
        {/* <div className="image-container">
          <img src={Misson} alt="" className="mission-image" />
        </div> */}
        <div className="vision-container">
          <h2 className="vision-heading text-center">Mission</h2>
          <p className="vision-para-2 px-5">
          	Bringing financial freedom to the women of household by training them to use information technology to their advantage.
          </p>
          
        </div>
        {/* <div className="image-conatiner-2">
          <img src={Vision} alt="" className="vision-image" />
        </div> */}
        <div className="vision-container">
          <h2 className="vision-heading text-center">Goals</h2>
          <p className="vision-para-2 px-5">
          Making a team of 25 trained housewives by the end of 2022-23 Financial Year to load the mission of EWIT.

          </p>
        </div>
      </section>
    </>
  );
}
