import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../Assets/img/404.jpg";

const NotFound = () => {
  return (
    <div className="notfound">
      <img className="w-100" src={notfound} alt="" />
      <Link className="back-link" to="/home">
        Back Home
      </Link>
    </div>
  );
};

export default NotFound;
