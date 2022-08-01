import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import PostPage from "../pages/PostPage/PostPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Cadastro" element={<SignUpPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
