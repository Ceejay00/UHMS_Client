import React, { useState } from "react";
// import { CarouselData } from "./CarouselData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./carousel.css";

const Carousel = ({ slides, CarouselData }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {CarouselData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={`./images/${slide.image}`}
                alt="travel image"
                className="image-alt"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
