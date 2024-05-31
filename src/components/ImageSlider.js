import styles from "./ImageSlider.module.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images, titles }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className={styles.imageSlider}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageBox}>
            <img src={image} alt={`Slide ${index}`} />
            <div className={styles.titles}>{titles[index]}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
