import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import HeroImg from "../../assets/Home/hero-img.webp";
import VerticalLogo from "../common/VerticalLogo";

const Intro = () => {
  const phrase = "Studio creating custom-made stands and supports.";

  const splitWords = () => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      body.push(
        <motion.p
          key={word + "_" + i}
          className="mr-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 * i }}
        >
          {word}
        </motion.p>
      );
    });
    return body;
  };

  return (
    <div className="px-5 xs:px-8 lg:px-20">
      <div className="relative flex flex-col items-start justify-between h-screen pt-5 lg:justify-start xl:justify-between md:gap-14 lg:gap-32 xl:mx-0 md:flex-row xl:h-auto xs:pt-8 lg:pt-14 xl:pt-20 xxl:mx-12">
        <div className="z-50">
          <VerticalLogo isHome />
        </div>
        <div
          data-scroll
          data-scroll-speed="0.1"
          className="w-[120%] sm:w-[700px] md:w-[550px] xl:w-[95vh] absolute -left-24 xs:-left-28 md:left-auto md:right-[10%] lg:static xl:absolute xxl:static top-20 max-h-full"
          /* className="w-[120%] sm:w-[700px] md:w-[550px] xl:w-[50vw] xxl:w-[95vh] absolute -left-24 xs:-left-28 md:left-auto md:right-[10%] lg:static xl:absolute xxl:static top-20 max-h-full xl:-translate-x-1/2 xl:left-0 xl:right-auto" */
        >
          <motion.img
            src={HeroImg}
            alt=""
            initial={{ opacity: 0, y: -20, scale: 1.1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="w-full h-full"
          />
        </div>
        <div
          data-scroll
          data-scroll-speed="0.1"
          className="xl:h-[600px] flex flex-col items-center gap-6 md:gap-10 xl:gap-0 md:items-end justify-between xl:mt-[200px] absolute xl:static bottom-[15%] xs:bottom-[10%] lg:bottom-[16%] inset-x-0"
        >
          <div className="text-2xl xl:text-[28px] w-full sm:w-3/4 md:w-1/2 xl:w-[300px] font-light leading-9 flex flex-wrap xl:justify-end justify-center md:justify-end md:ml-auto">
            {splitWords()}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link
              smooth={true}
              duration={700}
              to="discover"
              className="flex items-center gap-3 cursor-pointer xl:text-lg text-Gray hover:text-white group"
            >
              Discover
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                className="overflow-visible"
              >
                <path
                  d="M12.9706 1.62744L8.02083 6.57718C7.6303 6.96771 6.99714 6.96771 6.60661 6.57718L1.65687 1.62744"
                  stroke="#8485A3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className=" group-hover:stroke-white group-hover:translate-y-[2px] transition-all ease-in-out duration-200"
                ></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
