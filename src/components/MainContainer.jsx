import React from "react";
import Apo from "./Apo";
import Hero from "./Hero";
import QandA from "./QandA";
import FYI from "./FYI";
import { useDispatch, useSelector } from "react-redux";
import { getMenuState } from "../features/menu/menu";

const MainContainer = () => {
  const { fyiFlag } = useSelector(getMenuState);

  return (
    <div className="min-h-screen w-full relative">
      <Hero />
      <Apo />
      {fyiFlag && <QandA />}
      <FYI />
    </div>
  );
};

export default MainContainer;
