import React from "react";
import ComponentRoute from "../Routes/ComponentRoute";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <ComponentRoute />
      <Footer />
    </div>
  );
};

export default Layout;
