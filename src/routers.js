import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Innovator from "./pages/Innovator";
import Donor from "./pages/Donor";

export default function Routers() {
  return (
    <Routes>
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="innovator" element={<Innovator />} />
      <Route path="donor" element={<Donor />} />
      <Route path="*" element={<Home />} />
    </Route>
  </Routes>
  );
}
