import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import SignUp from "./SignUp";
import Posts from "./Posts";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
