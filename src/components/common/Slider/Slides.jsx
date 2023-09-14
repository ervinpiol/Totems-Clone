import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Slides = ({ data, setIndex, delayTime, index }) => {
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const slide = () => {
      setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };

    timeoutRef.current = setTimeout(slide, delayTime);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [index]);

  return (
    <div className="flex overflow-hidden">
      {data.map((item, i) => (
        <motion.div
          key={i}
          className="flex items-start w-full gap-10 lg:max-w-[900px] shrink-0 transition-all duration-700 ease-in xl:pr-36 flex-col md:flex-row cursor-pointer group"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setIndex(i)}
        >
          <div className="hidden md:block">
            <button
              className={`w-[78px] xl:w-32 h-[78px] xl:h-32 text-4xl xl:text-6xl rounded-full font-light ${
                index === i
                  ? "bg-LightRed text-black"
                  : "border text-Gray border-Gray group-hover:bg-Gray group-hover:text-black"
              }`}
            >
              {i + 1}.
            </button>
          </div>
          <div>
            <h2
              className={`text-[28px] md:text-[40px] leading-snug font-light ${
                index === i ? "text-white" : "text-Gray"
              }`}
            >
              {item.h2Text}
            </h2>
            <p
              className={`mt-8 md:text-lg max-w-[560px] ${
                index === i ? "text-LightRed" : "text-Gray"
              }`}
            >
              {item.pText}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Slides;
