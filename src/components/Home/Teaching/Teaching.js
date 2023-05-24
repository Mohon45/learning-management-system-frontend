import React from "react";
import instructor from "../.././../Assets/img/instructor.png";
import { useNavigate } from "react-router-dom";

const Teaching = () => {
  const navigate = useNavigate();
  return (
    <div className="container mt-3 mb-5">
      <div className="instructor">
        <div>
          <img src={instructor} alt="" />
        </div>
        <div className="instructor-desc">
          <h2 className="fw-bold">Become an instructor</h2>
          <p>
            Instructors from around the world teach millions of students on
            E-Tutors. We provide the tools and skills to teach what you love.
          </p>
          <button onClick={() => navigate("/find-teachers/level")}>
            Start teaching today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teaching;
