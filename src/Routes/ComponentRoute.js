import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home/Home";
import NotFound from "../components/NotFound/NotFound";

const ComponentRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default ComponentRoute;
