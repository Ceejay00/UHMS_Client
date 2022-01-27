import React from "react";
import "./App.css";
import Form from "./Signupform/Form";
import Redirection from "./redirection/redirection.js";
import HomePage from "./Homepage/HomePage";
import Formal from "./api/Formal";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import PostList from "./api/PostList";
import ScrollToTop from "./Signupform/scrolltoTop";
import Hostels from "./Homepage/Hostels";
import formal from "./api/Formal";
import SignIn from "./sign/SignIn";
import MaleHostelPage from "./Hostelpage/MaleHostelPage";
import MainHostelPage from "./Hostelpage/MainHostelPage";
import Faqs from "./FAQs/Faqs";
import UserProfile from "./Userprofile/UserProfile";
import EachHostel from "./Hostelpage/EachHostel";

import Carousel from "./carousel/Carousel";
import { CarouselData } from "./carousel/CarouselData";
import Footer from "./footer/Footer";
import UserProfileHome from "./Userprofile/UserProfileHome";
import ManageBed from "./Userprofile/ManageBed";
import EditProfile from "./Userprofile/EditProfile";
import BookingForm from "./Userprofile/BookingForm";

function App() {
  return (
    // <div>
    //   <Formal></Formal>
    // </div>
    // <div>
    //   <Hostels />

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="form" element={<Form />} />
        <Route path="formal" element={<SignIn />} />
        <Route path="redirection" element={<Redirection />} />
        <Route path="hostels" element={<MainHostelPage />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="user" element={<UserProfile />} />
        <Route path="each" element={<EachHostel />} />
        <Route path="userhome" element={<UserProfileHome />} />
        <Route path="manage" element={<ManageBed />} />
        <Route path="update" element={<EditProfile />} />
        <Route path="book" element={<BookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
