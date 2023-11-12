import "./App.css";

import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/app.routes";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
