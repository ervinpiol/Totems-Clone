import React, { useState } from "react";

import { sliderData } from "./sliderData";
import Button from "./Button";
import Timer from "./Timer";
import SliderNumber from "./SliderNumber";
import Slides from "./Slides";

const Slider = ({ isHome }) => {
  const [index, setIndex] = useState(0);
  const delay = 5000;

  return (
    <div className="xl:mr-auto xl:w-[94%] mt-16 mb-40 md:my-24 xl:my-[200px] overflow-hidden">
      <div className="px-5 xs:px-8 md:px-10 lg:px-20">
        <Timer index={index} delayTime={delay} />
        <SliderNumber data={sliderData} index={index} setIndex={setIndex} />
        <Slides
          data={sliderData}
          index={index}
          setIndex={setIndex}
          delayTime={delay}
        />
        {isHome && <Button />}
      </div>
    </div>
  );
};

export default Slider;
