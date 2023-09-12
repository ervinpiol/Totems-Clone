import React from "react";
import { requirementData } from "../../components/Process/requirementData";
import Img from "../../assets/Process/requirement/img.webp";

const Requirements = () => {
  return (
    <div className="px-5 xs:px-8 md:px-10 lg:px-20 mt-16 xl:mt-[200px] overflow-hidden ">
      <div className="xl:mx-28">
        <p className="mb-[72px] xl:text-lg xl:mb-20 text-LightRed">
          Requirements
        </p>
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-20 md:gap-y-32">
          {requirementData.map((data, i) => (
            <div key={i}>
              <h3 className="text-2xl lg:text-[28px] mb-6 font-light">
                {data.h3Text}
              </h3>
              <p className="leading-normal lg:text-lg text-Gray">
                {data.pText}
              </p>
            </div>
          ))}
        </div>
        <div
          data-scroll
          data-scroll-speed="-0.02"
          className="xl:w-[1345px] md:mx-auto mt-16 lg:mt-[200px] w-[120%] -mx-8 mb-16 md:w-11/12"
        >
          <img src={Img} alt="Img" />
        </div>
      </div>
    </div>
  );
};

export default Requirements;
