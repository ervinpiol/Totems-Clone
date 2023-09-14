import React from "react";
import { motion } from "framer-motion";

import Img1 from "../../assets/Home/specialized/img1.webp";
import Img2 from "../../assets/Home/specialized/img2.webp";

const Specialized = () => {
  return (
    <div
      id="discover"
      className="px-5 mt-20 xs:px-8 md:px-10 xl:px-20 xl:mx-12"
    >
      <h2 className="text-4xl md:text-[56px] xl:text-[56px] xl:w-3/5 xl:pl-28 leading-snug z-[1] font-light relative">
        We are{" "}
        <span className="text-LightRed">specialized in the showcasing</span> of
        high jewellery collections from great luxury houses, and the{" "}
        <span className="text-LightRed">basing of art objects</span> for museums
        as part of permanent or temporary exhibitions.
      </h2>
      <div
        data-scroll
        data-scroll-speed="-0.03"
        className="w-11/12 md:w-96 xl:w-[923px] ml-auto mt-[-72px] xl:mt-[-108px] h-[100vw] md:h-auto xl:h-[70vh] -z-10"
      >
        <img
          src={Img1}
          alt="Img1"
          className="object-cover h-full md:h-auto xl:h-full"
        />
      </div>
      <div
        data-scroll
        data-scroll-speed="0.1"
        className="w-11/12 md:w-64 xl:w-[615px] -mt-10 md:-mt-60 xs:-mt-32 xl:mt-[-280px] md:ml-36 xl:ml-80 h-[100vw] md:h-auto xl:h-[440px]"
      >
        <img
          src={Img2}
          alt="Img2"
          className="object-cover h-full md:h-auto xl:h-full"
        />
      </div>
      <motion.p
        className="xl:w-[450px] ml-12 mr-5 xl:ml-auto xl:mr-40 text-Gray md:text-lg mt-28 xl:mt-0 md:w-72 md:mt-40 md:mr-0 md:ml-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Our mission is to design and produce custom-made supports, the role of
        which is to ensure the security, visibility and conservation of the
        pieces, in a context defined by our client.
      </motion.p>
    </div>
  );
};

export default Specialized;
