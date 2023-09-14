import React from "react";
import ProcessIntro from "../components/Process/ProcessIntro";
import Solutions from "../components/Process/Solutions";
import Hero from "../components/Process/Hero";
import Slider from "../components/common/Slider/Slider";
import Grid from "../components/Process/Grid";
import Requirements from "../components/Process/Requirements";

const Process = () => {
  return (
    <>
      <ProcessIntro />
      <Solutions />
      <Hero />
      <Slider />
      <Grid />
      <Requirements />
    </>
  );
};

export default Process;
