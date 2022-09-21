import React from "react";
import wwo1 from "../../../Assets/img/wwo/wedoicon1.png";
import wwo2 from "../../../Assets/img/wwo/wedoicon2.png";
import wwo3 from "../../../Assets/img/wwo/wedoicon3.png";

const WWO = () => {
  return (
    <div className="container pb-5">
      <div>
        <h1 className="fw-bold text-center">
          What We <span style={{ color: "#32be8f" }}>Offer</span>
        </h1>
        <div className="row mt-4">
          <div className="col-md-4">
            <div
              className="card wwo-card-custom"
              style={{
                width: "22rem",
                height: "450px",
                backgroundColor: "#25316d",
              }}
            >
              <div className="card-body text-center">
                <img src={wwo1} alt="" />
                <h2 className="fw-bold mt-3">Expert Teachers</h2>
                <hr className="wwo-custom-hr" />
                <p>
                  Our experienced teachers make every content interesting and
                  exciting so that young learners are self-motivated and eager
                  to develop enduring relationships with their tutors.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card wwo-card-custom"
              style={{
                width: "22rem",
                height: "450px",
                backgroundColor: " #008000",
              }}
            >
              <div className="card-body text-center">
                <img src={wwo2} alt="" />
                <h2 className="fw-bold mt-3">Interactive Sessions</h2>
                <hr className="wwo-custom-hr" />
                <p>
                  Our tutors are skilled academicians who are trained in the
                  online mode. Their sessions are interactive and benchmarked to
                  global best practices.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card wwo-card-custom"
              style={{
                width: "22rem",
                height: "450px",
                backgroundColor: "#810955",
              }}
            >
              <div className="card-body text-center">
                <img src={wwo3} alt="" />
                <h2 className="fw-bold mt-3">Learn From Home</h2>
                <hr className="wwo-custom-hr" />
                <p>
                  Our creative teaching and learning platform is designed to
                  make remote learning convenient, productive and safe so that
                  even the most vulnerable learner is able to make measurable
                  progress in attainment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WWO;
