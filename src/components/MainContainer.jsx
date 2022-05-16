import React from "react";
import { useSelector } from "react-redux";
import { getMenuState } from "../features/menu/menu";
import Apo from "./Apo";
import Hero from "./Hero";
import HomeContainer from "./HomeContainer";
import MobileMenu from "./MobileMenu";

const MainContainer = () => {
  const { menuFlag } = useSelector(getMenuState);
  return (
    <div className={"min-h-screen w-full"}>
      <HomeContainer />
    </div>
  );
};

export default MainContainer;
