import React from "react";
import "../Userprofile/editpro.css";
import "../Userprofile/userprofile.css";
import unilorin from "../images/unilorin.png";
import elipse from "../images/Ellipse.png";
import empty from "../images/empty.png";
import { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import FileBase from "react-file-base64";
import tower from "../images/tower.png";
import UseEdit from "./UseEdit";
import facultiesData from "../FacultiesDepartments/facultiesData.json";

const EditProfile = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(undefined);
  const onFacultyChange = (e) => {
    setSelectedFaculty(e.target.value);
    handleChange(e);
  };

  const [postData, setPostData] = useState({
    firstName: "",
    lastName: "",
    matricNumber: "",
    phone: "",
    faculty: "",
    department: "",
    level: "",

    profile: "",
  });
  const [errors, setErrors] = useState({});
  //   const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    console.log(postData);
    e.preventDefault();
    var token = Cookies.get("token");
    const data = {
      token: token,
      postData: postData,
    };
    axios.post("http://localhost:8000/editProfile", data).then((response) => {
      console.log(response);
    });
    // setIsSubmitting(true);
  };

  const [user, setUser] = useState([]);

  const [editUser, setEditUser] = useState([]);

  useEffect(() => {
    var token = Cookies.get("token");
    const values = {
      token: token,
    };
    axios.post("http://localhost:8000/getUser", values).then((response) => {
      console.log("this" + response);
      setUser(response.data);
      handleChange({
        target: { name: "firstName", value: response.data[0].firstName },
      });
      handleChange({
        target: { name: "lastName", value: response.data[0].lastName },
      });
      handleChange({
        target: { name: "matricNumber", value: response.data[0].matricNumber },
      });
      handleChange({
        target: { name: "level", value: response.data[0].level },
      });
    });
  }, []);

  return (
    <div>
      {" "}
      {user.map((users, index) => (
        <div className="conlarge" key={index}>
          <div className="sidebar">
            <div className="logo-name">
              <Link to="/">
                <img
                  className="image"
                  src={unilorin}
                  alt="unilorin"
                  height="60"
                />
              </Link>
              <h4 className="name">Unilorin</h4>
              <h4 className="hostels">Hostels</h4>
            </div>
            <div className="sidecont">
              <div className="sidenav">
                <ul>
                  <Link to="/userhome">
                    <li>Home</li>
                  </Link>
                  <Link to="/manage">
                    <li>Manage Bedspace</li>
                  </Link>
                  <Link to="/update">
                    <li>Update Profile</li>
                  </Link>
                  <li>FAQs</li>
                </ul>
              </div>
              <div className="red">
                <Link to="/">
                  <button>Log out</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="profile">
            <div className="semi-nav">
              <ul>
                <li className="dsh">Dashboard/Overview</li>
                <li className="spec">
                  <img
                    src={users.profile}
                    className="reds"
                    alt="profile"
                    height="40"
                  />
                  <h4>{users.matricNumber}</h4>
                </li>
              </ul>
            </div>
            <div className="bordevvd">
              <div className="e">
                <h1>Edit Your Profile</h1>
                <h3>Update and Print Hostel Information</h3>
              </div>

              <div className="itcomes">
                <form onSubmit={handleSubmit}>
                  <div className="thepicture">
                    <img src={postData.profile || users.profile} alt="" />
                    <FileBase
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) => {
                        setPostData({ ...postData, profile: base64 });
                      }}
                    />
                    <Link to="/redirection">
                      <button>take picture</button>
                    </Link>
                  </div>
                  <div className="leftsideeee">
                    <label htmlFor="firstName">First name</label> <br />
                    <input
                      type="text"
                      disabled="true"
                      value={users.firstName}
                      onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="matricNumber">Matric Number</label> <br />
                    <input
                      type="text"
                      disabled="true"
                      value={users.matricNumber}
                      onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="faculty">Faculty</label> <br />
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
                    <br />
                    <label htmlFor="level">Level</label> <br />
                    <select
                      name="level"
                      id="level"
                      className="fm"
                      value={postData.level}
                      onChange={handleChange}
                      styles={{ border: "1px solid black" }}
                    >
                      <option value="100">100</option>
                      <option value="200">200</option>
                      <option value="300">300</option>
                      <option value="400">400</option>
                      <option value="500">500</option>
                      <option value="600">600</option>
                    </select>
                  </div>
                  <div className="rightsideeee">
                    <label htmlFor="lastName">Last name</label> <br />
                    <input
                      type="text"
                      disabled="true"
                      value={users.lastName}
                      onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="phoneNo">Phone number</label> <br />
                    <input
                      type="text"
                      def
                      value={users.phoneNo}
                      onChange={handleChange}
                    />
                    <br />
                    <br />
                    <label htmlFor="department">Department</label> <br />
                    <select
                      name="department"
                      id="department"
                      className="fm"
                      value={postData.departments}
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
                    <br />
                    <br />
                    <label htmlFor="password">Update password</label> <br />
                    <input type="password" placeholder="*********" />
                    <br />
                  </div>
                  <div className="u">
                    <button type="submit">Update Information</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EditProfile;
