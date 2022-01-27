import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const UseBook = () => {
  const [bookval, setBookval] = useState({
    firstName: "",
    lastName: "",
    matricNumber: "",
    gender: "",
    hostelName: "",
    roomType: "",
    // period: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookval({
      ...bookval,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    console.log(bookval);
    e.preventDefault();

    var token = Cookies.get("token");
    // axios.post("http://localhost:8000/book", bookval).then((response) => {
    //   console.log(response);
    // });
    axios
      .post("http://localhost:8000/paystack/pay", {
        token,
        email: "test@mail.com",
        amount: 100000,
      })
      .then((response) => {
        console.log(response);
      });
    // setIsSubmitting(true);
  };
  return { handleChange, bookval, handleSubmit, errors };
};

export default UseBook;
