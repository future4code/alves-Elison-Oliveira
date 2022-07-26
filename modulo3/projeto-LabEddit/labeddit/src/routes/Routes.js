import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element />
        <Route path="" />
        <Route path="" />
        <Route path="" />
        <Route path="" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
