import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const Header = () => {
  const logo = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "+=1420px",
        end: "+=0px",
        scrub: true,
      },
    });

    timeline.to(logo.current, { opacity: 1, duration: 1, ease: "none" });
  });

  return (
    <div className="">
      <div className="fixed right-0 z-10 flex items-center justify-between w-full px-5 xs:px-8 md:px-10 lg:px-20 top-5 xs:top-8 xl:px-20 xxl:px-32 md:top-10 lg:top-14 xl:top-20">
        <a ref={logo} href="" className="w-12 opacity-0">
          <svg viewBox="0 0 48 40">
            <path
              d="M24 40a1.83 1.83 0 0 0 1.88-1.85v-7.21h20.25a1.83 1.83 0 0 0 1.19-.43l.15-.11.09-.14a1.76 1.76 0 0 0 .44-1.18V1.85a1.87 1.87 0 0 0-3.73 0v25.32H25.88V10.92a1.88 1.88 0 0 0-3.76 0v16.25H3.73V1.85A1.82 1.82 0 0 0 1.87 0 1.82 1.82 0 0 0 0 1.85v27.23a1.76 1.76 0 0 0 .44 1.18l.09.14.15.11a1.83 1.83 0 0 0 1.19.43h20.25v7.21A1.83 1.83 0 0 0 24 40Z"
              fill="#fbaa9f"
            ></path>
          </svg>
        </a>
        <motion.div
          className="flex items-center relative before:content-[''] before:block before:h-[1px] before:mr-6 before:w-12 before:md:w-[146px] before:bg-Gray text-Gray text-sm md:text-base"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <NavLink
            to="/"
            className="relative flex items-center after:block after:ml-2 after:content-['•'] after:text-3xl after:text-Gray hover:text-white transition-all duration-200 ease-in-out"
          >
            Index
          </NavLink>
          <NavLink
            to="process"
            className="ml-2 transition-all duration-200 ease-in-out hover:text-white"
          >
            Process
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
