import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  return (
    <div className="container">
      <div className="testimonials my-5">
        <div className="row mt-5">
          <Slider
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={1500}
            pauseOnFocus={false}
            pauseOnHover={false}
          >
            <div className="col-md-3">
              <div className="testimonial-item">
                <p>
                  <i className="fa-solid fa-quote-left quote"></i>&nbsp; In
                  e-tutoring, the scope for one-on-one interaction is much
                  higher. That is why we preferred this mode. We had to bring my
                  son up to speed in subjects like Physics, Chemistry, Biology,
                  and Maths and I must say we are happy with the progress so
                  far. &nbsp;
                  <i className="fa-solid fa-quote-right quote"></i>
                </p>
                <img src="https://i.ibb.co/1L6vWwz/jhanker-mahbub.png" alt="" />
                <h3>Jhanker Mahbub</h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="testimonial-item">
                <p>
                  <i className="fa-solid fa-quote-left quote"></i>&nbsp; My son
                  takes Arabic lessons and his teacher is amazing! She has
                  taught him right of sounds and vocabulary. Grateful to Ms
                  Tamador and Etutorhome.his is all the more important because
                  my son plays golf at the under-18 level in the UAE.he has
                  taught him right of sounds and vocabulary. &nbsp;
                  <i className="fa-solid fa-quote-right quote"></i>
                </p>
                <img src="https://i.ibb.co/K5rZqKR/alom-vai.jpg" alt="" />
                <h3>Md. Alam Hossain</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="testimonial-item">
                <p>
                  <i className="fa-solid fa-quote-left quote"></i>&nbsp; My son
                  takes Arabic lessons and his teacher is amazing! She has
                  taught him right of sounds and vocabulary. Grateful to Ms
                  Tamador and Etutorhome.his is all the more important because
                  my son plays golf at the under-18 level in the UAE. he has
                  taught him right of sounds and vocabulary. &nbsp;
                  <i className="fa-solid fa-quote-right quote"></i>
                </p>
                <img src="https://i.ibb.co/xGhB4gP/unnamed.jpg" alt="" />
                <h3>Md. Nafis</h3>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testimonial-item">
                <p>
                  <i className="fa-solid fa-quote-left quote"></i>&nbsp; Online
                  tutoring offers a lot of flexibility. This is all the more
                  important because my son plays golf at the under-18 level in
                  the UAE. So, flexibility in the terms of tuition timings is
                  important. Given the option, we would have even gone for home
                  schooling for Aryaan. &nbsp;
                  <i className="fa-solid fa-quote-right quote"></i>
                </p>
                <img src="https://i.ibb.co/GdbZCBL/ahsan250x250.jpg" alt="" />
                <h3>Ahsanul Haque Romman</h3>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Review;
