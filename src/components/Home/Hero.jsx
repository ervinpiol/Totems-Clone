import React from "react";
import Img1 from "../../assets/Home/hero-img/img1.webp";
import Img2 from "../../assets/Home/hero-img/img2.webp";
import Img3 from "../../assets/Home/hero-img/img3.webp";
import Img4 from "../../assets/Home/hero-img/img4.webp";
import Img5 from "../../assets/Home/hero-img/img5.webp";

const Hero = () => {
  return (
    <div className="px-5 overflow-hidden xs:px-8 md:px-10 xl:px-20 xl:mx-12">
      <div className="flex flex-col items-start justify-between md:flex-row md:items-center lg:items-start">
        <div
          data-scroll
          data-scroll-speed="0.04"
          className="xl:w-[717px] w-[88%] md:w-[336px]"
        >
          <img src={Img1} alt="" className="object-cover" />
        </div>
        <div
          data-scroll
          data-scroll-speed="0.04"
          className="xl:w-[410px] w-2/3 mt-[-52px] ml-auto xl:ml-0 xl:mt-0 md:w-[192px] z-[2] relative"
        >
          <img src={Img2} alt="" className="object-cover" />
        </div>
      </div>
      <div className="xl:w-[1270px] md:w-4/5 w-full xl:mt-[-120px] md:mt-[-120px] md:ml-auto md:mr-10 -mt-6">
        <img src={Img3} alt="" className="z-[1] relative object-cover" />
      </div>
      <div
        data-scroll
        data-scroll-speed="0.04"
        className="xl:w-[717px] md:w-[336px] w-10/12 md:mt-[-184px] md:ml-10 xl:ml-28 z-[2] relative"
      >
        <img src={Img4} alt="" className="md:rounded-tr-[80px] object-cover" />
      </div>
      <div className="xl:w-[615px] md:w-[365px] w-4/5 mt-20 mr-[-8vw] xl:mr-0 ml-auto md:-mt-0 xl:mt-[-200px]">
        <img src={Img5} alt="" className="object-cover" />
      </div>
    </div>
  );
};

export default Hero;
