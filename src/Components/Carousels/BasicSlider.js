import React from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

export default function BasicSlider({ data = [] }) {
  return (
    <div class="basic-slider">
      <Slider {...settings}>
        {data.map((d, i) => (
          <div id={i} key={i} className="slider">
            <div
              className="slider-image"
              style={{ backgroundImage: `url('${d.offerImage}')` }}
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
