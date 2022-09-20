import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const [authenticate, setAuthenticate] = useState(false);
  if (authenticate === false) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default RequireAuth;
