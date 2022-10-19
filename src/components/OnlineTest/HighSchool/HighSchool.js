import React from "react";
import { useNavigate } from "react-router-dom";

const HighSchool = () => {
  const navigate = useNavigate();

  return (
    <div className="container my-5">
      <h1 className="text-center fw-bold">Select Your test Subject</h1>
      <div className="row subject-container text-center my-5">
        <div className="col-md-3 mb-3">
          <div
            onClick={() => {
              navigate(`quiz/${6}`);
            }}
            className="card class-card-custom"
          >
            <div className="card-body">
              <h4 className="fw-bold">Six</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div
            onClick={() => {
              navigate(`quiz/${7}`);
            }}
            className="card class-card-custom"
          >
            <div className="card-body">
              <h4 className="fw-bold">Seven</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div
            onClick={() => {
              navigate(`quiz/${8}`);
            }}
            className="card class-card-custom"
          >
            <div className="card-body">
              <h4 className="fw-bold">Eight</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div
            onClick={() => {
              navigate(`quiz/${9}`);
            }}
            className="card class-card-custom"
          >
            <div className="card-body">
              <h4 className="fw-bold">Nine</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div
            onClick={() => {
              navigate(`quiz/${10}`);
            }}
            className="card class-card-custom"
          >
            <div className="card-body">
              <h4 className="fw-bold">Ten</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighSchool;
