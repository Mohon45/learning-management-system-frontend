import React from "react";

const Catagories = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-3 catagori-hover-effect">
          <a href="/find-teachers">
            <div
              className="catagori-icon-sec"
              style={{ backgroundColor: "#25316D" }}
            >
              <i className="fa-solid fa-chalkboard-user fa-4x p-auto"></i>
            </div>
            <h4 className="text-center mt-3 fw-bold">Online Tutoring</h4>
            <p className="text-center">Schedule a Free Trial</p>
          </a>
        </div>
        <div className="col-md-3 catagori-hover-effect">
          <a href="/online-test">
            <div
              className="catagori-icon-sec"
              style={{ backgroundColor: "#810955" }}
            >
              <i className="fa-solid fa-list-check fa-4x p-auto"></i>
            </div>
            <h4 className="text-center mt-3 fw-bold">
              Online Test preparation
            </h4>
            <p className="text-center">SCAT, CogAT, SSAT, AP, ISEE, SAT, etc</p>
          </a>
        </div>
        <div className="col-md-3 catagori-hover-effect">
          <a href="/notes">
            <div
              className="catagori-icon-sec"
              style={{ backgroundColor: "#25316D" }}
            >
              <i className="fa-solid fa-book fa-4x ps-5"></i>
            </div>
            <h4 className="text-center mt-3 fw-bold">Notes</h4>
            <p className="text-center">All subjects of all classes</p>
          </a>
        </div>
        <div className="col-md-3 catagori-hover-effect">
          <a href="/worksheet">
            <div
              className="catagori-icon-sec"
              style={{ backgroundColor: "#810955" }}
            >
              <i className="fa-solid fa-rectangle-list fa-4x "></i>
            </div>
            <h4 className="text-center mt-3 fw-bold">Free Worksheets</h4>
            <p className="text-center">Download and Practice</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
