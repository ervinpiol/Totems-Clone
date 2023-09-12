import React, { useRef } from "react";
import Logo from "../components/common/Logo";

const Footer = () => {
  const container = useRef(null);

  return (
    <div ref={container} className="pb-8 mt-8 xl:pb-12 xl:mt-36">
      <Logo container={container} />
      <div className="flex flex-col-reverse items-center justify-between px-5 text-sm xs:px-8 md:px-10 xl:pr-32 xl:ml-12 xl:px-20 text-Gray md:flex-row gap-14 xl:gap-0">
        <div className="flex justify-between w-full md:justify-normal xl:w-auto md:gap-14 xl:gap-20">
          <p>Website made by</p>
          <div className="flex gap-3">
            <a
              href="https://flayks.com"
              target="_blank"
              className="transition-all duration-200 ease-in-out border-b border-opacity-25 border-Gray hover:border-white hover:text-white"
            >
              Flayks
            </a>
            <a
              href="https://shelbykay.dev"
              target="_blank"
              className="transition-all duration-200 ease-in-out border-b border-opacity-25 border-Gray hover:border-white hover:text-white"
            >
              Shelby kay
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between w-full xl:w-auto md:justify-end md:gap-14 gap-9">
          <div className="flex gap-3 text-xs">
            <button className="rounded-full hover:border border-Gray w-7 h-7">
              FR
            </button>
            <button className="border rounded-full border-Gray w-7 h-7">
              EN
            </button>
          </div>
          <p>© TOTEMS – 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
