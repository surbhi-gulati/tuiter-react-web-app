import React from "react";
import Explore from "../explore";
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
  return(
    <>
      <h4>Home</h4>
      <WhatsHappening/>
      <TuitsList/>
    </>
  );
};

export default HomeComponent;
