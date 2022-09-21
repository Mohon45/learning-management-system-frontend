import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home/Home";
import NotFound from "../components/NotFound/NotFound";

const HomeRoute = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default HomeRoute;
