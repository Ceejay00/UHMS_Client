import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../Homepage/homepage.css";
const FemaleHostelPage = () => {
  const [cardInfo, setCardInfo] = useState([]);
  const submit = (id) =>{
    // console.log(id)
    // const {id} = useparams()
    window.location=`/each?id=${id}`
    // window.location =  '/each'
}
  useEffect(() => {
    axios
      .get("http://localhost:8000/getFemale")
      .then((response) => {
        console.log(response);
        setCardInfo(response.data);
        // window.location = "/formal";
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <div>
        <div>
          <div className="cards">
            {cardInfo.map((card) => (
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
                  <div className="bodycont">{card.gender}</div>
                  <div className="pricecont">{card.fourRoom}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FemaleHostelPage;
