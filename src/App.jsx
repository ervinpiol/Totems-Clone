/* import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./layouts/Header";
import Contact from "./layouts/Contact";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Process from "./pages/Process";

const App = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div id="top" className="relative h-screen pt-20 text-white font-Humber">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="process" element={<Process />} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
};

export default App; */
import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./layouts/Header";
import Contact from "./layouts/Contact";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Process from "./pages/Process";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  return (
    <div id="top" className="relative h-screen text-white font-Humber">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="process" element={<Process />} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
