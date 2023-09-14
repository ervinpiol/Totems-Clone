import React from "react";
import { motion } from "framer-motion";

import Img from "../../assets/Home/our-supports/img1.webp";

const OurSupport = () => {
  return (
    <div className="xl:mx-12">
      <div className="flex flex-col-reverse gap-10 px-5 mt-40 xs:px-8 md:px-10 xl:gap-48 xl:px-20 md:flex-row md:items-end lg:items-start md:gap-20 lg:gap-0">
        <div className="xl:w-[820px] flex flex-col xl:items-end gap-10 xl:mt-[300px] md:w-1/2">
          <motion.p
            className="text-[28px] md:text-[40px] xl:w-[600px] leading-snug font-light text-center md:text-end"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Our approach involves taking the{" "}
            <span className="text-LightRed">most discreet</span>,{" "}
            <span className="text-LightRed">concise</span> and{" "}
            <span className="text-LightRed">refined</span> path.
          </motion.p>
          <motion.p
            className="md:text-lg xl:w-[510px] text-Gray md:text-end"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Our support do not interfere with the piece, they remain separate
            and differentiated. Assuming its presence, we allow each support to
            remain as simple and elegant as possible, without disturbing the
            interpretation of the object or the artwork.
          </motion.p>
        </div>
        <div
          data-scroll
          data-scroll-speed="-0.04"
          className="xl:w-[512px] md:w-[250px] xl:h-[1224px]"
        >
          <img src={Img} alt="Img" className="w-full h-full" />
        </div>
      </div>
      <div className="md:w-4/5 xl:w-3/4 pb-14 md:pb-20 pt-[88px] md:pt-40 bg-LightBlue rounded-tr-[40px] md:rounded-tr-[80px] mt-16 xl:mt-[-400px] z-[1] relative mr-5 xl:mr-0">
        <div className="md:w-3/4 xl:w-[62%] pl-5 pr-12 md:pr-0 md:pl-24 xl:pl-48">
          <p className="md:text-lg text-LightRed">Events and Collections</p>
          <p className="text-2xl xl:text-[28px] mt-5 font-light">
            We have a particular experience in projects with complex planning.
            We are able to collaborate our team with discretion in a short time
            period, around collections requiring high levels of security and
            offering a reduced availabilities in mean of time and space.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurSupport;
