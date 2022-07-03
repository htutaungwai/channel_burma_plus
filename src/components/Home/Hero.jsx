import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import Poster1 from "../../images/poster1.jpg";
import Poster2 from "../../images/poster2.jpg";
import Poster4 from "../../images/poster4.jpg";
import Poster3 from "../../images/poster3.jpg";
import Poster5 from "../../images/poster5.jpg";
import CM from "../icons/cm.jpg";
import Netflix from "../icons/netflix.png";
import Viu from "../icons/viu.png";
import "../../components/icons/cloud.css";
import { Slide, Fade } from "react-awesome-reveal";
import { BsFillArrowRightCircleFill, BsFillHeartFill } from "react-icons/bs";
import { IoSparkles } from "react-icons/io5";
import Card from "../card/Card";

const Hero = () => {
  return (
    <>
      {/* First */}
      <section className="min-h-screen flex w-full relative overflow-hidden border-none">
        {/* Mobile Background Black Fade Screen */}

        <div className="sm:absolute lg:hidden bg-black fadescreen"></div>
        <div className="text-white w-full max-w-lg m-auto min-h-screen flex-col text-center flex justify-center items-center z-30 border-0">
          <h2 className="uppercase font-bold headingFont text-4xl  md:text-6xl  text-slate-200">
            Channel Burma <span className="font-bold text-red-600">+</span>
          </h2>
          <p className="mt-10 text-lg text-white font-[`Poppins`]  xs:px-10 md:px-0">
            This is a place to watch and share a variety of international and
            buremese movies and tv-series with affordable price. We are devoted
            in providing quality videos to people with easy payment options.
          </p>
          <div className="mt-16 flex justify-center items-center   gap-2 md:gap-10">
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              className="bg-emrald-400 bg-emerald-500 xs:py-2
              xs:px-4 md:py-3 md:px-8 rounded-lg cursor-pointer hover:shadow-md shadow-emerald-300 "
            >
              Join our community
            </motion.button>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              className="flex gap-1 justify-center items-center bg-slate-700 rounded-full py-3 px-8 hover:shadow-xl shadow-white cursor-pointer z-10"
            >
              Download
              <FiDownload />
            </motion.div>
          </div>
        </div>

        {/* Posters */}
        <div className="absolute w-fit z-1 flex right-10 top-1/2 -translate-y-1/2 z-20 max-w-[1550px]">
          <img
            src={Poster3}
            alt="poster"
            className="rotate-12 z-10 h-32 md:h-225  translate-x-20 sm:translate-x-0"
          />
          <img
            src={Poster1}
            alt="poster"
            className="sm:-translate-x-32
            translate-x-0
            opacity-100 rotate-45 origin-bottom-left h-32 md:h-225"
          />
        </div>

        <div className="absolute left-32 pb-10 bottom-0 flex flex-col items-center justify-center z-20">
          <img
            src={Poster4}
            alt="poster"
            className="z-10 rotate-12 h-32 sm:h-180 
            -translate-x-40 
            sm:translate-x-0
            translate-y-10 sm:-translate-y-96 lg:translate-y-10 "
          />
          <img
            src={Poster5}
            alt="poster"
            className="z-10 -rotate-12 
            h-36 sm:h-180
            -translate-x-28  sm:translate-x-16"
          />
          <img
            src={Poster2}
            alt="poster"
            className="z-10 rotate-12  h-40 sm:h-225 
            -translate-x-20 
            sm:translate-x-0
            -translate-y-10
            sm:-translate-y-10 shadow-lg  shadow-slate-300"
          />
        </div>

        {/* First Pink Wave */}
        <div className="w-full absolute  -bottom-36 md:-bottom-16 lg:bottom-5 h-225 z-30 lg:z-10 svg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#FFC0CB"
              fillOpacity="1"
              d="M0,96L20,128C40,160,80,224,120,234.7C160,245,200,203,240,160C280,117,320,75,360,74.7C400,75,440,117,480,117.3C520,117,560,75,600,96C640,117,680,203,720,224C760,245,800,203,840,176C880,149,920,139,960,112C1000,85,1040,43,1080,64C1120,85,1160,171,1200,186.7C1240,203,1280,149,1320,106.7C1360,64,1400,32,1420,16L1440,0L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      {/* First End */}

      {/* Second */}
      <section className="min-h-[80vh] md:min-h-screen w-full  relative  flex flex-col items-center py-8 pt-20 z-30 overflow-hidden -xs:mt-2 md:mt-0">
        <div className="w-full h-full absolute -z-10 scale-x-100 rotate-180 -top-1 bg-[#FFC0CB] "></div>

        {/* bg curve end*/}
        <h2 className="text-4xl md:text-6xl text-black font-bold poppins underline-offset-4 underline new">
          MOVIE TICKETS
        </h2>

        {/* Desktop Cards */}
        <div className="w-4/5 h-full md:h-2/3 top-1/2 -translate-y-1/2 flex justify-center items-center absolute rounded-xl z-20">
          <Fade duration={3000}>
            <div className="w-full h-full relative rounded-xl flex flex-row justify-center gap-5 items-center">
              <Card
                discount={20}
                poster={Poster2}
                name="The Road To Mandalay"
              />
              <Card discount={40} poster={Poster1} name="Moon Over Burma" />
              <Card discount={70} poster={Poster5} name="Bombs Over Burma" />
            </div>
          </Fade>
        </div>

        {/* View more */}
        <div className="box absolute bottom-10 md:bottom-1/3 md:translate-y-20 lg:bottom-1/2 right-5 rounded-full">
          <div className="viewmore flex items-center justify-center gap-4 cursor-pointer text-lg p-2 font-md transiton-all ease-in-out duration-300">
            <BsFillArrowRightCircleFill className="text-slate-700 viewmoreBtn" />
          </div>
        </div>

        {/* Left Notes */}
        <div className="absolute top-1/2 md:top-40 lg:top-1/2 translate-y-24 lg:-translate-y-1/2 lg:-rotate-45 left-20 rotate-0  flex flex-col">
          <div className="relative -z-10">
            <span className="indie text-md md:text-2xl font-semibold capitalize">
              Gift Your loved Ones
              <span>
                <BsFillHeartFill className="ml-2 inline text-red-600" />
              </span>
            </span>
            <div className="arrow relative left-1/2 -translate-x-1/2 ">
              <div className="absolute -bottom-2 right-0">
                <div className="triangle"></div>
              </div>
            </div>
          </div>
        </div>

        {/* RightNote */}
        <div className="absolute indie  bottom-20 right-1/6 md:right-1/2 lg:right-20 md:top-1/2 translate-y-1/2 capitalize text-xl  font-semibold">
          <p>* No Ads</p>
          <p>* No Need to Signup</p>
          <p>* Watch whenever you want</p>
        </div>

        {/* Ayann Tand Dal */}
        <span className="indie absolute font-medium right-40 top-32 md:top-60 lg:top-40 text-xl md:text-3xl rotate-0 md:rotate-45">
          A yann tann del...
          <IoSparkles className="inline-block text-yellow-300" />
        </span>
        <span className="indie absolute left-2 md:left-20 bottom-2 md:bottom-20 font-medium md:font-bold text-sm md:text-xl ">
          Z tar tway a myar gyi pal...
        </span>
      </section>
      {/* Second End*/}

      {/* Third  */}
      <section className="min-h-screen lg:min-h-[120vh] w-full relative overflow-hidden bg-mainBgColor text-center -mt-1 pt-24 md:pt-36 ">
        {/* thrid- top wave */}
        <div className="w-full absolute -top-1 lg:-top-10 rotate-180 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130">
            <path
              fill="#FFC0CB"
              fillOpacity="1"
              d="M0,117L15,112.7C30,108,60,100,90,84.5C120,69,150,48,180,45.5C210,43,240,61,270,69.3C300,78,330,78,360,82.3C390,87,420,95,450,82.3C480,69,510,35,540,21.7C570,9,600,17,630,21.7C660,26,690,26,720,26C750,26,780,26,810,21.7C840,17,870,9,900,15.2C930,22,960,43,990,45.5C1020,48,1050,30,1080,30.3C1110,30,1140,48,1170,62.8C1200,78,1230,91,1260,97.5C1290,104,1320,104,1350,99.7C1380,95,1410,87,1440,84.5C1470,82,1500,87,1530,91C1560,95,1590,100,1620,91C1650,82,1680,61,1710,60.7C1740,61,1770,82,1800,95.3C1830,108,1860,113,1890,99.7C1920,87,1950,56,1980,47.7C2010,39,2040,52,2070,62.8C2100,74,2130,82,2145,86.7L2160,91L2160,130L2145,130C2130,130,2100,130,2070,130C2040,130,2010,130,1980,130C1950,130,1920,130,1890,130C1860,130,1830,130,1800,130C1770,130,1740,130,1710,130C1680,130,1650,130,1620,130C1590,130,1560,130,1530,130C1500,130,1470,130,1440,130C1410,130,1380,130,1350,130C1320,130,1290,130,1260,130C1230,130,1200,130,1170,130C1140,130,1110,130,1080,130C1050,130,1020,130,990,130C960,130,930,130,900,130C870,130,840,130,810,130C780,130,750,130,720,130C690,130,660,130,630,130C600,130,570,130,540,130C510,130,480,130,450,130C420,130,390,130,360,130C330,130,300,130,270,130C240,130,210,130,180,130C150,130,120,130,90,130C60,130,30,130,15,130L0,130Z"
            ></path>
          </svg>
        </div>
        {/* Why CB? */}
        <h2 className="poppins text-2xl md:text-6xl font-bold text-white z-20">
          Why Channel Burma<span className="text-red-600">&#43;</span> ?
        </h2>

        {/*Desktop Cloud */}
        <div className="absolute bottom-20 left-2 translate-y-1/3 z-10 hidden md:block">
          <Slide>
            <div className="cloud2">
              <div className="flag"></div>
              <div className="eye left"></div>
              <div className="eye right"></div>
              <div className="mouth"></div>
            </div>
          </Slide>
        </div>

        {/* Race */}
        <div className="w-full h-full text-white mt-10 md:mt-20 text-center text-md md:text-xl flex flex-col items-center justify-center gap-4 md:gap-10 relative">
          <div className="h-16 flex justify-around items-center gap-2 md:gap-5 relative">
            <h2 className="text-2xl md:text-5xl font-bold ">
              CB<span className="text-red-600">&#43;</span>
            </h2>
            <p className="text-2xl md:text-5xl indie">&#62;&#62;</p>
            <img src={Netflix} alt="logo" className="md:w-150 w-80" />
            <span className="poppins capitalize text-xs md:text-3xl">
              (better payment options)
            </span>
          </div>

          <div className="h-16 flex justify-around items-center gap-2 md:gap-5 relative">
            <h2 className="text-2xl md:text-5xl font-bold">
              CB<span className="text-red-600">&#43;</span>
            </h2>
            <p className="text-2xl md:text-5xl indie">&#62;&#62;</p>
            <img src={Viu} alt="logo" className=" md:w-150 w-80" />
            <span className="poppins capitalize text-xs md:text-3xl">
              (More Movies and Series)
            </span>
          </div>

          <div className="h-16 flex justify-around items-center gap-2 md:gap-5 relative">
            <h2 className="text-2xl md:text-5xl font-bold">
              CB<span className="text-red-600">&#43;</span>
            </h2>
            <p className="text-2xl md:text-5xl indie">&#62;&#62;</p>
            <img src={CM} alt="logo" className="md:w-150 w-80" />
            <span className="poppins capitalize text-xs md:text-3xl">
              (no advertisements)
            </span>
          </div>
          {/*Race End*/}
        </div>

        {/* thrid- bottom wave */}
        <div className=" absolute w-full bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#FFC0CB"
              fillOpacity="1"
              d="M0,256L80,240C160,224,320,192,480,192C640,192,800,224,960,218.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Fourth */}
      <section className="pt-10 md:pt-0 min-h-screen h-screen w-full relative overflow-hidden text-center bg-[#FFC0CB]">
        <div className="w-full h-full  flex flex-col">
          <h2 className="text-3xl md:text-6xl text-black font-bold poppins underline-offset-4 underline">
            PLANS AND PACKAGES
          </h2>

          {/* Chart */}
          <div className=" w-full h-full flex justify-center items-center flex-wrap poppins z-20">
            <div className="basis-1/3 h-full text-center text-sm md:text-2xl pl-2 md:pl-0">
              <h3 className="text-2xl md:text-5xl font-bold mt-20 text-center">
                1 Month
              </h3>
              <p className="mt-6 font-semibold">* 5% discount</p>
              <p className="mt-2 font-semibold underline-offset-8 underline">
                * 2 devices
              </p>
              <p className="price Kdam mt-4 font-bold text-lg md:text-2xl ">
                &#36; 20000 Ks
              </p>
              <button className="mt-6 py-2 px-6 text-white bg-emerald-700 rounded-full cursor-pointer">
                Buy
              </button>
            </div>

            <div className="basis-1/3 h-full text-center text-sm md:text-2xl">
              <h3 className="text-2xl md:text-5xl font-bold mt-20 text-center">
                6 Months
              </h3>
              <p className="mt-6 font-semibold">* 15% discount</p>
              <p className="font-semibold mt-2">* 4 devices</p>
              <p className="mt-2 font-semibold underline-offset-8 underline">
                * Extra 1 month
              </p>

              <p className="price Kdam mt-4 font-bold text-lg md:text-2xl">
                &#36; 68000 Ks
              </p>

              <button className="mt-6 py-2 px-6 text-white bg-emerald-700 rounded-full cursor-pointer">
                Buy
              </button>
            </div>

            <div className="basis-1/3 h-full text-center text-sm md:text-2xl">
              <h3 className="text-2xl md:text-5xl font-bold mt-20 text-center">
                1 Year
              </h3>
              <p className="mt-6 font-semibold">* 30% discount</p>
              <p className="font-semibold mt-2">* 4 devices</p>
              <p className="font-semibold mt-2">* Save Offline</p>
              <p className="font-semibold mt-2">* Extra 3 Months</p>
              <p className="font-semibold mt-2">* Lorem Ispum</p>
              <p className="mt-2 font-semibold underline-offset-8 underline">
                * Dora Hooram
              </p>
              <p className="price Kdam mt-4 font-bold text-lg md:text-2xl">
                &#36; 128000 Ks
              </p>
              <button className="mt-6 py-2 px-6 text-white bg-emerald-700 rounded-full cursor-pointer">
                Buy
              </button>
            </div>
          </div>
        </div>

        {/* fourth - black bottom wave  */}
        <div className="absolute w-full  bottom-0 z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#2C2F33"
              fillOpacity="1"
              d="M0,224L80,218.7C160,213,320,203,480,218.7C640,235,800,277,960,277.3C1120,277,1280,235,1360,213.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Fifth */}
      <section className="min-h-screen w-full relative overflow-hidden text-center -mt-1  bg-mainBgColor pt-8">
        <h1 className="Poppins text-6xl text-white">JOIN OUR COMMUNITY NOW!</h1>
        <h2 className="neonText text-2xl cursor-default inline-block mt-16">
          YOU DESERVE IT
        </h2>
        <p className="text-white text-xl py-10 px-5 md:py-20 md:px-48">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          nostrum laudantium obcaecati eaque dolores impedit adipisci, facilis
          voluptates, soluta molestiae culpa. Voluptas soluta esse voluptatum
          alias quibusdam nihil temporibus repellendus! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Eum dolor veniam, architecto
          exercitationem ratione itaque? Obcaecati voluptatum distinctio
          architecto perspiciatis deserunt aut quibusdam, laboriosam nulla
          facilis sapiente odio inventore sed.
        </p>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          className="flex gap-1 w-48 justify-center items-center bg-slate-700 rounded-full py-3 px-8 hover:shadow-xl shadow-white cursor-pointer z-10 m-auto text-white font-semibold mb-10 "
        >
          Download
          <FiDownload />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
