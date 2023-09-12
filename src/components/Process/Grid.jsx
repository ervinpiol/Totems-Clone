import React from "react";
import { motion } from "framer-motion";

import Img1 from "../../assets/Process/grid/img1.webp";
import Img2 from "../../assets/Process/grid/img2.webp";
import Img3 from "../../assets/Process/grid/img3.webp";
import Img4 from "../../assets/Process/grid/img4.webp";

const Grid = () => {
  return (
    <div className="px-5 xs:px-8 md:px-10 lg:px-20 xl:mx-12">
      <div className="flex gap-4 xl:h-[820px] overflow-hidden flex-col lg:flex-row">
        <div className="flex flex-col gap-4 lg:w-2/3 md:flex-row">
          <div className="rounded-tl-[40px] overflow-hidden bg-LightBlue w-full">
            <motion.img
              src={Img1}
              alt=""
              className="w-full h-[380px] lg:h-full object-cover"
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.7 } }}
            />
          </div>
          <div className="w-full overflow-hidden bg-LightBlue">
            <motion.img
              src={Img2}
              alt=""
              className="w-full h-[380px] lg:h-full object-cover"
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.7 } }}
            />
          </div>
        </div>
        <div className="flex flex-col h-full gap-4 lg:w-1/3 md:flex-row lg:flex-col md:w-full">
          <div className="w-full overflow-hidden bg-LightBlue">
            <motion.img
              src={Img3}
              alt=""
              className="w-full h-[380px] xl:h-full object-cover"
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.7 } }}
            />
          </div>
          <div className="w-full overflow-hidden bg-LightBlue">
            <motion.img
              src={Img4}
              alt=""
              className="w-full h-[380px] xl:h-full object-cover"
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.7 } }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
