import React from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  // const [authenticate, setAuthenticate] = useState(false);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  if (userInfo?.user) {
    return <Navigate to="/home" replace />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default RequireAuth;
