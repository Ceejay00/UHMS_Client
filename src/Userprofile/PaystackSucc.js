import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { Router, useSearchParams, useNavigate } from "react-router-dom";

const PaystackSucc = (props) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const bookingId = Cookies.get("bookingId");
  //   const router = Router();
  useEffect(async () => {
    await axios.post(`http://localhost:8000/getBooking`, { bookingId });
    const trxref = searchParams.get("trxref");
    const reference = searchParams.get("reference");
    if (!trxref || !reference) {
      navigate("/book");
    } else {
      await axios
        .post(
          `http://localhost:8000/paystack/callback?reference=${reference}`,
          { bookingId }
        )
        .then(() => {
          //   navigate("/manage");
        })
        .catch((error) => {
          console.log(error);
          //   navigate("/book");
        });
    }
  });
  return <div>Omo you have paid oooo</div>;
};

export default PaystackSucc;
