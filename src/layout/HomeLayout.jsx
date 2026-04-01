import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <Navbar></Navbar>
      
      <main className="">
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
