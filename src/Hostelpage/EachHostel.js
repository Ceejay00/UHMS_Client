import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../carousel/Carousel";
import { CarouselData } from "../carousel/CarouselData";
import NavbarTwo from "../navbars/NavbarTwo";
import "./each.css";
import SlicedHostel from "./SlicedHostel";

const EachHostel = () => {
  const [cardInfo, setCardInfo] = useState([]);
  const [hostel, setHostel] = useState();
  const submit = (id) => {
    // console.log(id)
    // const {id} = useparams()
    window.location = `/each?id=${id}`;
  };
  const UseLocation = useLocation();
  useEffect(() => {
    const search = UseLocation.search;
    const id = new URLSearchParams(search).get("id");
    console.log("this is yeahhh" + id);
    const card = {
      card: id,
    };

    axios
      .get(`http://localhost:8000/getOneHostel?card=${id}`)
      .then((response) => {
        console.log(response.data);
        setCardInfo(response.data);
        console.log("cardInfo-----", response.data);
        // window.location = "/formal";
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <NavbarTwo />
      <Carousel
        slides={CarouselData}
        CarouselData={
          cardInfo && cardInfo.length > 0
            ? cardInfo[0]?.imagesUrl.map((image) => {
                return { image: image };
              })
            : [{ image: "" }]
        }
      />

      <div className="weird">
        {cardInfo.map((card) => (
          <div className="thebiggest" key={card._id}>
            {/* <div className='carousel' >
                            <img
                src={`./images/${card.imagesUrl}` }
                alt=""
                // src={card.image}
                style={{ height: "250px", width: "320px" }}
              />
                </div> */}
            <div className="text-box">
              <div className="textsss">
                <h2>Hostel Name: {card.name} </h2>
                <h2>Hostel Gender: {card.gender} Hostel</h2>
                <h2>Available Bedspaces: {card.bedSpaces} </h2>
              </div>
              <div className="priceee">
                <h1>NGN {card.fourRoom}</h1>
              </div>
            </div>

            <div className="descriptionnn">
              <h1>Hostel Description</h1>
              <p> {card.description}</p>
            </div>
            <div className="moreHostels">
              <div>
                <h1>More Hostels</h1>
              </div>
              <div className="sliced">
                {" "}
                <SlicedHostel />{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EachHostel;
