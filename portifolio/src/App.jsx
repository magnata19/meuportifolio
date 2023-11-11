import { useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home";
import SobreMim from "./Pages/SobreMim";
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NET from "vanta/src/vanta.net";

function App() {
  useEffect(() => {
    NET({
      el: "#animation-bg",
      mouseControls: true,
      touchControls: true,
    });
  }, []);

  return (
    <>
      <div className="animation-bg" id="animation-bg">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobremim" element={<SobreMim />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
