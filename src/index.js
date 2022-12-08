import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Retouch from "./pages/Retouch";
import PhotoFrame from "./pages/PhotoFrame";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Retouch" element={<Retouch />} />
        <Route path="/PhotoFrame" element={<PhotoFrame />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
