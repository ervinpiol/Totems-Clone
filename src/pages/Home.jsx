import React from "react";
import Intro from "../components/Home/Intro";
import Specialized from "../components/Home/Specialized";
import OurSupport from "../components/Home/OurSupport";
import Slider from "../components/common/Slider/Slider";
import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <>
      <Intro />
      <Specialized />
      <OurSupport />
      <Slider isHome />
      <Hero />
    </>
  );
};

export default Home;
