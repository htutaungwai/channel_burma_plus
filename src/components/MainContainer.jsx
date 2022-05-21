import React from "react";
import Apo from "./Apo";
import Hero from "./Hero";
import QandA from "./QandA";
import FYI from "./FYI";

const MainContainer = () => {
  return (
    <div className="min-h-screen w-full relative">
      <Hero />
      <Apo />

      <QandA />
      <FYI />
    </div>
  );
};

export default MainContainer;
