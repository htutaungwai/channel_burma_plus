import React, { useEffect, useRef } from "react";
import { ImPlus } from "react-icons/im";
import {
  IoPersonCircleSharp,
  IoMenu,
  IoSettingsSharp,
  IoStar,
  IoTvSharp,
  IoSunny,
  IoMoon,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  getMenuState,
  toggleMenuFlag,
  toggleLanguageFlag,
  toggleThemeFlag,
  toggleMobileMenuFlag,
} from "../../features/menu/menu";
import { motion } from "framer-motion";
import Flags from "country-flag-icons/react/3x2";

const Header = () => {
  // Calling Essential Top Level Functions
  const dispatch = useDispatch();
  const { menuFlag, languageFlag, themeFlag, mobileMenuFlag } =
    useSelector(getMenuState);

  let menuRef = useRef();
  const handleLanguage = () => {
    dispatch(toggleLanguageFlag());
  };
  const handleTheme = () => {
    dispatch(toggleThemeFlag());
  };

  // The function that creates a dom modle to translate english to burmese
  const createDomNode = (burmese, english, name, tag) => {
    if (tag === undefined || "") tag = "p";
    let domNode = React.createElement(
      tag,
      { className: `${name}` },
      `${languageFlag ? burmese : english}`
    );
    return domNode;
  };

  // Checking Click Outside
  useEffect(() => {
    const handler = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        event.target.id !== "menuIcon"
      ) {
        dispatch(toggleMenuFlag());
      }
    };

    //Listening mousedown
    if (menuFlag) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuFlag]);

  return (
    <header>
      {/* for destop and tablet */}
      <div className="w-full transition-all duration-200 ease-in max-w-8xl  min-h-[6rem] md:flex items-center justify-between px-10 fixed hidden z-[60]">
        <div className="relative">
          <p className="text-white text-[1.3rem] lg:text-[2rem] font-semibold uppercase font-[Righteous]">
            cb
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

            <button className="text-base lg:text-lg font-semibold capitalize">
              <p>About</p>
            </button>

            <button className="text-base lg:text-lg font-semibold capitalize ">
              <p>Support</p>
            </button>

            <button className="text-base lg:text-lg font-semibold capitalize ">
              <p>Swap</p>
            </button>

            <button className="text-base lg:text-lg font-semibold capitalize ">
              {createDomNode("burmese", "english", "text-red-300")}
            </button>
          </div>

          <div className="relative">
            <div
              className="absolute w-full h-full  rounded-full cursor-pointer menuClick"
              id="menuIcon"
              onClick={() => {
                dispatch(toggleMenuFlag());
              }}
            ></div>
            <IoPersonCircleSharp className="w-60 h-auto rounded-full text-white   duration-300 ease-in-out transition-all personCircle" />

            {menuFlag && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="absolute min-w-[100px] min-h-[90px]  bg-white right-5 rounded-md py-1"
                ref={menuRef}
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

                {/* Language */}
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

                {/* Theme */}
                <div className="min-w-[150px] min-h-[30px] lg:h-10 text-base lg:text-lg text-textColor  text-center flex justify-center items-center capitalize font-normal transition-all ease-in-out duration-300 relative">
                  <IoMoon className="w-6 h-auto absolute right-3 text-slate-500" />
                  <IoSunny className="w-6 h-auto absolute left-3 text-yellow-500" />
                  <label
                    htmlFor="theme"
                    className="bg-slate-300 cursor-pointer relative w-12 h-5 rounded-full peer:bg-blue-500 checked:bg-blue-300"
                  >
                    <input
                      type="checkbox"
                      id="theme"
                      className="sr-only peer"
                      defaultChecked={themeFlag}
                      onChange={handleTheme}
                    />

                    <span className="w-2/5 h-4/5 bg-blue-400 absolute left-1 top-[2px] rounded-full peer-checked:bg-blue-700 peer-checked:left-6 transition-all duration-500"></span>
                  </label>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* Desktop and Tablet end */}

      {/* For mobile */}
      <div className="fixed w-full flex flex-col md:hidden z-50">
        <div className="w-full min-h-[4rem] flex items-center justify-between px-5 glass-header">
          <div className="relative z-20">
            <p className="text-white text-lg font-semibold uppercase font-[Righteous] z-30">
              channel burma
            </p>
            <div className="absolute -right-10 -z-10 top-1/2 -translate-y-1/2">
              <ImPlus className="text-red-500 w-14" />
            </div>
          </div>

          <div className="flex overflow-hidden rounded-rounded">
            <IoMenu
              className="w-40 h-auto text-white"
              onClick={() => {
                dispatch(toggleMobileMenuFlag());
              }}
            />
          </div>
        </div>

        {mobileMenuFlag && (
          <motion.div
            className="w-full bg-slate-700 flex flex-col"
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{
              height: 0,
              transition: {
                duration: 0.5,
              },
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          ></motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
