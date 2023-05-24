import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import partner1 from "../../../Assets/img/partner/ict-devision.png";
import partner2 from "../../../Assets/img/partner/partner-2.png";
import partner3 from "../../../Assets/img/partner/partner-3.png";
import partner4 from "../../../Assets/img/partner/partner-4.png";
import partner5 from "../../../Assets/img/partner/partner-5.png";
import partner6 from "../../../Assets/img/partner/partner-6.png";
import partner7 from "../../../Assets/img/partner/partner-7.png";
import partner8 from "../../../Assets/img/partner/partner-8.jpeg";

const Partner = () => {
  return (
    <div className="container mb-5">
      <h1 className="text-center my-5 fw-bold ">
        Our Brand <span style={{ color: "#32be8f" }}>Partners</span>
      </h1>
      <Slider
        slidesToShow={4}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={1500}
        pauseOnFocus={false}
        pauseOnHover={false}
      >
        <img className="pratner-img" src={partner1} alt="" />
        <img className="pratner-img" src={partner2} alt="" />
        <img className="pratner-img" src={partner3} alt="" />
        <img className="pratner-img" src={partner4} alt="" />
        <img className="pratner-img" src={partner5} alt="" />
        <img className="pratner-img" src={partner6} alt="" />
      </Slider>
    </div>
  );
};

export default Partner;
