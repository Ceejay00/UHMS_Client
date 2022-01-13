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

const UserProfile = () => {
  const [user, setUser] = useState([]);
  const [paystackUrl, setPaystackUrl] = useState("");
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
              <img
                className="image"
                src={unilorin}
                alt="unilorin"
                height="60"
              />
              <h4 className="name">Unilorin</h4>
              <h4 className="hostels">Hostels</h4>
            </div>
            <div className="sidecont">
              <div className="sidenav">
                <ul>
                  <li>Home</li>
                  <li>Manage Bedspace</li>
                  <li>Update Profile</li>
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
                  <img src={elipse} alt="profile" height="40" />
                  <h4>{users.matricNumber}</h4>
                </li>
              </ul>
            </div>
            <div className="user-stat">
              <div className="user">
                <h1>Welcome</h1>
                <h2>
                  {users.firstName} {users.lastName}
                </h2>
              </div>
              <div className="stat">
                <h5>Student Status</h5>
                <button>Not Allocated</button>
              </div>
            </div>
            <div className="borderfive">
              <div className="five">
                <div className="threeimg">
                  <img src={empty} alt="empty" />
                </div>
                <div className="threetxts">
                  <h4>Empty</h4>
                  <h6>You are yet to be allocated to a hostel</h6>
                </div>
              </div>
            </div>
            <div className="book-reservation">
              <button onClick={bookReservation}>Book Reservation</button>
            </div>
            {paystackUrl && (
              <iframe width={600} height={500} src={paystackUrl}></iframe>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
