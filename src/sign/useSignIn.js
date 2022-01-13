import { useState, useEffect } from "react";
import Cookies from "js-cookie"
import axios from "axios";
const useSignIn = (validate) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    console.log(values);
    e.preventDefault();
    axios.post("http://localhost:8000/signin", values).then((response) => {
      console.log(response);
      Cookies.set('token', response.data.token, {expires: 1/24})
      Cookies.set('matric', response.data.matric, {expires: 1/24})
      window.location = "/user";
    });
    setErrors(validate(values));
    // setIsSubmitting(true);
  };
  return { handleChange, values, handleSubmit, errors };
};

export default useSignIn;
