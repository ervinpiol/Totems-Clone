import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Button = () => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonText = "Discover our process";

  const translate = {
    initial: {
      y: 0,
    },
    animate: (i) => ({
      y: isHovered ? "150%" : 0,
      transition: {
        duration: 0.3,
        ease: [0.76, 0, 0.24, 1],
        delay: isHovered ? i[0] : i[1],
      },
    }),
  };

  const splitLetters = () => {
    const letters = buttonText.split("").map((letter, index) => {
      return (
        <motion.span
          key={index}
          variants={translate}
          custom={[index * 0.009, (buttonText.length - index) * 0.006]}
          animate="animate"
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      );
    });

    return letters;
  };

  return (
    <Link to="/process">
      <motion.button
        className="relative px-5 py-3 mt-10 overflow-hidden font-medium text-black transition-all duration-500 ease-in-out bg-white rounded-full rounded-tr-none md:mt-20 xl:mt-32 hover:bg-LightRed group"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <p className="absolute bottom-full">{splitLetters()}</p>
        <motion.p
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: isHovered ? "160%" : 0,
            opacity: isHovered ? 0 : 1,
          }}
          transition={{ duration: 0.4 }}
        >
          Discover our process
        </motion.p>
      </motion.button>
    </Link>
  );
};

export default Button;
