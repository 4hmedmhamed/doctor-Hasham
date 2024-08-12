'use client'
import Image from "next/image";
import styles from "./page.module.css";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Slicks() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
     
    <div className="slider-container">
    <Slider {...settings}>
      <div className="up"  style={{backgroundColor:"red"}}>
        <h3>1</h3>
      </div>
     
      <div className="up">
        <h3>1</h3>
      </div>
     
      <div className="up">
        <h3>1</h3>
      </div>
     
      <div className="up">
        <h3>1</h3>
      </div>
     
      <div className="up">
        <h3>1</h3>
      </div>
     
      <div className="up">
        <h3>1</h3>
      </div>
     
      <div className="up">
        <h3>1</h3>
      </div>
     
    
      <div className="up">
        <h3>1</h3>
      </div>
     
    
    </Slider>
  </div>

  );
}
