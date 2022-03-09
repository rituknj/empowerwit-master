import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

export default function Contact() {
  return (
    <>
      <section className="contact-container">
        <div className="contact-content">
          <h3 className="getintouch">
            <span className="gt">Get</span> In Touch
          </h3>
          <div className="para-container">
            <h6 className="git-heading">
              Do you have a question or proposal for us?
            </h6>
            <p className="para">
              Use this form to contact us and someone will be in touch with you
              soon!
            </p>
          </div>
        </div>
      </section>

      <section className="form-container mb-lg-3">
        <div className="icons-container">
          <a href="http://" target="_blank" rel="noreferrer">
            <AiOutlineTwitter size={32} color="#fb9000" className="icons" />{" "}
          </a>
          <a href="http://" target="_blank" rel="noreferrer">
            <FaTelegramPlane size={32} color="#fb9000" className="icons" />{" "}
          </a>
          <a href="http://" target="_blank" rel="noreferrer">
            <FaFacebookF size={32} color="#fb9000" className="icons" />
          </a>
        </div>
        <form className="form">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label"
          ></label>
          <input
            type="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Your Name"
          />
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label"
          ></label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="example@example.com"
          />
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="Your Message Here"
          ></textarea>
        </form>
        <button type="submit" className="sendmessage">
          Send Message
        </button>
      </section>
    </>
  );
}
