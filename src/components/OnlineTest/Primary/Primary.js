import React from "react";
import { useNavigate } from "react-router-dom";

const Primary = () => {
  const navigate = useNavigate();
  return (
    <div className="container my-4">
      <h1 className="text-center fw-bold">Select Your test Subject</h1>
      <div className="row subject-container text-center my-5">
        <div className="col-md-3 mb-3">
          <div
            onClick={() => {
              navigate(`quiz/${1}`);
            }}
            className="card class-card-custom"
          >
            <div className="card-body">
              <h4 className="fw-bold">One</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div
            onClick={() => {
              navigate(`quiz/${2}`);
            }}
            className="card class-card-custom"
          >
            <div className="card-body">
              <h4 className="fw-bold">Two</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div
            onClick={() => {
              navigate(`quiz/${3}`);
            }}
            className="card class-card-custom"
          >
            <div className="card-body">
              <h4 className="fw-bold">Three</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div
            onClick={() => {
              navigate(`quiz/${4}`);
            }}
            className="card class-card-custom"
          >
            <div className="card-body">
              <h4 className="fw-bold">Four</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div
            onClick={() => {
              navigate(`quiz/${5}`);
            }}
            className="card class-card-custom"
          >
            <div className="card-body">
              <h4 className="fw-bold">Five</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Primary;
