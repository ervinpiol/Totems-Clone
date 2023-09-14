import React from "react";
import Img from "../../assets/Process/solutions/img.webp";

const Solutions = () => {
  return (
    <div className="px-5 pt-24 pb-12 xs:px-8 lg:px-20 md:pt-40 xl:px-12 md:pb-32">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row xl:gap-60">
        <div
          data-scroll
          data-scroll-speed="-0.02"
          className="w-3/4 md:w-1/2 xl:w-[450px] md:h-[478px] lg:h-[600px] xl:h-[950px]"
        >
          <img src={Img} alt="Img" className="h-full mx-auto" />
        </div>
        <div className="md:w-1/2 xl:w-[508px] md:text-lg text-Gray">
          <p className="mb-6 xl:mb-7">
            Our solutions are handcrafted in high quality and durable materials
            that meet the requirements of preventive conservation. A particular
            attention is given to the integration of our supports and their
            simple handling.
          </p>
          <p>
            They are finished with modern techniques such as thermo-lacquering
            and thermoplastic coating. This makes them inert and chemically
            neutral, they are 100% recyclable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
