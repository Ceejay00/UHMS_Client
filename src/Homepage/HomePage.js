import React from "react";
import NavbarTwo from "../navbars/NavbarTwo";
import finegirl from "../images/finegirl.png";
import "../Homepage/homepage.css";
import bent from "../images/bent.png";
import icon from "../images/Discount.svg";
import Hostels from "./Hostels";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import gen from "../images/gen.png";
import gym from "../images/gym.png";
import library from "../images/library.png";
import bed from "../images/bed.png";

const HomePage = () => {
  var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundColor: "red",
  };
  const submit = () => {
    // console.log(id)
    // const {id} = useparams()
    // window.location=`/each?id=${id}`
    window.location = "each";
  };
  return (
    <div className="background8">
      <NavbarTwo />
      <div className="afternav">
        <section className="text-smll-btn">
          <div className="text">
            <h1 className="one">Get Easy and Affordable</h1>
            <h1 className="two">Private Hostels in </h1>
            <h1 className="three"> Unilorin.</h1>
          </div>
          <div className="smll">
            <h5>
              Provides an avenue to book private hostels to ease the stress
              student and solve student challages on campus
            </h5>
          </div>
          <div className="btn">
            <button onClick={() => submit()}>Book Reservation</button>
          </div>
        </section>
        <section className="finegirl">
          <img
            className="image"
            src={finegirl}
            alt="unilorin"
            height="494"
            width="475"
          />
        </section>
      </div>

      <div className="secondcontainer">
        <div className="heading">
          <h1>Book a hostel today!</h1>
          <h4>Book a private school hostel today!</h4>
        </div>
        <div className="main-cnts">
          <section className="imgn">
            <img className="image" src={bent} alt="unilorin" height="440px" />
          </section>
          <section className="lists">
            <h2>Why book a private hostel?</h2>
            <ul>
              <li>
                <img className="imag" src={icon} alt="unilorin" height="" />{" "}
                Book a hostel today!
              </li>
              <li>
                <img className="imag" src={icon} alt="unilorin" height="" />{" "}
                Book a hostel today!
              </li>
              <li>
                <img className="imag" src={icon} alt="unilorin" height="" />{" "}
                Book a hostel today!
              </li>
              <li>
                <img className="imag" src={icon} alt="unilorin" height="" />{" "}
                Book a hostel today!
              </li>
              <li>
                <img className="imag" src={icon} alt="unilorin" height="" />{" "}
                Book a hostel today!
              </li>
              <li>
                <img className="imag" src={icon} alt="unilorin" height="" />{" "}
                Book a hostel today!
              </li>
            </ul>
          </section>
        </div>
      </div>
      {/* <div className="thirdcontainer">
        <div className="heading">
          <h1>Our Hostels</h1>
        </div>
        <div>
          <Hostels />
        </div>
        <Link to="/hostels">
          <div className="view">
            <button>View more</button>
          </div>
        </Link>
      </div> */}
      <div className="lastpart">
        <div className="lastpartheader">
          <h2>View Hostels Images</h2>
          <h4>Our various Hostel Facilities</h4>
        </div>
        <div className="lastpartimages">
          <img className="image" src={gym} alt="unilorin" />
          <img className="image" src={gen} alt="unilorin" />
          <img className="image" src={bed} alt="unilorin" />
          <img className="image" src={library} alt="unilorin" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
