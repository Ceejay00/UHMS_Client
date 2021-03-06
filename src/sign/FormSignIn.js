import React from "react";
import NavbarTwo from "../navbars/NavbarTwo";
import { Button } from "primereact/button";
import useSignIn from "./useSignIn";
import bedsa from "../images/bedsa.png";

import validate from "../Signupform/validateInfo";
import unilorin from "../images/unilorin.png";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
const FormSignIn = () => {
  const { handleChange, values, handleSubmit, errors, isLoading } =
    useSignIn(validate);
  return (
    <div>
      <div className="d">
        <div className="anx">
          {/* <img className="image" src={unilorin} alt="unilorin" height="60" />
          <h4 className="name">Unilorin</h4>
          <h4 className="hostels">Hostels</h4> */}
          <img className="lala" src={bedsa}></img>
        </div>
        <div className="signin">
          <div className="spn">
            <div className="admin">
              <Link to="/admin">
                <button>Admin</button>
              </Link>
            </div>
            <div className="bas">
              <p>Not yet a member?</p>
              <Link to="/form">
                <button>Sign up</button>
              </Link>
            </div>
          </div>
          <form className="the" onSubmit={handleSubmit}>
            <section className="acc">
              <h1>Sign in</h1>
              <p>Sign in to get accomodation</p>
            </section>
            <div className="im">
              <div className="h">
                <label htmlFor="email" className="fl">
                  Email
                </label>
                <br />
                <input
                  id="email"
                  type="email"
                  className="fm"
                  name="email"
                  placeholder="Enter your Email"
                  value={values.email}
                  onChange={handleChange}
                ></input>
                <br />
                {errors.email && <p>{errors.email}</p>}
                <label htmlFor="password" className="fl">
                  Password
                </label>
                <br />
                <input
                  id="password"
                  type="password"
                  className="fm"
                  name="password"
                  placeholder="Enter your Password"
                  value={values.password}
                  onChange={handleChange}
                ></input>
                {errors.password && <p>{errors.password}</p>}
              </div>
              <div className="form-btn">
                <button>Sign in</button>
                {/* <Button
                  label="Sign in"
                  loading={isLoading}
                  loadingIcon="pi pi-spin pi-sun"
                  style={{
                    backgroundColor: "#335ffe",
                    margin: "20px auto",
                    width: "100px",
                    padding: "15px",
                    outline: "none",
                  }}
                /> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSignIn;
