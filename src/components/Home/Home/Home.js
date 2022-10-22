import React from "react";
import About from "../About/About";
import Catagories from "../Catagories/Catagories";
import Count from "../Count/Count";
import Review from "../Review/Review";
import TopBanner from "../TopBanner/TopBanner";
import WWO from "../WWO/WWO";

const Home = () => {
  return (
    <div className="home">
      <TopBanner />
      <Catagories />
      <About />
      <Count />
      <WWO />
      <Review />
    </div>
  );
};

export default Home;
