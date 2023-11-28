import React from "react";
import Slider from "react-slick";
import photo1 from "../../images/grocery-banner-2.jpeg";
import photo2 from "../../images/grocery-banner.png";
import photo3 from "../../images/slider-2.jpeg";

export default function Mainslider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <div className="my-3 container-fluid">
        <Slider {...settings}>
          <img src={photo1} className="w-100" />
          <img src={photo2}  className="w-100"/>
          <img src={photo3}  className="w-100" />
        </Slider>
      </div>
    </>
  );
}
