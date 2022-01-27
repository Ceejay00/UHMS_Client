import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
const redirection = () => {
  const webRef = useRef(null);
  const showImage = () => {
    webRef.current.getScreenshot();
    const [img, setImage] = useState({
      image: "",
    });
    setImage({ ...img, image: "" });
    // power = webRef.current.getScreenshot();
  };

  return (
    <div>
      <h1>Thank yo for signing in</h1>
      <Webcam ref={webRef} />
      <br></br>
      <button
        onClick={() => {
          showImage();
        }}
      >
        Take Picture
      </button>

      <br></br>
      <img src={Image} />
    </div>
  );
};
export default redirection;
