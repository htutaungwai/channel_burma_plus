import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-full h-420 flex">
      <div className="basis-1/6  flex flex-col p-8 gap-5 text-white ">
        <FaFacebook className="cursor-pointer text-2xl rounded-full" />
        <FaInstagram className="cursor-pointer text-2xl" />
        <FaYoutube className="cursor-pointer text-2xl" />
        <FaTwitter className="cursor-pointer text-2xl" />
        <FaTiktok className="cursor-pointer text-2xl" />
      </div>
      <div className=" basis-5/6 flex justify-around items-start pt-5 text-white gap-2">
        <div>
          <h4 className=" font-semibold text-lg md:text-2xl mb-8 text-red-300">
            Downloads
          </h4>
          <p>Android</p>
          <p>Windows</p>
          <p>Mac</p>
        </div>

        <div>
          <h4 className="font-semibold text-lg md:text-2xl mb-8 text-red-300">
            About
          </h4>
          <p>Company</p>
          <p>Tickets</p>
          <p>Settings</p>
          <p>Developers</p>
          <p>API</p>
        </div>

        <div>
          <h4 className=" font-semibold text-lg md:text-2xl mb-8 text-red-300">
            Policies
          </h4>
          <p>Terms</p>
          <p>Services</p>
          <p>Cookies</p>
          <p>Security</p>
          <p>Copyright Claims</p>
        </div>
      </div>
      <h5 className="absolute bottom-8 text-white left-1/2 -translate-x-1/2 text-center w-full">
        Developed by love with{" "}
        <a className="text-blue-200 font-bold" href="#">
          Wai Aung Htut
        </a>
      </h5>
    </div>
  );
};

export default Footer;
