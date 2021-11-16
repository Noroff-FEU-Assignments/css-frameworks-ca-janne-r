import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../images/carousel/carousel-1.jpg";
import image2 from "../images/carousel/carousel-2.jpg";
import image3 from "../images/carousel/carousel-3.jpg";

function ImageCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

  );

}

export default ImageCarousel;
