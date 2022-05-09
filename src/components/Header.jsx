import React from "react";
import { ImPlus } from "react-icons/im";
import { IoPersonCircleSharp, IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getMenuState, toggleMenuFlag } from "../features/menu/menu";
import { motion } from "framer-motion";

const Header = () => {
  const { menuFlag } = useSelector(getMenuState);
  const dispatch = useDispatch();

  return (
    <header>
      {/* for destop and tablet */}
      <div className="w-full min-h-[6rem] md:flex items-center justify-between px-10 fixed hidden">
        <div className="relative z-20">
          <p className="text-white text-[1.3rem] lg:text-[2rem] font-semibold uppercase font-[Righteous] z-30">
            channel burma
          </p>
          <div className="absolute -right-10 -z-10 top-1/2 -translate-y-1/2">
            <ImPlus className="text-red-500 w-14" />
          </div>
        </div>

        <div className="flex">
          <div className="flex gap-5 justify-center items-center text-base lg:text-lg font-semibold capitalize mr-10 text-white">
            <p>services</p>
            <p>about</p>
            <p>support</p>
            <p>swap</p>
            <p>download</p>
          </div>

          <div className="relative">
            <IoPersonCircleSharp
              className="w-60 h-auto rounded-full text-white cursor-pointer hover:bg-slate-700 duration-300 ease-in-out transition-all"
              onClick={() => {
                dispatch(toggleMenuFlag());
              }}
            />

            {menuFlag && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="absolute w-80 h-80 bg-white"
              ></motion.div>
            )}
          </div>
        </div>
      </div>

      {/* for mobile */}

      <div className="w-full min-h-[6rem] flex items-center justify-between px-5 fixed md:hidden">
        <div className="relative z-20">
          <p className="text-white text-lg font-semibold uppercase font-[Righteous] z-30">
            channel burma
          </p>
          <div className="absolute -right-10 -z-10 top-1/2 -translate-y-1/2">
            <ImPlus className="text-red-500 w-14" />
          </div>
        </div>

        <div className="flex">
          {/* <div className="flex gap-5 justify-center items-center text-lg font-semibold capitalize mr-10 text-white">
            <p>services</p>
            <p>about</p>
            <p>support</p>
            <p>swap</p>
            <p>download</p>
          </div> */}

          <IoMenu
            className="w-40 h-auto rounded-full text-white cursor-pointer hover:bg-slate-700 duration-300 ease-in-out transition-all"
            onClick={() => {
              dispatch(toggleMenuFlag());
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
