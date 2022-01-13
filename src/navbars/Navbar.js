import React from "react";
import "../Signupform/Form.css";
import unilorin from "../images/unilorin.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <div className="logo-name">
            <img className="image" src={unilorin} alt="unilorin" height="60" />
            <h4 className="name">Unilorin</h4>
            <h4 className="hostels">Hostels</h4>
          </div>
        </Link>
        <div className="Already">
          <p>Already a member?</p>
          <Link to="/formal">
            <button>Signin</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
