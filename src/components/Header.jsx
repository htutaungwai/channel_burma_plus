import React from "react";
import { ImPlus } from "react-icons/im";
import {
  IoPersonCircleSharp,
  IoMenu,
  IoSettingsSharp,
  IoStar,
  IoTvSharp,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  getMenuState,
  toggleMenuFlag,
  toggleLanguageFlag,
} from "../features/menu/menu";
import { motion } from "framer-motion";
import Flags from "country-flag-icons/react/3x2";

const Header = () => {
  const { menuFlag, languageFlag } = useSelector(getMenuState);
  const dispatch = useDispatch();

  const handleLanguage = () => {
    dispatch(toggleLanguageFlag());
  };

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
          <div className="flex gap-5 justify-center items-center text-base mr-10 text-white ">
            <button>
              <p className="text-base lg:text-lg font-semibold capitalize ">
                services
              </p>
            </button>

            <button>
              <p className="text-base lg:text-lg font-semibold capitalize">
                About
              </p>
            </button>

            <button>
              <p className="text-base lg:text-lg font-semibold capitalize ">
                Support
              </p>
            </button>

            <button>
              <p className="text-base lg:text-lg font-semibold capitalize ">
                Swap
              </p>
            </button>

            <button>
              <p className="text-base lg:text-lg font-semibold capitalize ">
                {!languageFlag ? "Download" : "ဒေါင်းလုတ်"}
              </p>
            </button>
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
                className="absolute min-w-[100px] min-h-[90px]  bg-white right-5 rounded-md py-1 "
              >
                <div className="min-w-[150px] min-h-[30px] lg:h-10 text-base lg:text-lg text-textColor hover:bg-slate-300  text-center flex justify-center capitalize font-normal transition-all ease-in-out duration-300 cursor-pointer border-b border-slate-500">
                  <p className="flex justify-center items-center gap-1">
                    Setting
                    <IoSettingsSharp width="20px" />
                  </p>
                </div>

                <div className="min-w-[150px] min-h-[30px] lg:h-10 text-base lg:text-lg text-textColor hover:bg-slate-300  text-center flex justify-center capitalize font-normal transition-all ease-in-out duration-300 cursor-pointer border-b border-slate-500">
                  <p className="flex justify-center items-center gap-1">
                    Favorite
                    <IoStar width="20px" />
                  </p>
                </div>

                <div className="min-w-[150px] min-h-[30px] lg:h-10 text-base lg:text-lg text-textColor hover:bg-slate-300  text-center flex justify-center capitalize font-normal transition-all ease-in-out duration-300 cursor-pointer border-b border-slate-500">
                  <p className="flex justify-center items-center gap-1">
                    Watched
                    <IoTvSharp width="20px" />
                  </p>
                </div>

                <div className="min-w-[150px] min-h-[30px] lg:h-10 text-base lg:text-lg text-textColor  text-center flex justify-center items-center capitalize font-normal transition-all ease-in-out duration-300 relative">
                  <Flags.MM
                    title="United States"
                    className="w-6 h-auto absolute right-3"
                  />
                  <Flags.GB
                    title="United States"
                    className="w-6 h-auto absolute left-3"
                  />
                  <label
                    htmlFor="language"
                    className="bg-slate-300 cursor-pointer relative w-12 h-5 rounded-full peer:bg-blue-500 checked:bg-blue-300"
                  >
                    <input
                      type="checkbox"
                      id="language"
                      className="sr-only peer"
                      defaultChecked={languageFlag}
                      onChange={handleLanguage}
                    />

                    <span className="w-2/5 h-4/5 bg-blue-400 absolute left-1 top-[2px] rounded-full peer-checked:bg-blue-700 peer-checked:left-6 transition-all duration-500"></span>
                  </label>
                </div>
              </motion.div>
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
