import React from "react";
import "../Userprofile/userprofile.css";
import unilorin from "../images/unilorin.png";
import elipse from "../images/Ellipse.png";
import empty from "../images/empty.png";
import { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserProfileHome = () => {
  const [user, setUser] = useState([]);
  const [paystackUrl, setPaystackUrl] = useState("");
  const [paidBook, setPaidBook] = useState("");
  // var matric = Cookies.get('token')

  const bookReservation = async () => {
    await axios
      .post("http://localhost:8000/paystack/pay", {
        email: user[0].email,
        amount: 5000,
        token: Cookies.get("token"),
      })
      .then((response) => {
        setPaystackUrl(response.data.url);
        console.log(response);
      });
  };
  const getPaidBooking = async () => {
    var token = Cookies.get("token");
    const paidBook = {
      token: token,
    };
    await axios
      .post("http://localhost:8000/getBooking", paidBook)
      .then((response) => {
        console.log(response);
        setPaidBook(response.data);
      });
  };

  useEffect(() => {
    var token = Cookies.get("token");
    const values = {
      token: token,
    };

    axios.post("http://localhost:8000/getUser", values).then((response) => {
      console.log(response);
      setUser(response.data[0]);
      getPaidBooking();
    });
  }, []);

  return (
    <div>
      <div className="conlarge">
        <div className="sidebar">
          <div className="logos-name">
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
                    isActive ? "bg-green-500 font-bold" : "bg-red-500 font-thin"
                  }
                  to="/userhome"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Home</li>
                </Link>
                <Link
                  className={({ isActive }) =>
                    isActive ? "bg-green-500 font-bold" : "bg-red-500 font-thin"
                  }
                  to="/manage"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Manage Bedspace</li>
                </Link>
                <Link
                  className={({ isActive }) =>
                    isActive ? "bg-green-500 font-bold" : "bg-red-500 font-thin"
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
              <li className="dsh">Dashboard/Overview</li>
              <li className="spec">
                <Link to="/update">
                  <img
                    src={user.profile}
                    className="reds"
                    alt="profile"
                    height="40"
                  />
                </Link>
                <h4>{user.matricNumber}</h4>
              </li>
            </ul>
          </div>
          <div className="user-stat">
            {paystackUrl && (
              <iframe width={600} height={500} src={paystackUrl}></iframe>
            )}
            <div className="user">
              <h1>Welcome</h1>
              <h2>
                {user.firstName} {user.lastName}
              </h2>
            </div>
            <div className="stat">
              <h5>Student Status</h5>
              <button>Not Allocated</button>
            </div>
          </div>
          <div className="borderfive">
            {paidBook._id ? (
              <div className="weid">
                <div className="yi">
                  <h1>Allocation Details</h1>
                </div>
                <div className="wod">
                  <h2>Hostel Nmae : {paidBook.hostelName}</h2>
                </div>
              </div>
            ) : (
              <div className="five">
                <div className="threeimg">
                  <img src={empty} alt="empty" />
                </div>
                <div className="threetxts">
                  <h4>Empty</h4>
                  <h6>You are yet to be allocated to a hostel</h6>
                </div>
              </div>
            )}
          </div>
          <div className="book-reservation">
            {/* <button onClick={bookReservation}>Book Reservation</button> */}
            <Link to="/book">
              <button>Book Reservation</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileHome;
