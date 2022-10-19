import React from "react";
import { Link } from "react-router-dom";

const TeachersLevel = () => {
  return (
    <div className="my-5">
      <h1 className="text-center fw-bold mb-5">Select Your Level</h1>
      <div className="row">
        <div className="col-md-4 level-section">
          <div className="card techers-level-card">
            <div className="card-body level-card-shadow-custom">
              <Link
                className="teachers-level-link"
                to="/find-teachers/level/primary"
              >
                <div className="level-card-body-custom">
                  <h1 className="fw-bold text-center">Primary School</h1>
                  <p className="text-center">class 1-5</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 level-section">
          <div className="card techers-level-card">
            <div className="card-body level-card-shadow-custom">
              <Link
                className="teachers-level-link"
                to="/find-teachers/level/high-school"
              >
                <div className="level-card-body-custom">
                  <h1 className="fw-bold text-center">High School</h1>
                  <p className="text-center">class 6-10</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 level-section">
          <div className="card techers-level-card">
            <div className="card-body level-card-shadow-custom">
              <Link
                className="teachers-level-link"
                to="/find-teachers/level/intermediate"
              >
                <div className="level-card-body-custom">
                  <h1 className="fw-bold text-center">Intermediate</h1>
                  <p className="text-center">Inter 1st and 2nd year</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 level-section mt-lg-5">
          <div className="card techers-level-card">
            <div className="card-body level-card-shadow-custom">
              <Link
                className="teachers-level-link"
                to="/find-teachers/level/university"
              >
                <div className="level-card-body-custom">
                  <h1 className="fw-bold text-center">University</h1>
                  <p className="text-center">honours</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersLevel;
