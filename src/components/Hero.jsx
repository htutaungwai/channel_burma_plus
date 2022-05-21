import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import Poster1 from "../images/poster1.jpg";
import Poster2 from "../images/poster2.jpg";
import Poster4 from "../images/poster4.jpg";
import Poster3 from "../images/poster3.jpg";
import Poster5 from "../images/poster5.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex w-full relative overflow-hidden">
      <div className="text-white w-full max-w-lg m-auto min-h-screen flex-col text-center flex justify-center items-center z-20">
        <h2 className="uppercase font-bold headingFont text-xl md:text-2xl lg:text-4xl xl:text-5xl text-slate-200">
          Channel Burma <span className="font-bold text-red-600">+</span>
        </h2>
        <p className="mt-10 text-lg text-white font-[`Poppins`] ">
          This is a place to watch and share a variety of international and
          buremese movies and tv-series with affordable price. We are devoted in
          providing quality videos to people with easy payment options.
        </p>
        <div className="mt-16 flex justify-center items-center gap-10 ">
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            className="bg-emrald-400 bg-emerald-500 py-3 px-8 rounded-lg cursor-pointer hover:shadow-md shadow-emerald-300"
          >
            Join our community
          </motion.button>
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
            className="flex gap-1 justify-center items-center bg-slate-700 rounded-full py-3 px-8 hover:shadow-xl shadow-white cursor-pointer"
          >
            Download
            <FiDownload />
          </motion.div>
        </div>
      </div>

      <div className="absolute w-fit z-1 flex right-10 top-1/2 -translate-y-1/2 ">
        <img src={Poster3} alt="poster" className="rotate-12 z-10 h-225" />
        <img
          src={Poster1}
          alt="poster"
          className="h-225 -translate-x-32 opacity-100 rotate-45 origin-bottom-left"
        />
      </div>

      <div className="absolute left-32 pb-10 bottom-0 flex flex-col items-center justify-center">
        <img
          src={Poster4}
          alt="poster"
          className="z-10 rotate-12 h-150 translate-y-10 "
        />
        <img
          src={Poster5}
          alt="poster"
          className="z-10 -rotate-12 h-180 translate-x-16"
        />
        <img
          src={Poster2}
          alt="poster"
          className="z-10 rotate-12 h-225 -translate-y-10 shadow-lg  shadow-slate-300"
        />
      </div>
    </section>
  );
};

export default Hero;
