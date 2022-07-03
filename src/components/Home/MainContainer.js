import React from "react";
import Hero from "./Hero";
import QandA from "./QandA";
import FYI from "./FYI";
import { useDispatch, useSelector } from "react-redux";
import { getMenuState } from "../../features/menu/menu";
import Footer from "./Footer";

const MainContainer = () => {
  const { fyiFlag } = useSelector(getMenuState);

  return (
    <div className="min-h-screen w-full relative">
      <Hero />
      {fyiFlag && <QandA />}
      <FYI />
      <Footer />
    </div>
  );
};

export default MainContainer;
