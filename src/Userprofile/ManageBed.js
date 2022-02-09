import React from "react";

import "../Userprofile/userprofile.css";
import "../Userprofile/manage.css";
import unilorin from "../images/unilorin.png";
import elipse from "../images/Ellipse.png";
import empty from "../images/empty.png";
import { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const ManageBed = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    var token = Cookies.get("token");
    const values = {
      token: token,
    };
    axios.post("http://localhost:8000/getUser", values).then((response) => {
      console.log(response);
      setUser(response.data);
    });
  }, []);
  return (
    <div>
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
                  <Link
                    className={({ isActive }) =>
                      isActive
                        ? "bg-green-500 font-bold"
                        : "bg-red-500 font-thin"
                    }
                    to="/userhome"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <li>Home</li>
                  </Link>
                  <Link
                    className={({ isActive }) =>
                      isActive
                        ? "bg-green-500 font-bold"
                        : "bg-red-500 font-thin"
                    }
                    to="/manage"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <li>Manage Bedspace</li>
                  </Link>
                  <Link
                    className={({ isActive }) =>
                      isActive
                        ? "bg-green-500 font-bold"
                        : "bg-red-500 font-thin"
                    }
                    to="/update"
                    style={{ textDecoration: "none", color: "white" }}
                  >
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
                <li className="dsh">Manage Bedspace</li>
                <li className="spec">
                  <img src={elipse} alt="profile" height="40" />
                  <h4>{users.matricNumber}</h4>
                </li>
              </ul>
            </div>

            <div className="borderve">
              <div className="uh">
                <div className="Manage">
                  <h1>Manage Information</h1>
                  <h3>Update and Print Hostel Information</h3>
                </div>
                {/* <div className="theses">
                  <div className="rightsidee">
                    <div className="formlook">
                      <label htmlFor="">Hostel naem</label>
                      <span>{users.firstName}</span>
                    </div>
                    <div className="formlook">
                      <span>{users.matricNumber}</span>
                    </div>
                    <div className="formlook">
                      <span>{users.matricNumber}</span>
                    </div>
                  </div>
                  <div className="leftsidee">
                    <div className="formlook">
                      <span>{users.lastName}</span>
                    </div>
                    <div className="formlook">
                      <span>{users.phoneNumber}</span>
                    </div>
                    <div className="formlook">
                      <span>{users.matricNumber}</span>
                    </div>
                  </div>
                </div> */}
                <div className="ter">
                  <div className="rights">
                    <label htmlFor="HostelName">Hostel Name</label>
                    <br />
                    <input className="ehen" type="text"></input>
                    <br />
                    <label htmlFor="matricNo">Matric Number</label>
                    <br />
                    <input className="ehen" type="text"></input>
                    <br />
                    <label htmlFor="duration">Duration</label>
                    <br />
                    <input className="ehen" type="text"></input>
                  </div>
                  <div className="lefts">
                    <label htmlFor="room">Room Number</label>
                    <br />
                    <input className="ehen" type="text"></input>
                    <br />
                    <label htmlFor="roomt">Room type</label>
                    <br />
                    <input className="ehen" type="text"></input>
                    <br />
                    <label htmlFor="duration">Session</label>
                    <br />
                    <input className="ehen" type="text"></input>
                  </div>
                </div>
                <div className="labutn">
                  <button>Print Hostel Information</button>
                  <button>Confirm Change</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageBed;
