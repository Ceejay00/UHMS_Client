import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../Homepage/homepage.css";

const Hostels = () => {
  const [cardInfo, setCardInfo] = useState([]);
  const [hostel, setHostel] = useState([]);
  const submit = (id) => {
    // console.log(id)
    // const {id} = useparams()
    window.location = `/each?id=${id}`;
    // window.location =  '/each'
  };

  // const cardInfo = [
  //   {
  //     image: "https://i.ibb.co/1vC3JbF/image-1.png",
  //     title: "Lebron",
  //     text: "yo",
  //     price: "140,000",
  //   },
  //   {
  //     image: "https://i.ibb.co/1vC3JbF/image-1.png",
  //     title: "Lebron",
  //     text: "yo",
  //     price: "140,000",
  //   },
  //   {
  //     image: "https://i.ibb.co/1vC3JbF/image-1.png",
  //     title: "Monkeyd",
  //     text: "oe",
  //     price: "160,000",
  //   },
  //   {
  //     image: "https://i.ibb.co/1vC3JbF/image-1.png",
  //     title: "cheee",
  //     text: "gg",
  //   },
  //   {
  //     image: "https://i.ibb.co/1vC3JbF/image-1.png",
  //     title: "cheee",
  //     text: "gg",
  //     price: "110,000",
  //   },
  //   {
  //     image: "https://i.ibb.co/1vC3JbF/image-1.png",
  //     title: "cheee",
  //     text: "gg",
  //     price: "130,000",
  //   },
  //   {
  //     image: "https://i.ibb.co/1vC3JbF/image-1.png",
  //     title: "cheee",
  //     text: "gg",
  //     price: "120,000",
  //   },
  //   {
  //     image: "https://i.ibb.co/1vC3JbF/image-1.png",
  //     title: "cheee",
  //     text: "gg",
  //     price: "110,000",
  //   },
  // ];

  const getAllHostels = () => {
    axios
      .get("http://localhost:8000/getHostel")
      .then((response) => {
        console.log(response);
        // setCardInfo(response.data);
        // setHostel(cardInfo.slice(0, 8));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllHostels();
  });

  return (
    <div>
      <div className="cards">
        {hostel.map((card, i) => (
          <div
            className="card-container"
            onClick={() => submit(card._id)}
            key={card._id}
          >
            <div className="imagecont">
              <img
                src={`./images/${card.imagesUrl}`}
                alt=""
                // src={card.image}
                style={{ height: "250px", width: "320px" }}
              />
            </div>
            <div className="textcont">
              <div className="Headercont">{card.name}</div>
              <div className="bodycont">{card.gender} Hostel</div>
              <div className="pricecont">{card.fourRoom}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hostels;
{
  /* <Card style={{ width: "23rem" }} key={index}>
<Card.Img variant="top" src="holder.js/100px180" src={card.image} />
<Card.Body>
  <Card.Title>{card.title}</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  {card.text}
</Card.Body>
</Card> */
}
