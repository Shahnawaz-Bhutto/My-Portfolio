import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./page/Home";
import About from "./Components/About";
import Projects from "./Components/Project";
import Services from "./Components/Services";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/*" element={<About />} />
      <Route path="/*" element={<Projects />} />
      <Route path="/*" element={<Services />} />
      
    </Routes> */}
    <App />
  </BrowserRouter>
);
