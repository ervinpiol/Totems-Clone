import React from "react";
import { motion } from "framer-motion";

import HeroImg from "../../assets/Process/hero-img.webp";

const Hero = () => {
  return (
    <div className="px-5 xs:px-8 lg:px-20 xl:mx-12 h-3/4 md:h-[470px] lg:h-[650px] lg:w-full xl:w-auto xl:h-auto overflow-hidden">
      <div className="overflow-hidden">
        <motion.img
          src={HeroImg}
          alt=""
          className="rounded-br-[40px] md:rounded-br-[80px] h-full object-cover object-center w-full"
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        />
      </div>
    </div>
  );
};

export default Hero;
