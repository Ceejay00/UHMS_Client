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
    // <div className="backgroundh">

    //   <form className="main" onSubmit={handleSubmit}>
    //     <div className="border">
    //       <section className="accomodation">
    //         <h1>Sign up</h1>
    //         <p>Sign up to get accomodation</p>
    //       </section>
    //       <div className="row-one">
    //         <div className="form-content">
    //           <div className="form-inputs">
    //             <div className="form-first">
    // <label htmlFor="firstName" className="form-label">
    //   <span>Firstname</span>
    // </label>

    // <input
    //   id="firstName"
    //   type="text"
    //   className="form-input"
    //   name="firstName"
    //   placeholder="Enter your First name"
    //   value={values.firstName}
    //   onChange={handleChange}
    // ></input>
    // <div> {errors.firstName && <p>{errors.firstName}</p>}</div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="form-content">
    //           <div className="form">
    //             <div className="form-inputs">
    // <label htmlFor="lastName" className="form-label">
    //   Lastname
    // </label>
    // <input
    //   id="lastName"
    //   type="text"
    //   className="form-input"
    //   name="lastName"
    //   placeholder="Enter your First name"
    //   value={values.lastName}
    //   onChange={handleChange}
    // ></input>
    // {errors.lastName && <p>{errors.lastName}</p>}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row-two">
    //         <div className="form-content">
    //           <div className="form">
    //             <div className="form-inputs">
    // <label htmlFor="email" className="form-label">
    //   Email
    // </label>
    // <input
    //   id="email"
    //   type="email"
    //   className="form-input"
    //   name="email"
    //   placeholder="Enter your Email"
    //   value={values.email}
    //   onChange={handleChange}
    // ></input>
    // {errors.email && <p>{errors.email}</p>}
    //             </div>
    //           </div>
    //         </div>
    //         <div className="form-content">
    //           <div className="form">
    //             <div className="form-inputs">
    // <label htmlFor="phoneNo" className="form-label">
    //   Phone Number
    // </label>
    // <input
    //   id="phoneNo"
    //   type="text"
    //   className="form-input"
    //   name="phoneNo"
    //   placeholder="Enter your Phone no"
    //   value={values.phoneNo}
    //   onChange={handleChange}
    // ></input>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row-three">
    //         <div className="form-content">
    //           <div className="form">
    //             <div className="form-inputs">
    // <label htmlFor="matricNumber" className="form-label">
    //   Matric No
    // </label>
    // <input
    //   id="matricNumber"
    //   type="text"
    //   className="form-input"
    //   name="matricNumber"
    //   placeholder="Enter your Matric Numvber"
    //   value={values.matricNumber}
    //   onChange={handleChange}
    // ></input>
    // {errors.matricNumber && <p>{errors.matricNumber}</p>}
    //             </div>
    //           </div>
    //         </div>
    //         <div className="form-content">
    //           <div className="form">
    //             <div className="form-inputs">
    // <label htmlFor="faculty" className="form-label">
    //   Faculty
    // </label>
    // <select
    //   name="faculty"
    //   id="faculty"
    //   className="form-input"
    //   onChange={onFacultyChange}
    // >
    //   <option value={undefined}></option>
    //   {facultiesData.map((faculty, index) => (
    //     <option value={index} key={index}>
    //       {faculty.name}
    //     </option>
    //   ))}
    // </select>
    // {errors.faculty && <p>{errors.faculty}</p>}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row-four">
    //         <div className="form-content">
    //           <div className="form">
    //             <div className="form-inputs">
    // <label htmlFor="level" className="form-label">
    //   Level
    // </label>
    // <select
    //   name="level"
    //   id="level"
    //   className="form-input"
    //   value={values.level}
    //   onChange={handleChange}
    // >
    //   <option value="100">100</option>
    //   <option value="200">200</option>
    //   <option value="300">300</option>
    // </select>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="form-content">
    //           <div className="form">
    //             <div className="form-inputs">
    // <label htmlFor="department" className="form-label">
    //   Department
    // </label>
    // <select
    //   name="department"
    //   id="department"
    //   className="form-input"
    //   value={values.departments}
    //   onChange={handleChange}
    // >
    //   {selectedFaculty &&
    //     facultiesData[selectedFaculty].departments.map(
    //       (department, index) => (
    //         <option value={index} key={index}>
    //           {department}
    //         </option>
    //       )
    //     )}
    // </select>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row-four">
    //         <div className="form-content">
    //           <div className="form">
    //             <div className="form-inputs">
    // <label htmlFor="password" className="form-label">
    //   Password
    // </label>
    // <input
    //   id="password"
    //   type="password"
    //   className="form-input"
    //   name="password"
    //   placeholder="Enter your Password"
    //   value={values.password}
    //   onChange={handleChange}
    // ></input>
    // {errors.password && <p>{errors.password}</p>}
    //             </div>
    //           </div>
    //         </div>
    //         <div className="form-content">
    //           <div className="form">
    //             <div className="form-inputs">
    // <label htmlFor="confirmPass" className="form-label">
    //   Confirm Password
    // </label>
    // <input
    //   id="confirmPass"
    //   type="password"
    //   className="form-input"
    //   name="confirmPass"
    //   placeholder="Confirm your password"
    //   value={values.confirmPass}
    //   onChange={handleChange}
    // ></input>
    // {errors.confirmPass && <p>{errors.confirmPass}</p>}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    // <div className="form-btn">
    //   <button type="submit">Sign up</button>

    // </div>
    //     </div>
    //   </form>
    // </div>
    <div>
      <Navbar />
      <div className="backgroundh">
        <form className="main" onSubmit={handleSubmit}>
          <div className="border">
            <section className="accomodation">
              <h1>Sign up</h1>
              <p>Sign up to get accomodation</p>
            </section>
            <div className="sad">
              <div className="column1">
                <label htmlFor="firstName" className="fl">
                  <span>Firstname</span>
                </label>{" "}
                <br />
                <input
                  id="firstName"
                  type="text"
                  className="fm"
                  name="firstName"
                  placeholder="Enter your First name"
                  value={values.firstName}
                  onChange={handleChange}
                ></input>
                <div className="error">
                  {" "}
                  {errors.firstName && <p>{errors.firstName}</p>}
                </div>{" "}
                <br></br>
                <label htmlFor="email" className="fl">
                  Email
                </label>
                <br></br>
                <input
                  id="email"
                  type="email"
                  className="fm"
                  name="email"
                  placeholder="Enter your Email"
                  value={values.email}
                  onChange={handleChange}
                ></input>
                <div> {errors.email && <p>{errors.email}</p>} </div>
                <br></br>
                <label htmlFor="matricNumber" className="fl">
                  Matric No
                </label>
                <br></br>
                <input
                  id="matricNumber"
                  type="text"
                  className="fm"
                  name="matricNumber"
                  placeholder="Enter your Matric Numvber"
                  value={values.matricNumber}
                  onChange={handleChange}
                ></input>
                <div className="error">
                  {" "}
                  {errors.matricNumber && <p>{errors.matricNumber}</p>}
                </div>
                <br></br>
                <label htmlFor="level" className="fl">
                  Level
                </label>
                <br></br>
                <select
                  name="level"
                  id="level"
                  className="fm"
                  value={values.level}
                  onChange={handleChange}
                >
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="300">300</option>
                  <option value="400">400</option>
                  <option value="500">500</option>
                  <option value="600">600</option>
                </select>
                <br></br>
                <br></br>
                <label htmlFor="password" className="fl">
                  Password
                </label>
                <br></br>
                <input
                  id="password"
                  type="password"
                  className="fm"
                  name="password"
                  placeholder="Enter your Password"
                  value={values.password}
                  onChange={handleChange}
                ></input>
                <div className="error">
                  {" "}
                  {errors.password && <p>{errors.password}</p>}
                </div>
              </div>
              <div className="column2">
                <label htmlFor="lastName" className="fl">
                  Lastname
                </label>{" "}
                <br />
                <input
                  id="lastName"
                  type="text"
                  className="fm"
                  name="lastName"
                  placeholder="Enter your First name"
                  value={values.lastName}
                  onChange={handleChange}
                ></input>
                <div className="error">
                  {" "}
                  {errors.lastName && <p>{errors.lastName}</p>}
                </div>
                <br></br>
                <label htmlFor="phoneNo" className="fl">
                  Phone
                </label>
                <br />
                <input
                  id="phoneNo"
                  type="text"
                  maxLength="11"
                  className="fm"
                  name="phoneNo"
                  placeholder="Enter your Phone no"
                  value={values.phoneNo}
                  onChange={handleChange}
                ></input>{" "}
                <br></br> <br></br>
                <label htmlFor="faculty" className="fl">
                  Faculty
                </label>
                <br></br>
                <select
                  name="faculty"
                  id="faculty"
                  className="fm"
                  onChange={onFacultyChange}
                >
                  <option value={undefined}></option>
                  {facultiesData.map((faculty, index) => (
                    <option value={index} key={index}>
                      {faculty.name}
                    </option>
                  ))}
                </select>
                <div className="error">
                  {errors.faculty && <p>{errors.faculty}</p>}
                </div>
                <br></br>
                <label htmlFor="department" className="fl">
                  Department
                </label>
                <br></br>
                <select
                  name="department"
                  id="department"
                  className="fm"
                  value={values.departments}
                  onChange={handleChange}
                >
                  {selectedFaculty &&
                    facultiesData[selectedFaculty].departments.map(
                      (department, index) => (
                        <option value={index} key={index}>
                          {department}
                        </option>
                      )
                    )}
                </select>
                <br></br>
                <br></br>
                <label htmlFor="confirmPass" className="fl">
                  Confirm Password
                </label>
                <br></br>
                <input
                  id="confirmPass"
                  type="password"
                  className="fm"
                  name="confirmPass"
                  placeholder="Confirm your password"
                  value={values.confirmPass}
                  onChange={handleChange}
                ></input>
                {errors.confirmPass && <p>{errors.confirmPass}</p>}
              </div>
            </div>
          </div>
          <div className="form-btn">
            <button type="submit">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSignup;
