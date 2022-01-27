import axios from "axios";
import { useState } from "react";

const UseEdit = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    matricNumber: "",
    phone: "",
    faculty: "",
    department: "",
    level: "",
    password: "",
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

    axios.post("http://localhost:8000/editProfile", values).then((response) => {
      console.log(response);
    });
    // setIsSubmitting(true);
  };
  return { handleChange, values, handleSubmit, errors };
};
export default UseEdit;
