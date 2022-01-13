import React from "react";
import NavbarTwo from "../navbars/NavbarTwo";
import { Button } from "primereact/button";

import useSignIn from "./useSignIn";
import validate from "../Signupform/validateInfo";
const FormSignIn = () => {
  const { handleChange, values, handleSubmit, errors, isLoading } =
    useSignIn(validate);
  return (
    <div>
      <NavbarTwo />
      <div className="signin">
        <form className="the" onSubmit={handleSubmit}>
          <section className="acc">
            <h1>Sign in</h1>
            <p>Sign in to get accomodation</p>
          </section>
          <label htmlFor="email" className="label-sign">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-input"
            name="email"
            placeholder="Enter your Email"
            value={values.email}
            onChange={handleChange}
          ></input>
          {errors.email && <p>{errors.email}</p>}
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="form-input"
            name="password"
            placeholder="Enter your Password"
            value={values.password}
            onChange={handleChange}
          ></input>
          {errors.password && <p>{errors.password}</p>}
          <div className="form-btn">
            <Button
              label="Sign-up"
              loading={isLoading}
              loadingIcon="pi pi-spin pi-sun"
              style={{
                backgroundColor: "#335ffe",
                margin: "20px auto",
                width: "300px",
                padding: "15px",
                outline: "none",
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSignIn;
