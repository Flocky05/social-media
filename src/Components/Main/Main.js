import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Shared/footer/footer";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/Home");
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
