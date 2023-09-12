import React from "react";

const Contact = () => {
  return (
    <div className="px-5 xl:ml-12 xl:px-0 xs:px-8 md:px-10 lg:px-20">
      <div className="xl:w-[1025px] md:text-lg xl:ml-48">
        <span className="text-LightRed">Contact</span>
        <a
          href="mailto:contact@totems-soclage.com"
          className="block mt-6 mb-6 text-5xl font-light xl:mt-8 md:text-[64px] xl:text-7xl md:w-96 hover:text-LightRed"
        >
          Send us an email
        </a>
        <div className="flex flex-col justify-between gap-10 md:flex-row xl:gap-0">
          <div>
            <p className="mb-5 text-Gray">give us a call</p>
            <a
              href="tel:+33662282551"
              className="text-2xl md:text-[40px] font-light hover:text-LightRed"
            >
              +33 6 62 28 25 51
            </a>
          </div>
          <div>
            <p className="pb-3 text-Gray">Our workshop</p>
            <a
              href="https://maps.google.com/maps?q=65 rue Paul Eluard, 93200 Saint-Denis, France"
              target="_blank"
              className="block w-40 md:w-64 hover:text-LightRed"
            >
              65 rue Paul Eluard, 93200 Saint-Denis, France
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
