/* import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const VerticalLogo = ({ isHome }) => {
  const imageContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: document.body,
      pin: imageContainer.current,
      start: "top",
      end: isHome ? "+=365px" : "+=220px",
    });
  }, []);

  return (
    <div ref={imageContainer} className="h-[50vh] xl:h-[800px] z-10">
      <motion.svg
        width="138"
        height="740"
        viewBox="0 0 138 740"
        fill="none"
        className="w-full h-full"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <path
          pathLength="1"
          d="M8.99996 278.076C8.99127 277.674 9.06561 277.274 9.21837 276.902C9.37113 276.53 9.59903 276.193 9.88791 275.912C10.1768 275.632 10.5205 275.413 10.8976 275.271C11.2747 275.128 11.6772 275.065 12.08 275.084C12.4823 275.065 12.8843 275.128 13.2609 275.271C13.6375 275.413 13.9806 275.632 14.2687 275.913C14.5568 276.194 14.7837 276.531 14.9354 276.903C15.087 277.275 15.16 277.674 15.15 278.076L15.15 348.228L69.15 348.228L69.15 302.471C69.1948 301.688 69.5383 300.951 70.11 300.413C70.6818 299.874 71.4385 299.574 72.225 299.574C73.0115 299.574 73.7682 299.874 74.3399 300.413C74.9117 300.951 75.2552 301.688 75.3 302.471L75.3 348.228L129.3 348.228L129.3 278.076C129.345 277.293 129.688 276.556 130.26 276.018C130.832 275.479 131.588 275.179 132.375 275.179C133.161 275.179 133.918 275.479 134.49 276.018C135.062 276.556 135.405 277.293 135.45 278.076L135.45 351.37C135.46 351.771 135.387 352.171 135.235 352.543C135.084 352.915 134.857 353.252 134.569 353.533C134.281 353.814 133.938 354.032 133.561 354.175C133.184 354.318 132.782 354.381 132.38 354.362L75.27 354.362L75.27 375.775C75.2252 376.558 74.8817 377.294 74.3099 377.833C73.7382 378.371 72.9815 378.671 72.195 378.671C71.4085 378.671 70.6518 378.371 70.08 377.833C69.5083 377.294 69.1648 376.558 69.12 375.775L69.12 354.362L12 354.362C11.2691 354.377 10.5578 354.125 9.99996 353.654L9.82996 353.524L9.76996 353.524L9.66996 353.394L9.66996 353.345C9.21988 352.814 8.96885 352.144 8.95996 351.45L8.95996 278.156M6.95996 278.156L6.95996 351.37C6.96843 352.535 7.38593 353.661 8.13996 354.551L8.40996 354.9C8.52734 355.024 8.66626 355.125 8.81996 355.2C9.71286 355.942 10.8373 356.351 12 356.356L67.12 356.356L67.12 375.775C67.178 377.078 67.7381 378.309 68.6834 379.211C69.6288 380.113 70.8867 380.616 72.195 380.616C73.5033 380.616 74.7611 380.113 75.7065 379.211C76.6519 378.309 77.2119 377.078 77.27 375.775L77.27 356.356L132.36 356.356C133.025 356.375 133.687 356.26 134.306 356.017C134.925 355.774 135.489 355.408 135.962 354.942C136.436 354.477 136.81 353.92 137.062 353.306C137.315 352.692 137.44 352.033 137.43 351.37L137.43 278.076C137.372 276.772 136.812 275.542 135.867 274.64C134.921 273.738 133.663 273.234 132.355 273.234C131.047 273.234 129.789 273.738 128.843 274.64C127.898 275.542 127.338 276.772 127.28 278.076L127.28 346.234L77.28 346.234L77.28 302.471C77.2219 301.167 76.6619 299.936 75.7165 299.034C74.7711 298.132 73.5133 297.629 72.205 297.629C70.8967 297.629 69.6388 298.132 68.6934 299.034C67.748 299.936 67.188 301.167 67.13 302.471L67.13 346.234L17.13 346.234L17.13 278.076C17.1397 277.412 17.0146 276.754 16.7624 276.14C16.5102 275.526 16.1359 274.969 15.6622 274.503C15.1885 274.037 14.6251 273.672 14.0061 273.429C13.387 273.186 12.725 273.07 12.06 273.089C11.3941 273.069 10.731 273.184 10.1108 273.426C9.49051 273.668 8.92595 274.034 8.45117 274.5C7.97639 274.966 7.60124 275.523 7.34838 276.138C7.09552 276.752 6.97019 277.412 6.97996 278.076L6.95996 278.156Z"
          fill="#FBAA9F"
        ></path>
        <path
          pathLength="1"
          d="M137.35 118.662C137.37 117.999 137.256 117.338 137.012 116.72C136.769 116.102 136.403 115.539 135.935 115.067C135.468 114.594 134.909 114.221 134.293 113.97C133.677 113.719 133.016 113.595 132.35 113.606L12 113.606C11.8174 113.611 11.6361 113.638 11.46 113.686C10.6316 113.547 9.78087 113.636 8.99999 113.945C8.14158 114.294 7.38834 114.859 6.81356 115.584C6.23878 116.309 5.86204 117.17 5.71999 118.084C5.58315 118.937 5.67898 119.812 5.99743 120.615C6.31588 121.419 6.84523 122.122 7.52999 122.652L77.85 178.133L7.53 233.635C6.84062 234.155 6.30545 234.851 5.98144 235.65C5.65744 236.449 5.55672 237.321 5.69 238.173C5.83444 239.092 6.21528 239.958 6.79537 240.687C7.37547 241.416 8.13502 241.983 9 242.332C9.78276 242.633 10.6314 242.722 11.46 242.591C11.6481 242.648 11.8434 242.678 12.04 242.681L132.42 242.681C133.727 242.623 134.961 242.064 135.866 241.121C136.77 240.178 137.275 238.924 137.275 237.619C137.275 236.314 136.77 235.06 135.866 234.117C134.961 233.174 133.727 232.616 132.42 232.558L25.25 232.558L94.18 178.143L25.25 123.729L132.36 123.729C133.026 123.739 133.686 123.614 134.302 123.361C134.918 123.109 135.476 122.735 135.943 122.261C136.409 121.787 136.774 121.224 137.016 120.606C137.258 119.987 137.372 119.326 137.35 118.662Z"
          fill="white"
        ></path>
        <path
          pathLength="1"
          d="M70.57 617.737C107.22 617.737 137 593.392 137 563.472C137 533.552 107.18 509.257 70.53 509.257C33.88 509.257 4.09997 533.622 4.09997 563.472C4.09997 593.322 33.92 617.737 70.57 617.737ZM14.4 563.472C14.4 539.237 39.6 519.53 70.57 519.53C101.54 519.53 126.74 539.277 126.74 563.472C126.74 587.668 101.55 607.425 70.57 607.425C39.59 607.425 14.4 587.747 14.4 563.472Z"
          fill="white"
        ></path>
        <path
          pathLength="1"
          d="M35.08 75.9966C50.76 73.0046 56.17 57.2767 60.94 43.3639C62.1 39.983 63.19 36.7815 64.39 33.8993C69.6 21.3728 76.14 14.2818 85 11.579C89.1718 10.3935 93.5431 10.0747 97.8434 10.6426C102.144 11.2104 106.281 12.6527 110 14.8801C114.139 17.3545 117.671 20.7196 120.339 24.7296C123.006 28.7397 124.743 33.2933 125.42 38.0581C126.347 44.2512 125.934 50.5704 124.209 56.5911C122.484 62.6119 119.487 68.1947 115.42 72.9647C114.808 73.6514 114.392 74.4895 114.216 75.3913C114.04 76.2932 114.111 77.2256 114.42 78.091C114.729 79.0051 115.268 79.8246 115.986 80.4708C116.704 81.117 117.577 81.5683 118.52 81.7812C118.8 81.8369 119.085 81.8636 119.37 81.8609C120.042 81.8499 120.703 81.6914 121.306 81.3966C121.909 81.1018 122.44 80.6781 122.86 80.1555C136.2 64.8265 140.11 43.6432 132.86 26.2098C125.77 9.25517 108.23 -1.45614 90.21 0.179485C67.68 2.17415 57.96 21.0237 50.8 41.0701C50.43 42.0674 50.07 43.1645 49.7 44.2416C47.32 50.8439 44.75 58.3339 39.4 62.8119C34.05 67.2899 25.48 67.3098 19.63 62.9914C14.74 59.401 11.5 53.3572 10.51 45.9769C9.30998 37.0608 11.63 27.3767 16.43 21.303C16.8829 20.7183 17.2148 20.0496 17.4064 19.3358C17.5979 18.622 17.6453 17.8774 17.5457 17.1452C17.4462 16.413 17.2017 15.7079 16.8264 15.0707C16.4512 14.4336 15.9527 13.8773 15.36 13.434C14.9015 13.0434 14.3665 12.7523 13.789 12.5793C13.2115 12.4063 12.6042 12.3553 12.0058 12.4294C11.4074 12.5036 10.8311 12.7012 10.3136 13.0098C9.79603 13.3185 9.34866 13.7313 8.99998 14.2219C0.129975 25.4619 -2.40003 41.7483 2.54998 55.7109C7.75998 70.5312 20.85 78.6794 35.08 75.9966Z"
          fill="white"
        ></path>
        <path
          pathLength="1"
          d="M133 680.589L17.12 680.589L17.12 635.28L17.12 635.071C16.9505 634.226 16.5644 633.439 15.9994 632.787C15.4344 632.136 14.7096 631.641 13.8959 631.352C13.0821 631.062 12.207 630.988 11.356 631.137C10.505 631.285 9.70707 631.651 9.03999 632.198C8.51225 632.657 8.08133 633.217 7.77231 633.843C7.46329 634.47 7.28234 635.152 7.23999 635.849L7.23999 735.013C7.23999 736.336 7.76677 737.604 8.70446 738.539C9.64214 739.475 10.9139 740 12.24 740C12.7308 740 13.2179 739.916 13.68 739.751C14.6983 739.446 15.5895 738.818 16.2191 737.964C16.8486 737.109 17.1824 736.074 17.17 735.013L17.17 690.482L133 690.482C134.326 690.482 135.598 689.957 136.536 689.022C137.473 688.087 138 686.818 138 685.496C138.001 685.006 137.916 684.52 137.75 684.06C137.441 683.047 136.811 682.161 135.955 681.535C135.098 680.91 134.062 680.578 133 680.589Z"
          fill="white"
        ></path>
        <path
          pathLength="1"
          d="M133 436.552L17.12 436.552L17.12 391.203L17.12 390.994C16.925 390.057 16.4641 389.196 15.7921 388.514C15.1201 387.831 14.2654 387.356 13.33 387.144C12.5863 386.968 11.8118 386.966 11.0674 387.139C10.3229 387.313 9.62895 387.656 9.03999 388.141C8.5117 388.598 8.08029 389.155 7.77116 389.78C7.46203 390.405 7.28143 391.086 7.23999 391.782L7.23999 491.016C7.23999 492.339 7.76677 493.607 8.70446 494.542C9.64214 495.477 10.9139 496.003 12.24 496.003C12.7309 496.004 13.2181 495.919 13.68 495.754C14.6946 495.453 15.5845 494.833 16.217 493.986C16.8495 493.14 17.1908 492.112 17.19 491.056L17.19 446.485L133 446.485C134.326 446.485 135.598 445.96 136.536 445.025C137.473 444.09 138 442.821 138 441.499C138.001 441.012 137.916 440.53 137.75 440.072C137.45 439.05 136.824 438.154 135.967 437.518C135.109 436.883 134.068 436.544 133 436.552Z"
          fill="white"
        ></path>
      </motion.svg>
    </div>
  );
};

export default VerticalLogo;*/
/* import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const VerticalLogo = ({ isHome }) => {
  const imageContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: document.body,
      pin: imageContainer.current,
      start: "top",
      end: isHome ? "+=365px" : "+=220px",
    });
  }, []);

  return (
    <div
      ref={imageContainer}
      className="h-[50vh] md:h-screen lg:h-[700px] z-10"
    >
      <motion.svg
        width="138"
        height="740"
        viewBox="0 0 138 740"
        fill="none"
        className="w-full h-screen"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <path
          pathLength="1"
          d="M8.99996 278.076C8.99127 277.674 9.06561 277.274 9.21837 276.902C9.37113 276.53 9.59903 276.193 9.88791 275.912C10.1768 275.632 10.5205 275.413 10.8976 275.271C11.2747 275.128 11.6772 275.065 12.08 275.084C12.4823 275.065 12.8843 275.128 13.2609 275.271C13.6375 275.413 13.9806 275.632 14.2687 275.913C14.5568 276.194 14.7837 276.531 14.9354 276.903C15.087 277.275 15.16 277.674 15.15 278.076L15.15 348.228L69.15 348.228L69.15 302.471C69.1948 301.688 69.5383 300.951 70.11 300.413C70.6818 299.874 71.4385 299.574 72.225 299.574C73.0115 299.574 73.7682 299.874 74.3399 300.413C74.9117 300.951 75.2552 301.688 75.3 302.471L75.3 348.228L129.3 348.228L129.3 278.076C129.345 277.293 129.688 276.556 130.26 276.018C130.832 275.479 131.588 275.179 132.375 275.179C133.161 275.179 133.918 275.479 134.49 276.018C135.062 276.556 135.405 277.293 135.45 278.076L135.45 351.37C135.46 351.771 135.387 352.171 135.235 352.543C135.084 352.915 134.857 353.252 134.569 353.533C134.281 353.814 133.938 354.032 133.561 354.175C133.184 354.318 132.782 354.381 132.38 354.362L75.27 354.362L75.27 375.775C75.2252 376.558 74.8817 377.294 74.3099 377.833C73.7382 378.371 72.9815 378.671 72.195 378.671C71.4085 378.671 70.6518 378.371 70.08 377.833C69.5083 377.294 69.1648 376.558 69.12 375.775L69.12 354.362L12 354.362C11.2691 354.377 10.5578 354.125 9.99996 353.654L9.82996 353.524L9.76996 353.524L9.66996 353.394L9.66996 353.345C9.21988 352.814 8.96885 352.144 8.95996 351.45L8.95996 278.156M6.95996 278.156L6.95996 351.37C6.96843 352.535 7.38593 353.661 8.13996 354.551L8.40996 354.9C8.52734 355.024 8.66626 355.125 8.81996 355.2C9.71286 355.942 10.8373 356.351 12 356.356L67.12 356.356L67.12 375.775C67.178 377.078 67.7381 378.309 68.6834 379.211C69.6288 380.113 70.8867 380.616 72.195 380.616C73.5033 380.616 74.7611 380.113 75.7065 379.211C76.6519 378.309 77.2119 377.078 77.27 375.775L77.27 356.356L132.36 356.356C133.025 356.375 133.687 356.26 134.306 356.017C134.925 355.774 135.489 355.408 135.962 354.942C136.436 354.477 136.81 353.92 137.062 353.306C137.315 352.692 137.44 352.033 137.43 351.37L137.43 278.076C137.372 276.772 136.812 275.542 135.867 274.64C134.921 273.738 133.663 273.234 132.355 273.234C131.047 273.234 129.789 273.738 128.843 274.64C127.898 275.542 127.338 276.772 127.28 278.076L127.28 346.234L77.28 346.234L77.28 302.471C77.2219 301.167 76.6619 299.936 75.7165 299.034C74.7711 298.132 73.5133 297.629 72.205 297.629C70.8967 297.629 69.6388 298.132 68.6934 299.034C67.748 299.936 67.188 301.167 67.13 302.471L67.13 346.234L17.13 346.234L17.13 278.076C17.1397 277.412 17.0146 276.754 16.7624 276.14C16.5102 275.526 16.1359 274.969 15.6622 274.503C15.1885 274.037 14.6251 273.672 14.0061 273.429C13.387 273.186 12.725 273.07 12.06 273.089C11.3941 273.069 10.731 273.184 10.1108 273.426C9.49051 273.668 8.92595 274.034 8.45117 274.5C7.97639 274.966 7.60124 275.523 7.34838 276.138C7.09552 276.752 6.97019 277.412 6.97996 278.076L6.95996 278.156Z"
          fill="#FBAA9F"
        ></path>
        <path
          pathLength="1"
          d="M137.35 118.662C137.37 117.999 137.256 117.338 137.012 116.72C136.769 116.102 136.403 115.539 135.935 115.067C135.468 114.594 134.909 114.221 134.293 113.97C133.677 113.719 133.016 113.595 132.35 113.606L12 113.606C11.8174 113.611 11.6361 113.638 11.46 113.686C10.6316 113.547 9.78087 113.636 8.99999 113.945C8.14158 114.294 7.38834 114.859 6.81356 115.584C6.23878 116.309 5.86204 117.17 5.71999 118.084C5.58315 118.937 5.67898 119.812 5.99743 120.615C6.31588 121.419 6.84523 122.122 7.52999 122.652L77.85 178.133L7.53 233.635C6.84062 234.155 6.30545 234.851 5.98144 235.65C5.65744 236.449 5.55672 237.321 5.69 238.173C5.83444 239.092 6.21528 239.958 6.79537 240.687C7.37547 241.416 8.13502 241.983 9 242.332C9.78276 242.633 10.6314 242.722 11.46 242.591C11.6481 242.648 11.8434 242.678 12.04 242.681L132.42 242.681C133.727 242.623 134.961 242.064 135.866 241.121C136.77 240.178 137.275 238.924 137.275 237.619C137.275 236.314 136.77 235.06 135.866 234.117C134.961 233.174 133.727 232.616 132.42 232.558L25.25 232.558L94.18 178.143L25.25 123.729L132.36 123.729C133.026 123.739 133.686 123.614 134.302 123.361C134.918 123.109 135.476 122.735 135.943 122.261C136.409 121.787 136.774 121.224 137.016 120.606C137.258 119.987 137.372 119.326 137.35 118.662Z"
          fill="white"
        ></path>
        <path
          pathLength="1"
          d="M70.57 617.737C107.22 617.737 137 593.392 137 563.472C137 533.552 107.18 509.257 70.53 509.257C33.88 509.257 4.09997 533.622 4.09997 563.472C4.09997 593.322 33.92 617.737 70.57 617.737ZM14.4 563.472C14.4 539.237 39.6 519.53 70.57 519.53C101.54 519.53 126.74 539.277 126.74 563.472C126.74 587.668 101.55 607.425 70.57 607.425C39.59 607.425 14.4 587.747 14.4 563.472Z"
          fill="white"
        ></path>
        <path
          pathLength="1"
          d="M35.08 75.9966C50.76 73.0046 56.17 57.2767 60.94 43.3639C62.1 39.983 63.19 36.7815 64.39 33.8993C69.6 21.3728 76.14 14.2818 85 11.579C89.1718 10.3935 93.5431 10.0747 97.8434 10.6426C102.144 11.2104 106.281 12.6527 110 14.8801C114.139 17.3545 117.671 20.7196 120.339 24.7296C123.006 28.7397 124.743 33.2933 125.42 38.0581C126.347 44.2512 125.934 50.5704 124.209 56.5911C122.484 62.6119 119.487 68.1947 115.42 72.9647C114.808 73.6514 114.392 74.4895 114.216 75.3913C114.04 76.2932 114.111 77.2256 114.42 78.091C114.729 79.0051 115.268 79.8246 115.986 80.4708C116.704 81.117 117.577 81.5683 118.52 81.7812C118.8 81.8369 119.085 81.8636 119.37 81.8609C120.042 81.8499 120.703 81.6914 121.306 81.3966C121.909 81.1018 122.44 80.6781 122.86 80.1555C136.2 64.8265 140.11 43.6432 132.86 26.2098C125.77 9.25517 108.23 -1.45614 90.21 0.179485C67.68 2.17415 57.96 21.0237 50.8 41.0701C50.43 42.0674 50.07 43.1645 49.7 44.2416C47.32 50.8439 44.75 58.3339 39.4 62.8119C34.05 67.2899 25.48 67.3098 19.63 62.9914C14.74 59.401 11.5 53.3572 10.51 45.9769C9.30998 37.0608 11.63 27.3767 16.43 21.303C16.8829 20.7183 17.2148 20.0496 17.4064 19.3358C17.5979 18.622 17.6453 17.8774 17.5457 17.1452C17.4462 16.413 17.2017 15.7079 16.8264 15.0707C16.4512 14.4336 15.9527 13.8773 15.36 13.434C14.9015 13.0434 14.3665 12.7523 13.789 12.5793C13.2115 12.4063 12.6042 12.3553 12.0058 12.4294C11.4074 12.5036 10.8311 12.7012 10.3136 13.0098C9.79603 13.3185 9.34866 13.7313 8.99998 14.2219C0.129975 25.4619 -2.40003 41.7483 2.54998 55.7109C7.75998 70.5312 20.85 78.6794 35.08 75.9966Z"
          fill="white"
        ></path>
        <path
          pathLength="1"
          d="M133 680.589L17.12 680.589L17.12 635.28L17.12 635.071C16.9505 634.226 16.5644 633.439 15.9994 632.787C15.4344 632.136 14.7096 631.641 13.8959 631.352C13.0821 631.062 12.207 630.988 11.356 631.137C10.505 631.285 9.70707 631.651 9.03999 632.198C8.51225 632.657 8.08133 633.217 7.77231 633.843C7.46329 634.47 7.28234 635.152 7.23999 635.849L7.23999 735.013C7.23999 736.336 7.76677 737.604 8.70446 738.539C9.64214 739.475 10.9139 740 12.24 740C12.7308 740 13.2179 739.916 13.68 739.751C14.6983 739.446 15.5895 738.818 16.2191 737.964C16.8486 737.109 17.1824 736.074 17.17 735.013L17.17 690.482L133 690.482C134.326 690.482 135.598 689.957 136.536 689.022C137.473 688.087 138 686.818 138 685.496C138.001 685.006 137.916 684.52 137.75 684.06C137.441 683.047 136.811 682.161 135.955 681.535C135.098 680.91 134.062 680.578 133 680.589Z"
          fill="white"
        ></path>
        <path
          pathLength="1"
          d="M133 436.552L17.12 436.552L17.12 391.203L17.12 390.994C16.925 390.057 16.4641 389.196 15.7921 388.514C15.1201 387.831 14.2654 387.356 13.33 387.144C12.5863 386.968 11.8118 386.966 11.0674 387.139C10.3229 387.313 9.62895 387.656 9.03999 388.141C8.5117 388.598 8.08029 389.155 7.77116 389.78C7.46203 390.405 7.28143 391.086 7.23999 391.782L7.23999 491.016C7.23999 492.339 7.76677 493.607 8.70446 494.542C9.64214 495.477 10.9139 496.003 12.24 496.003C12.7309 496.004 13.2181 495.919 13.68 495.754C14.6946 495.453 15.5845 494.833 16.217 493.986C16.8495 493.14 17.1908 492.112 17.19 491.056L17.19 446.485L133 446.485C134.326 446.485 135.598 445.96 136.536 445.025C137.473 444.09 138 442.821 138 441.499C138.001 441.012 137.916 440.53 137.75 440.072C137.45 439.05 136.824 438.154 135.967 437.518C135.109 436.883 134.068 436.544 133 436.552Z"
          fill="white"
        ></path>
      </motion.svg>
    </div>
  );
};

export default VerticalLogo; */
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const VerticalLogo = ({ isHome }) => {
  const imageContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.matchMedia({
      "(min-width: 1280px)": () => {
        ScrollTrigger.create({
          trigger: document.body,
          pin: imageContainer.current,
          start: "top",
          /* end: isHome ? "+=365px" : "+=220px", */
          end: isHome ? "+=300px" : "+=220px",
        });
      },
    });
  }, []);

  return (
    <div
      ref={imageContainer}
      /* className="h-[50vh] md:h-[90vh] lg:h-[80vh] xl:h-[85vh] z-10" */
      className="h-[50vh] md:h-[90vh] lg:h-[80vh] xl:h-[85vh] z-10"
    >
      <motion.svg
        width="138"
        height="740"
        viewBox="0 0 138 740"
        fill="none"
        className="w-full h-full"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <path
          pathLength="1"
          d="M8.99996 278.076C8.99127 277.674 9.06561 277.274 9.21837 276.902C9.37113 276.53 9.59903 276.193 9.88791 275.912C10.1768 275.632 10.5205 275.413 10.8976 275.271C11.2747 275.128 11.6772 275.065 12.08 275.084C12.4823 275.065 12.8843 275.128 13.2609 275.271C13.6375 275.413 13.9806 275.632 14.2687 275.913C14.5568 276.194 14.7837 276.531 14.9354 276.903C15.087 277.275 15.16 277.674 15.15 278.076L15.15 348.228L69.15 348.228L69.15 302.471C69.1948 301.688 69.5383 300.951 70.11 300.413C70.6818 299.874 71.4385 299.574 72.225 299.574C73.0115 299.574 73.7682 299.874 74.3399 300.413C74.9117 300.951 75.2552 301.688 75.3 302.471L75.3 348.228L129.3 348.228L129.3 278.076C129.345 277.293 129.688 276.556 130.26 276.018C130.832 275.479 131.588 275.179 132.375 275.179C133.161 275.179 133.918 275.479 134.49 276.018C135.062 276.556 135.405 277.293 135.45 278.076L135.45 351.37C135.46 351.771 135.387 352.171 135.235 352.543C135.084 352.915 134.857 353.252 134.569 353.533C134.281 353.814 133.938 354.032 133.561 354.175C133.184 354.318 132.782 354.381 132.38 354.362L75.27 354.362L75.27 375.775C75.2252 376.558 74.8817 377.294 74.3099 377.833C73.7382 378.371 72.9815 378.671 72.195 378.671C71.4085 378.671 70.6518 378.371 70.08 377.833C69.5083 377.294 69.1648 376.558 69.12 375.775L69.12 354.362L12 354.362C11.2691 354.377 10.5578 354.125 9.99996 353.654L9.82996 353.524L9.76996 353.524L9.66996 353.394L9.66996 353.345C9.21988 352.814 8.96885 352.144 8.95996 351.45L8.95996 278.156M6.95996 278.156L6.95996 351.37C6.96843 352.535 7.38593 353.661 8.13996 354.551L8.40996 354.9C8.52734 355.024 8.66626 355.125 8.81996 355.2C9.71286 355.942 10.8373 356.351 12 356.356L67.12 356.356L67.12 375.775C67.178 377.078 67.7381 378.309 68.6834 379.211C69.6288 380.113 70.8867 380.616 72.195 380.616C73.5033 380.616 74.7611 380.113 75.7065 379.211C76.6519 378.309 77.2119 377.078 77.27 375.775L77.27 356.356L132.36 356.356C133.025 356.375 133.687 356.26 134.306 356.017C134.925 355.774 135.489 355.408 135.962 354.942C136.436 354.477 136.81 353.92 137.062 353.306C137.315 352.692 137.44 352.033 137.43 351.37L137.43 278.076C137.372 276.772 136.812 275.542 135.867 274.64C134.921 273.738 133.663 273.234 132.355 273.234C131.047 273.234 129.789 273.738 128.843 274.64C127.898 275.542 127.338 276.772 127.28 278.076L127.28 346.234L77.28 346.234L77.28 302.471C77.2219 301.167 76.6619 299.936 75.7165 299.034C74.7711 298.132 73.5133 297.629 72.205 297.629C70.8967 297.629 69.6388 298.132 68.6934 299.034C67.748 299.936 67.188 301.167 67.13 302.471L67.13 346.234L17.13 346.234L17.13 278.076C17.1397 277.412 17.0146 276.754 16.7624 276.14C16.5102 275.526 16.1359 274.969 15.6622 274.503C15.1885 274.037 14.6251 273.672 14.0061 273.429C13.387 273.186 12.725 273.07 12.06 273.089C11.3941 273.069 10.731 273.184 10.1108 273.426C9.49051 273.668 8.92595 274.034 8.45117 274.5C7.97639 274.966 7.60124 275.523 7.34838 276.138C7.09552 276.752 6.97019 277.412 6.97996 278.076L6.95996 278.156Z"
          fill="#FBAA9F"
        ></path>
        <path
          pathLength="1"
          d="M137.35 118.662C137.37 117.999 137.256 117.338 137.012 116.72C136.769 116.102 136.403 115.539 135.935 115.067C135.468 114.594 134.909 114.221 134.293 113.97C133.677 113.719 133.016 113.595 132.35 113.606L12 113.606C11.8174 113.611 11.6361 113.638 11.46 113.686C10.6316 113.547 9.78087 113.636 8.99999 113.945C8.14158 114.294 7.38834 114.859 6.81356 115.584C6.23878 116.309 5.86204 117.17 5.71999 118.084C5.58315 118.937 5.67898 119.812 5.99743 120.615C6.31588 121.419 6.84523 122.122 7.52999 122.652L77.85 178.133L7.53 233.635C6.84062 234.155 6.30545 234.851 5.98144 235.65C5.65744 236.449 5.55672 237.321 5.69 238.173C5.83444 239.092 6.21528 239.958 6.79537 240.687C7.37547 241.416 8.13502 241.983 9 242.332C9.78276 242.633 10.6314 242.722 11.46 242.591C11.6481 242.648 11.8434 242.678 12.04 242.681L132.42 242.681C133.727 242.623 134.961 242.064 135.866 241.121C136.77 240.178 137.275 238.924 137.275 237.619C137.275 236.314 136.77 235.06 135.866 234.117C134.961 233.174 133.727 232.616 132.42 232.558L25.25 232.558L94.18 178.143L25.25 123.729L132.36 123.729C133.026 123.739 133.686 123.614 134.302 123.361C134.918 123.109 135.476 122.735 135.943 122.261C136.409 121.787 136.774 121.224 137.016 120.606C137.258 119.987 137.372 119.326 137.35 118.662Z"
          fill="white"
        ></path>
        <path
          pathLength="1"
          d="M70.57 617.737C107.22 617.737 137 593.392 137 563.472C137 533.552 107.18 509.257 70.53 509.257C33.88 509.257 4.09997 533.622 4.09997 563.472C4.09997 593.322 33.92 617.737 70.57 617.737ZM14.4 563.472C14.4 539.237 39.6 519.53 70.57 519.53C101.54 519.53 126.74 539.277 126.74 563.472C126.74 587.668 101.55 607.425 70.57 607.425C39.59 607.425 14.4 587.747 14.4 563.472Z"
          fill="white"
        ></path>
        <path
          pathLength="1"
          d="M35.08 75.9966C50.76 73.0046 56.17 57.2767 60.94 43.3639C62.1 39.983 63.19 36.7815 64.39 33.8993C69.6 21.3728 76.14 14.2818 85 11.579C89.1718 10.3935 93.5431 10.0747 97.8434 10.6426C102.144 11.2104 106.281 12.6527 110 14.8801C114.139 17.3545 117.671 20.7196 120.339 24.7296C123.006 28.7397 124.743 33.2933 125.42 38.0581C126.347 44.2512 125.934 50.5704 124.209 56.5911C122.484 62.6119 119.487 68.1947 115.42 72.9647C114.808 73.6514 114.392 74.4895 114.216 75.3913C114.04 76.2932 114.111 77.2256 114.42 78.091C114.729 79.0051 115.268 79.8246 115.986 80.4708C116.704 81.117 117.577 81.5683 118.52 81.7812C118.8 81.8369 119.085 81.8636 119.37 81.8609C120.042 81.8499 120.703 81.6914 121.306 81.3966C121.909 81.1018 122.44 80.6781 122.86 80.1555C136.2 64.8265 140.11 43.6432 132.86 26.2098C125.77 9.25517 108.23 -1.45614 90.21 0.179485C67.68 2.17415 57.96 21.0237 50.8 41.0701C50.43 42.0674 50.07 43.1645 49.7 44.2416C47.32 50.8439 44.75 58.3339 39.4 62.8119C34.05 67.2899 25.48 67.3098 19.63 62.9914C14.74 59.401 11.5 53.3572 10.51 45.9769C9.30998 37.0608 11.63 27.3767 16.43 21.303C16.8829 20.7183 17.2148 20.0496 17.4064 19.3358C17.5979 18.622 17.6453 17.8774 17.5457 17.1452C17.4462 16.413 17.2017 15.7079 16.8264 15.0707C16.4512 14.4336 15.9527 13.8773 15.36 13.434C14.9015 13.0434 14.3665 12.7523 13.789 12.5793C13.2115 12.4063 12.6042 12.3553 12.0058 12.4294C11.4074 12.5036 10.8311 12.7012 10.3136 13.0098C9.79603 13.3185 9.34866 13.7313 8.99998 14.2219C0.129975 25.4619 -2.40003 41.7483 2.54998 55.7109C7.75998 70.5312 20.85 78.6794 35.08 75.9966Z"
          fill="white"
        ></path>
        <path
          pathLength="1"
          d="M133 680.589L17.12 680.589L17.12 635.28L17.12 635.071C16.9505 634.226 16.5644 633.439 15.9994 632.787C15.4344 632.136 14.7096 631.641 13.8959 631.352C13.0821 631.062 12.207 630.988 11.356 631.137C10.505 631.285 9.70707 631.651 9.03999 632.198C8.51225 632.657 8.08133 633.217 7.77231 633.843C7.46329 634.47 7.28234 635.152 7.23999 635.849L7.23999 735.013C7.23999 736.336 7.76677 737.604 8.70446 738.539C9.64214 739.475 10.9139 740 12.24 740C12.7308 740 13.2179 739.916 13.68 739.751C14.6983 739.446 15.5895 738.818 16.2191 737.964C16.8486 737.109 17.1824 736.074 17.17 735.013L17.17 690.482L133 690.482C134.326 690.482 135.598 689.957 136.536 689.022C137.473 688.087 138 686.818 138 685.496C138.001 685.006 137.916 684.52 137.75 684.06C137.441 683.047 136.811 682.161 135.955 681.535C135.098 680.91 134.062 680.578 133 680.589Z"
          fill="white"
        ></path>
        <path
          pathLength="1"
          d="M133 436.552L17.12 436.552L17.12 391.203L17.12 390.994C16.925 390.057 16.4641 389.196 15.7921 388.514C15.1201 387.831 14.2654 387.356 13.33 387.144C12.5863 386.968 11.8118 386.966 11.0674 387.139C10.3229 387.313 9.62895 387.656 9.03999 388.141C8.5117 388.598 8.08029 389.155 7.77116 389.78C7.46203 390.405 7.28143 391.086 7.23999 391.782L7.23999 491.016C7.23999 492.339 7.76677 493.607 8.70446 494.542C9.64214 495.477 10.9139 496.003 12.24 496.003C12.7309 496.004 13.2181 495.919 13.68 495.754C14.6946 495.453 15.5845 494.833 16.217 493.986C16.8495 493.14 17.1908 492.112 17.19 491.056L17.19 446.485L133 446.485C134.326 446.485 135.598 445.96 136.536 445.025C137.473 444.09 138 442.821 138 441.499C138.001 441.012 137.916 440.53 137.75 440.072C137.45 439.05 136.824 438.154 135.967 437.518C135.109 436.883 134.068 436.544 133 436.552Z"
          fill="white"
        ></path>
      </motion.svg>
    </div>
  );
};

export default VerticalLogo;