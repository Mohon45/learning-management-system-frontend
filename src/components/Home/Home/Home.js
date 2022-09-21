import React from "react";
import About from "../About/About";
import Catagories from "../Catagories/Catagories";
import TopBanner from "../TopBanner/TopBanner";
import WWO from "../WWO/WWO";

const Home = () => {
  return (
    <div className="home">
      <TopBanner />
      <Catagories />
      <About />
      <WWO />
    </div>
  );
};

export default Home;
