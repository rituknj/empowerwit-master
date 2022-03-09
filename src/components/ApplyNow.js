import React, { useState } from "react";
import "./Applynow.css";
import { FaWpforms } from "react-icons/fa";

export default function ApplyNow() {
  const [register, setRegister] = useState({
    name: "",
    number: "",
    email: "",
    qualification: "",
    Employed:"",
    UnEmployed: "",
    Married: "",
    UnMarried: "",
    address: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setRegister({...register, [name]:value})
  };
  return (
    <>
      <section className="apply">
        <div className="apply-container">
          <div className="apply-content">
            <div className="form-container">
              <form className="apply-form">
                <div className="form-content">
                  <div className="rf text-center">
                    <h1 className="rf-tittle">
                      Registration Form <FaWpforms color="#fb9000" />
                    </h1>
                  </div>
                  <div className="form-content1">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    ></label>
                    <input
                      name="name"
                      type="name"
                      className="form-control2"
                      id="exampleFormControlInput1"
                      placeholder="Your Name"
                      value={register.name}
                      onChange={handleInput}
                    />
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    ></label>
                    <input
                      name="number"
                      type="tel"
                      className="form-control2"
                      id="exampleFormControlInput1"
                      placeholder="phone number"
                      value={register.number}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="form-content1">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    ></label>
                    <input
                      name="email"
                      type="email"
                      className="form-control2"
                      id="exampleFormControlInput1"
                      placeholder="example@example.com"
                      value={register.email}
                      onChange={handleInput}
                    />
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    ></label>
                    <input
                      name="qualification"
                      type="text"
                      className="form-control2"
                      id="exampleFormControlInput1"
                      placeholder="qualification"
                      value={register.qualification}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="form-content1">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    ></label>
                    <select
                      className="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option>Working Status</option>
                      <option value="1">Employed</option>
                      <option value="2">UnEmployed</option>
                    </select>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    ></label>
                    <select
                      className="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option>Marital Status</option>
                      <option value="1">Married</option>
                      <option value="2">UnMarried</option>
                    </select>
                  </div>
                  <div className="form-content1">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    ></label>
                    <select
                      className="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option>Gender</option>
                      <option value="1">Male</option>
                      <option  value="2">Female</option>
                      <option  value="3">Others</option>
                    </select>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    ></label>
                    <input
                      type="email"
                      className="form-control2"
                      id="exampleFormControlInput1"
                      placeholder="photo"
                    />
                  </div>
                  <div className="form-content1">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    ></label>
                    <textarea
                      name="address"
                      className="form-control3"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      placeholder="Address"
                      value={register.address}
                      onChange={handleInput}
                    ></textarea>
                  </div>
                  <div className="button">
                    <button className="apply2">Apply</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
