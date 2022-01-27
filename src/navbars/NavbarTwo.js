import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import unilorin from "../images/unilorin.png";
const NavbarTwo = () => {
  const navStyle = {
    color: "white",
  };
  return (
    <div>
      <div className="navbartwo">
        <Link to="/">
          <div className="logo-name">
            <img className="image" src={unilorin} alt="unilorin" height="60" />
            <h4 className="name">Unilorin</h4>
            <h4 className="hostels">Hostels</h4>
          </div>
        </Link>
        <div className="navlinks">
          <ul>
            <li>
              <Link style={navStyle} to="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link style={navStyle} to="/hostels">
                <p> About Hostels</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="Acom">
          <Link to="/form">
            <button>Get Accomodation</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NavbarTwo;
