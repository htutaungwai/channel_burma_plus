import React from "react";
import { HiHome, HiHeart, HiUser, HiLightBulb } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const FeedControl = () => {
  const { pathname } = useLocation();
  const paths = ["/"];

  if (!paths.includes(pathname)) {
    return (
      <div className="w-full lg:hidden  h-[10vh] bg-slate-600 fixed -bottom-1 flex justify-around items-center text-white text-3xl rounded-t-3xl z-10">
        <Link to="/feed">
          <HiHome className={pathname === "/feed" ? "text-red-400" : ""} />
        </Link>
        <Link to="/insight">
          <HiLightBulb
            className={pathname === "/insight" ? "text-red-400" : ""}
          />
        </Link>
        <Link to="/favorite">
          <HiHeart className={pathname === "/favorite" ? "text-red-400" : ""} />
        </Link>
        <Link to="/profile">
          <HiUser className={pathname === "/profile" ? "text-red-400" : ""} />
        </Link>
      </div>
    );
  } else {
    return <></>;
  }
};

export default FeedControl;
