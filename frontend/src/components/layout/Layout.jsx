import Navbar from "@/components/shared/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
