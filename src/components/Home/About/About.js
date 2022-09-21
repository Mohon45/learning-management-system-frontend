import React from "react";
import aboutUs from "../../../Assets/img/about-us.jpg";

const About = () => {
  return (
    <div className="container pb-5">
      <div className="row">
        <div className="col-md-5">
          <img className="w-100 rounded-2 mt-3" src={aboutUs} alt="" />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6 about-desc">
          <h2>About Us</h2>
          <p>
            We are one of the pioneers in online tutoring and have been in the
            online tutoring space for over a decade. Our foundation is built on
            creativity, rigor, innovation, and high-quality instruction. We are
            confident that we are here to stay for a very long time. We are
            dedicated to offering result-oriented and outcome-based instructions
            and are now reorienting ourselves to meet the challenges of a modern
            twenty-first-century paradigm of educational excellence. With
            advancing, technology comes the pressure to change and to transform
            learning experiences without compromising on the heart and the soul
            of the children entrusted to our care. We are also deeply aware of
            the growing competition to provide better services. Therefore we are
            committed to a programmed transition that will see us as a global
            provider of personalized online teaching with the best minds we can
            find to join our expanding team of experts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
