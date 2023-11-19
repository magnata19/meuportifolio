import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SobreMim from "./Pages/SobreMim";

import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobremim" element={<SobreMim />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
