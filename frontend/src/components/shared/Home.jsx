import React from "react";
import Hero from "./Hero";
import CatogeryCarousal from "./CatogeryCarousal";
import LatestJobs from "./LatestJobs";

const Home = () => {
  return (
    <div>
      <Hero />
      <CatogeryCarousal />
      <LatestJobs />
    </div>
  );
};

export default Home;
