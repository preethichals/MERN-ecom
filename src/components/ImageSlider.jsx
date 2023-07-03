import React from "react";
import Carousel from "react-bootstrap/Carousel";

function ImageSlider() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item >
          <img
            className="w-100 m-auto p-2 "
            style={{
              height: "auto",
            }}
            src={require("./../Images/sale_banner.jpg")}
            alt=""
          />
         
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="w-100 m-auto p-2 "
            style={{
              height: "auto",
            }}
            src={require("./../Images/sale_banner copy.jpg")}
            alt=""
          />
          
        </Carousel.Item>
        
      </Carousel>
    </>
  );
}

export default ImageSlider;
