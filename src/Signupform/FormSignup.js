import React, { useState } from "react";
import useform from "./useForm.js";
import validate from "./validateInfo.js";
import { Button } from "primereact/button";
import "./Form.css";
import Navbar from "../navbars/Navbar.js";
import facultiesData from "../FacultiesDepartments/facultiesData.json";

const FormSignup = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(undefined);
  const { handleChange, values, handleSubmit, errors, isLoading } =
    useform(validate);

  const onFacultyChange = (e) => {
    setSelectedFaculty(e.target.value);
    handleChange(e);
  };

  return (
    <div className="background">
      <Navbar />
      <form className="main" onSubmit={handleSubmit}>
        <div className="border">
          <section className="accomodation">
            <h1>Sign up</h1>
            <p>Sign up to get accomodation</p>
          </section>
          <div className="row-one">
            <div className="form-content">
              <div className="form-inputs">
                <div className="form">
                  <label htmlFor="firstName" className="form-label">
                    <span>Firstname</span>
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="form-input"
                    name="firstName"
                    placeholder="Enter your First name"
                    value={values.firstName}
                    onChange={handleChange}
                  ></input>
                  <div> {errors.firstName && <p>{errors.firstName}</p>}</div>
                </div>
              </div>
            </div>
            <div className="form-content">
              <div className="form">
                <div className="form-inputs">
                  <label htmlFor="lastName" className="form-label">
                    Lastname
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="form-input"
                    name="lastName"
                    placeholder="Enter your First name"
                    value={values.lastName}
                    onChange={handleChange}
                  ></input>
                  {errors.lastName && <p>{errors.lastName}</p>}
                </div>
              </div>
            </div>
          </div>
          <div className="row-two">
            <div className="form-content">
              <div className="form">
                <div className="form-inputs">
                  <label htmlFor="email" className="form-label">
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
                </div>
              </div>
            </div>
            <div className="form-content">
              <div className="form">
                <div className="form-inputs">
                  <label htmlFor="phoneNo" className="form-label">
                    Phone Number
                  </label>
                  <input
                    id="phoneNo"
                    type="text"
                    className="form-input"
                    name="phoneNo"
                    placeholder="Enter your Phone no"
                    value={values.phoneNo}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="row-three">
            <div className="form-content">
              <div className="form">
                <div className="form-inputs">
                  <label htmlFor="matricNumber" className="form-label">
                    Matric No
                  </label>
                  <input
                    id="matricNumber"
                    type="text"
                    className="form-input"
                    name="matricNumber"
                    placeholder="Enter your Matric Numvber"
                    value={values.matricNumber}
                    onChange={handleChange}
                  ></input>
                  {errors.matricNumber && <p>{errors.matricNumber}</p>}
                </div>
              </div>
            </div>
            <div className="form-content">
              <div className="form">
                <div className="form-inputs">
                  <label htmlFor="faculty" className="form-label">
                    Faculty
                  </label>
                  <select
                    name="faculty"
                    id="faculty"
                    className="form-input"
                    value={values.faculty}
                    onChange={onFacultyChange}
                  >
                    <option value={undefined}></option>
                    {facultiesData.map((faculty, index) => (
                      <option value={index} key={index}>
                        {faculty.name}
                      </option>
                    ))}
                  </select>
                  {errors.faculty && <p>{errors.faculty}</p>}
                </div>
              </div>
            </div>
          </div>
          <div className="row-four">
            <div className="form-content">
              <div className="form">
                <div className="form-inputs">
                  <label htmlFor="level" className="form-label">
                    Level
                  </label>
                  <select
                    name="level"
                    id="level"
                    className="form-input"
                    value={values.level}
                    onChange={handleChange}
                  >
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-content">
              <div className="form">
                <div className="form-inputs">
                  <label htmlFor="department" className="form-label">
                    Department
                  </label>
                  <select
                    name="department"
                    id="department"
                    className="form-input"
                    value={values.department}
                    onChange={handleChange}
                  >
                    {selectedFaculty &&
                      facultiesData[selectedFaculty].departments.map(
                        (department, index) => (
                          <option value={department} key={index}>
                            {department}
                          </option>
                        )
                      )}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row-four">
            <div className="form-content">
              <div className="form">
                <div className="form-inputs">
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
                </div>
              </div>
            </div>
            <div className="form-content">
              <div className="form">
                <div className="form-inputs">
                  <label htmlFor="confirmPass" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPass"
                    type="password"
                    className="form-input"
                    name="confirmPass"
                    placeholder="Confirm your password"
                    value={values.confirmPass}
                    onChange={handleChange}
                  ></input>
                  {errors.confirmPass && <p>{errors.confirmPass}</p>}
                </div>
              </div>
            </div>
          </div>
          <div className="form-btn">
            {/* <button type="submit" loading={isLoading}>Sign up</button> */}
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
        </div>
      </form>
    </div>
  );
};

export default FormSignup;
