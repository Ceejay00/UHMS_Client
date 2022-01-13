import { useState, useEffect } from "react";
import axios from "axios";
const useForm = (validate) => {
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    matricNumber: "",
    faculty: "",
    level: "",
    department: "",
    password: "",
    confirmPass: "",
  });
  const [errors, setErrors] = useState({});
  //   const [isSubmitting, setIsSubmitting] = useState(false);
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
    let validationErrors = validate(values);

    setErrors(validationErrors);

    if (Object.entries(validationErrors).length > 0) {
      return;
    }

    axios
      .post("http://localhost:8000/signup", values, setIsLoading)
      .then((response) => {
        console.log(response);
        window.location = "/formal";
      });
    // setIsSubmitting(true);
  };
  return { handleChange, values, handleSubmit, errors, isLoading };
};
export default useForm;
