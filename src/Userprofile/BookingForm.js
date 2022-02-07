// import "../Userprofile/userprofile.css";
// import unilorin from "../images/unilorin.png";
// import elipse from "../images/Ellipse.png";
// import empty from "../images/empty.png";
// import { useEffect } from "react";
// import Cookies from "js-cookie";
// import axios from "axios";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// const BookingForm = () => {
// const [book, setBook] = useState([]);
// useEffect(() => {
//   // var token = Cookies.get("token");
//   // const values = {
//   //   token: token,
//   // };
//   axios.post("http://localhost:8000/book").then((response) => {
//     console.log(response);
//     setBook(response.data);
//   });
// }, []);

// return (
//   <div>
//     {book.map((books, index) => (
//       <div className="conlarge" key={index}>
//         <div className="sidebar">
//           <div className="logo-name">
//             <img
//               className="image"
//               src={unilorin}
//               alt="unilorin"
//               height="60"
//             />
//             <h4 className="name">Unilorin</h4>
//             <h4 className="hostels">Hostels</h4>
//           </div>
//           <div className="sidecont">
//             <div className="sidenav">
//               <ul>
//                 <Link to="/userhome">
//                   <li>Home</li>
//                 </Link>
//                 <Link to="/manage">
//                   <li>Manage Bedspace</li>
//                 </Link>
//                 <Link to="/update">
//                   <li>Update Profile</li>
//                 </Link>
//                 <li>FAQs</li>
//               </ul>
//             </div>
//             <div className="red">
//               <Link to="/">
//                 <button>Log out</button>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="profile">
//           <div className="semi-nav">
//             <ul>
//               <li className="dsh">Manage Bedspace</li>
//               <li className="spec">
//                 <img src={elipse} alt="profile" height="40" />
//                 <h4>{books.matricNumber}</h4>
//               </li>
//             </ul>
//           </div>

//           <div className="borderve">
//             <div className="uh">
//               <div className="Manage">
//                 <h1>Manage Information</h1>
//                 <h3>Update and Print Hostel Information</h3>
//               </div>
//               <div className="theses">
//                 <div className="rightsidee">
//                   <div className="formlook">
//                     <span>{books.firstName}</span>
//                   </div>
//                   <div className="formlook">
//                     <span>{books.matricNumber}</span>
//                   </div>
//                   <div className="formlook">
//                     <span>{books.matricNumber}</span>
//                   </div>
//                 </div>
//                 <div className="leftsidee">
//                   <div className="formlook">
//                     <span>{books.lastName}</span>
//                   </div>
//                   <div className="formlook">
//                     <span>{books.phoneNumber}</span>
//                   </div>
//                   <div className="formlook">
//                     <span>{books.matricNumber}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// }

import axios from "axios";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import UseBook from "./UseBook";
import "./book.css";
import payStackPublicKey from "../config";
import { PaystackButton } from "react-paystack";
import { Link } from "react-router-dom";
import unilorin from "../images/unilorin.png";

