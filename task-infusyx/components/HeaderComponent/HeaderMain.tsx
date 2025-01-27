"use clinet";
import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";

interface HeaderMainProps {}

const HeaderMain: React.FC<HeaderMainProps> = (props) => {
  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
};

export default HeaderMain;
