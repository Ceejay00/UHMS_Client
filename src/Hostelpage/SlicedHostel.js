
import React, { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../Homepage/homepage.css"

const SlicedHostel = () => {
    const [cardInfo, setCardInfo] = useState([]);
    const [hostel, setHostel] = useState([]);
    const submit = (id) =>{
      // console.log(id)
      // const {id} = useparams()
      window.location=`/each?id=${id}`
      // window.location =  '/each'
  }
  
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
  
    useEffect(() => {
      axios
        .get("http://localhost:8000/getHostel")
        .then((response) => {
          console.log(response);
          setCardInfo(response.data);
          // window.location = "/formal";
          setHostel(cardInfo.slice(0, 6));
        })
        .catch((err) => {
          console.log(err);
        });
    });
    return (
        <div>
        <div className="cards">
          {hostel.map((card, i) => (
            <div className="card-container" onClick={() => submit(card._id)} key={card._id}>
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
    )
}

export default SlicedHostel