const BookingForm = () => {
  const { handleChange, bookval, handleSubmit } = UseBook();
  const [user, setUser] = useState([]);
  const publicKey = payStackPublicKey;
  const amount = 1000000; // Remember, set in kobo!
  const [email, setEmail] = useState("test@mail.com");
  const [name, setName] = useState("olawale");
  const [phone, setPhone] = useState("082929282828");
  const [paystackUrl, setPaystackUrl] = useState("");
  // var matric = Cookies.get('token')

  // const bookReservation = async () => {
  //   await axios
  //     .post("http://localhost:8000/paystack/pay", {
  //       email: user[0].email,
  //       amount: 5000,
  //       token: Cookies.get("token"),
  //     })
  //     .then((response) => {
  //       setPaystackUrl(response.data.url);
  //       console.log(response);
  //     });
  // };
  const [cardInfo, setCardInfo] = useState([]);
  const [selectedHostels, setSelectedHostels] = useState([]);
  const [selectedHostel, setSelectedHostel] = useState({});
  const [priceSelector, setPriceSelector] = useState(0);

  const onHostelSelected = (e) => {
    const { value } = e.target;
    setSelectedHostel(selectedHostels[value]);
  };

  const onRoomTypeChange = (e) => {
    const { value } = e.target;
    let price = selectedHostel[value];
    setPriceSelector(price);
  };

  const onGenderChanged = (e) => {
    const { value } = e.target;
    let _selectedHostels = cardInfo.filter((hostel) => hostel.gender == value);
    setSelectedHostels(_selectedHostels);
  };

  const getAllHostels = () => {
    axios
      .get("http://localhost:8000/getHostel")
      .then((response) => {
        // console.log(response);
        setCardInfo(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllHostels();
  });

  const paystackButtonProps = {
    email: user.email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Book",
    onSuccess: (e) => {
      console.log(e);
      // call your backend API to book, wile including the paystack transaction reference
      axios
        .post("http://localhost:8000/book", {
          paystackReference: e.data.transactionreference,
          ...bookval,
        })
        .then((response) => {
          console.log(response);
        });
      alert("Thanks for doing business with us! Come back soon!!");
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

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
  // useEffect(() => {
  //   var token = Cookies.get("token");
  //   const values = {
  //     token: token,
  //   };
  //   axios.post("http://localhost:8000/getUser", values).then((response) => {
  //     console.log(response);
  //     setUser(response.data[0]);
  //     const e = { target: { name: "userId", value: response.data[0]._id } };
  //     handleChange(e);
  //   });
  // }, []);
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
          <div className="bordevvd">
            <div className="e">
              <h1>Book Hostel</h1>
              <h3>Fill in the following details</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="plm">
                <div className="column3">
                  <label htmlFor="firstName" className="lb3">
                    First name
                  </label>
                  <br></br>
                  <input
                    id="firstName"
                    type="text"
                    className="cl3
                  "
                    name="firstName"
                    placeholder="Enter your First name"
                    disabled={true}
                    value={users.firstName}
                    onChange={handleChange}
                  ></input>
                  <br></br>
                  <label htmlFor="matricNumber" className="lb3">
                    Matric Number
                  </label>
                  <br></br>
                  <input
                    id="matricNumber"
                    type="text"
                    disabled={true}
                    className="cl3"
                    name="matricNumber"
                    placeholder="Enter your Matric No"
                    value={users.matricNumber}
                    onChange={handleChange}
                  ></input>
                  <br></br>
                  <label htmlFor="gender">Gender</label> <br />
                  <select
                    name="gender"
                    id="gender"
                    className="cm3
                  "
                    onChange={onGenderChanged}
                    styles={{ border: "1px solid black" }}
                  >
                    <option value={undefined}></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <br></br>
                  <label>Room Type</label>
                  <select
                    name="prices"
                    id="prices"
                    className="cm3
                  "
                    onChange={onRoomTypeChange}
                    styles={{ border: "1px solid black" }}
                  >
                    <option value={undefined}></option>

                    <option value="twoRoom">Room of two</option>
                    <option value="fourRoom">Room of four</option>
                  </select>
                </div>
                <div className="column4">
                  <label htmlFor="lastName">Last name</label>
                  <br></br>
                  <input
                    id="lastName"
                    type="text"
                    className="cl3
                  "
                    disabled={true}
                    name="lastName"
                    placeholder="Enter your last name"
                    value={users.lastName}
                    onChange={handleChange}
                  ></input>
                  <br></br>

                  <label htmlFor="state">State of Origin</label>
                  <br></br>
                  <input
                    id="state"
                    type="text"
                    className="cl3
                  "
                    name="state"
                    placeholder="Enter your State"
                    onChange={handleChange}
                  ></input>
                  <br></br>
                  <label>Hostels</label>
                  <br></br>
                  <select
                    name="hostel"
                    id="hostel"
                    className="cm3
                  "
                    onChange={onHostelSelected}
                    styles={{ border: "1px solid black" }}
                  >
                    <option value={undefined}></option>

                    {selectedHostels.map((hostel, index) => (
                      <option key={hostel.name + "-" + index} value={index}>
                        {hostel.name}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="lastName"></label>
                  <br></br>
                  <input
                    id="lastName"
                    type="text"
                    className="cl3
                  "
                    name="lastName"
                    onChange={handleChange}
                    style={{ border: "none" }}
                  ></input>
                  <br></br>
                </div>
              </div>
              <div className="x">
                <h2 style={{ color: "black" }}>
                  Hostel Fees:NGN {priceSelector}{" "}
                </h2>
              </div>
              <div className="fev"></div>
              <div className="jk">
                <button type="submit">Proceed to Payment</button>
              </div>
            </form>
          </div>
          {/* <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            type="text"
            className=""
            name="firstName"
            placeholder="Enter your First name"
            value={bookval.firstName}
            onChange={handleChange}
          ></input>

          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            type="text"
            className=""
            name="lastName"
            placeholder="Enter your last name"
            value={bookval.lastName}
            onChange={handleChange}
          ></input>
          <label htmlFor="matricNumber">Matric number</label>
          <input
            id="matricNumber"
            type="text"
            className=""
            name="matricNumber"
            placeholder="Enter your  matricNumber"
            value={bookval.matricNumber}
            onChange={handleChange}
          ></input>
          <label htmlFor="gender">gender</label>
          <input
            id="gender"
            type="text"
            className=""
            name="gender"
            placeholder="Enter your gender"
            value={bookval.gender}
            onChange={handleChange}
          ></input>

          <label htmlFor="hostelName">hostelName</label>
          <input
            id="hostelName"
            type="text"
            className=""
            name="hostelName"
            placeholder="Enter your hostelName"
            value={bookval.hostelName}
            onChange={handleChange}
          ></input>
          <label htmlFor="roomType">roomType</label>
          <input
            id="roomType"
            type="text"
            className=""
            name="roomType"
            placeholder="Enter your roomType"
            value={bookval.roomType}
            onChange={handleChange}
          ></input>
          <input
            id="userId"
            type="text"
            className=""
            name="userId"
            value={user._id}
            style={{ display: "none" }}
          ></input>
        </form>
        <PaystackButton {...paystackButtonProps} /> */}
        </div>
      ))}
    </div>
  );
};

export default BookingForm;
