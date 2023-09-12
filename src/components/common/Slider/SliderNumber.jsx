import React from "react";

const SliderNumber = ({ data, index, setIndex }) => {
  return (
    <ul className="flex w-screen mb-10 md:hidden">
      {data.map((item, i) => (
        <li
          key={i}
          className={`w-[78px] xl:w-32 h-[78px] xl:h-32 text-4xl xl:text-6xl rounded-full font-light mr-4 shrink-0 transition-all duration-700 ease-in ${
            index === i
              ? "bg-LightRed text-black"
              : "border text-Gray border-Gray"
          }`}
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          onClick={() => setIndex(i)}
        >
          <button className="w-full h-full">{i + 1}</button>
        </li>
      ))}
    </ul>
  );
};

export default SliderNumber;
