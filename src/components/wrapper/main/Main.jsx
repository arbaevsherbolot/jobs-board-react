import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Employees from "../../pages/employees/Employees";

const Main = () => {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Employees />} path="/employees" />
      </Routes>
    </>
  );
};

export default Main;
