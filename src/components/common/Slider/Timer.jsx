/* import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Timer = ({ index, delayTime }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [index]);

  return (
    <div className="flex items-center justify-between mb-[200px]">
      <p className="text-lg text-LightRed">Your project steps</p>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="-rotate-90"
      >
        <motion.circle
          key={key}
          cx="12"
          cy="12"
          r="10"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeDasharray="64 64"
          strokeDashoffset={64}
          animate={{
            strokeDashoffset: 0,
          }}
          transition={{
            duration: delayTime / 1000,
            repeat: Infinity,
          }}
        />
        <circle
          opacity="0.4"
          cx="12"
          cy="12"
          r="10"
          stroke="#8485A3"
          strokeWidth="4"
          pathLength="1"
        />
      </svg>
    </div>
  );
};

export default Timer; */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Timer = ({ index, delayTime }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [index]);

  return (
    <div className="flex items-center justify-between mb-[72px] xl:mb-[200px]">
      <p className="md:text-lg text-LightRed">Your project steps</p>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="-rotate-90"
      >
        <motion.circle
          key={key}
          cx="12"
          cy="12"
          r="10"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeDasharray="64 64"
          strokeDashoffset={64}
          animate={{
            strokeDashoffset: 0,
          }}
          transition={{
            duration: delayTime / 1000,
            repeat: Infinity,
          }}
        />
        <circle
          opacity="0.4"
          cx="12"
          cy="12"
          r="10"
          stroke="#8485A3"
          strokeWidth="4"
          pathLength="1"
        />
      </svg>
    </div>
  );
};

export default Timer;
