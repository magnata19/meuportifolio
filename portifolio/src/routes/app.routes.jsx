import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from '../Pages/Home'
import SobreMim from '../Pages/SobreMim'


import { AnimatePresence } from "framer-motion";

function AppRoutes() {
  const location = useLocation();
  
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AppRoutes;
