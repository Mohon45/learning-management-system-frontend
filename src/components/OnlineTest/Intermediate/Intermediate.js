import React from "react";
import { useNavigate } from "react-router-dom";

const Intermediate = () => {
  const navigate = useNavigate();

  return (
    <div className="container my-4">
      <h1 className="text-center fw-bold">Select Your test Subject</h1>
      <div className="row subject-container text-center my-5">
        <div className="col-md-3 mb-3">
          <div
            onClick={() => {
              navigate(`quiz/${11}`);
            }}
            className="card class-card-custom"
          >
            <div className="card-body">
              <h4 className="fw-bold">Inter 1st Year</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div
            onClick={() => {
              navigate(`quiz/${12}`);
            }}
            className="card class-card-custom"
          >
            <div className="card-body">
              <h4 className="fw-bold">Inter 2nd Year</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intermediate;
