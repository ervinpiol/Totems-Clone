import React from "react";
import { motion } from "framer-motion";

import VerticalLogo from "../common/VerticalLogo";
import IntroImg from "../../assets/Process/intro-img.webp";

const Intro = () => {
  return (
    <div className="pt-5 xs:pt-8 lg:pt-14 xl:pt-20">
      <div className="relative flex flex-col-reverse justify-between px-5 xs:px-8 lg:pl-20 lg:flex-row md:pr-0 xl:mx-12">
        <div className="absolute top-0 lg:static">
          <VerticalLogo />
        </div>
        <div className="lg:w-[450px] xl:w-[550px] leading-snug mt-12 md:mt-64 xl:mt-[350px] md:pr-8">
          <motion.p
            className="mb-4 xl:mb-8 md:text-lg text-LightRed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Our process
          </motion.p>
          <motion.h3
            className="text-[28px] md:text-[40px] font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            From conception to installation, assembly and fine tuning, we can
            handle each phase of your project.
          </motion.h3>
        </div>
        <div className="mt-20 xl:mt-[270px] w-2/3 md:w-[400px] xl:w-[490px] overflow-hidden rounded-tl-[80px] h-[110vw] md:h-auto ml-auto -mr-5 md:mr-0 lg:ml-0 xl:h-[750px]">
          <motion.img
            src={IntroImg}
            alt="IntroImg"
            className="object-cover w-full h-full"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
