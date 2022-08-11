import { useNavigate } from "react-router-dom";
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
import {
  BsFillArrowRightCircleFill,
  BsFillHeartFill,
  BsHeartFill,
  BsStarFill,
  BsMoonFill,
} from "react-icons/bs";
import { IoSparkles } from "react-icons/io5";
import Card from "../card/Card";
import {
  FirstPinkWave,
  ThirdTopWave,
  ThirdBottomWave,
  FourthBottomWave,
} from "../waves";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* First */}
      <section className="min-h-screen flex w-full relative overflow-hidden border-none">
        {/* Mobile Background Black Fade Screen */}

        <div className="sm:absolute lg:hidden bg-black fadescreen"></div>
        <div className="text-white w-full max-w-lg m-auto min-h-screen flex-col text-center flex justify-center items-center z-30 border-0">
          <h2 className="uppercase font-bold headingFont text-4xl  md:text-6xl  text-white">
            Channel Burma <span className="font-bold text-red-600">+</span>
          </h2>
          <p className="mt-10 text-lg text-slate-200 font-[`Poppins`]  xs:px-10 md:px-0">
            This is a place to watch and share a variety of international and
            buremese movies and tv-series with affordable price. We are devoted
            in providing quality videos to people with easy payment options.
          </p>
          <div className="mt-16 flex justify-center items-center gap-4 md:gap-10">
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              className="bg-emrald-400 bg-emerald-500 py-2
          px-2 md:py-3 md:px-8 rounded-lg cursor-pointer hover:shadow-md shadow-emerald-300 font-semibold"
            >
              Join Our Community
            </motion.button>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              className="flex gap-1 justify-center items-center bg-slate-700 rounded-full py-2 md:py-3 px-3 md:px-8 hover:shadow-xl shadow-white cursor-pointer z-10 font-semibold"
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
            className="rotate-12 z-10 h-32 md:h-225  translate-x-20 sm:translate-x-0 shadow-md  shadow-slate-700"
          />
          <img
            src={Poster1}
            alt="poster"
            className="sm:-translate-x-32
            translate-x-0
            opacity-100 rotate-45 origin-bottom-left h-32 md:h-225 shadow-lg shadow-slate-700"
          />
        </div>

        <div className="absolute left-32 pb-10 bottom-0 flex flex-col items-center justify-center z-20 ">
          <img
            src={Poster4}
            alt="poster"
            className="z-10 rotate-12 h-32 sm:h-180 
            -translate-x-40 
            sm:translate-x-0
            translate-y-10 sm:-translate-y-96 lg:translate-y-10 shadow-lg  shadow-slate-700"
          />
          <img
            src={Poster5}
            alt="poster"
            className="z-10 -rotate-12 
            h-36 sm:h-180
            -translate-x-28  sm:translate-x-16 shadow-lg  shadow-slate-700"
          />
          <img
            src={Poster2}
            alt="poster"
            className="z-10 rotate-12  h-40 sm:h-225 
            -translate-x-20 
            sm:translate-x-0
            -translate-y-10
            sm:-translate-y-10 shadow-lg  shadow-pink-100"
          />
        </div>
        {/* First Pink Wave */}
        <FirstPinkWave />
      </section>

      {/* First End */}

      {/* Second */}

      <section className="min-h-[80vh] md:min-h-screen w-full  relative  flex flex-col items-center py-8 pt-20 z-40 overflow-hidden -mt-4 md:mt-0">
        <div className="w-full h-full absolute -z-10 scale-x-100 rotate-180 -top-2 bg-[#FFC0CB] "></div>

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
        <span className="indie absolute font-medium right-40 top-40 md:top-60 lg:top-40 text-xl md:text-3xl rotate-0 md:rotate-45">
          A yann tann del...
          <IoSparkles className="inline-block text-yellow-300" />
        </span>
        <span className="indie absolute left-2 md:left-20 bottom-2 md:bottom-20 font-medium md:font-bold text-sm md:text-xl ">
          Z tar tway a myar gyi pal...
        </span>
      </section>
      {/* Second End*/}

      {/* Third  */}
      <section className="min-h-screen lg:min-h-[120vh] w-full relative overflow-hidden bg-mainBgColor text-center -mt-4 pt-24 md:pt-36 ">
        {/* thrid- top wave */}
        <ThirdTopWave />
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

        {/*Mobile Cloud and Stars*/}
        <ThirdBottomWave />

        <BsMoonFill className="text-white text-8xl absolute left-32 md:hidden moblie__moon" />

        <div className="mobile__cloud mobile__cloud--1 md:hidden"></div>
        <div className="mobile__cloud mobile__cloud--2 md:hidden"></div>

        <Fade>
          <div className="absolute right-10 bottom-20 w-1/3 text-white indie text-xl font-md  md:hidden flex  justify-center items-center">
            <p>Our channel shines bright... </p>
            <BsHeartFill className="text-red-500 text-4xl" />
          </div>
        </Fade>
      </section>

      {/* Fourth */}
      <section className="pt-6 md:pt-0 min-h-screen h-screen w-full relative overflow-hidden text-center bg-[#FFC0CB] -mt-1">
        <div className="w-full h-full flex flex-col">
          <h2 className="text-3xl md:text-6xl text-black font-bold poppins underline-offset-4 underline">
            PLANS AND PACKAGES
          </h2>

          {/* Chart */}
          <div className=" w-full h-fit flex justify-center items-center flex-wrap poppins z-20">
            <div className="basis-1/3 h-full text-center text-sm md:text-2xl pl-2 md:pl-0">
              <h3 className="text-2xl md:text-5xl font-bold mt-4 md:mt-20 text-center">
                1 Month
              </h3>
              <p className="mt-6 font-semibold">* 5% discount</p>

              <p className="mt-2 font-semibold">* 2 devices</p>
              <p className="mt-2 font-semibold underline-offset-8 underline">
                * extra 15 days
              </p>

              <p className="price Kdam mt-4 font-bold text-lg md:text-2xl ">
                &#36; 20000 Ks
              </p>

              <button className="mt-6 py-2 px-6 text-white bg-emerald-700 rounded-full cursor-pointer">
                Buy
              </button>
            </div>

            <div className="basis-1/3 h-full text-center text-sm md:text-2xl ">
              <h3 className="text-2xl md:text-5xl font-bold mt-4 md:mt-20 text-center">
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

            <div className="basis-1/3 h-full text-center text-sm md:text-2xl hidden md:block ">
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

          <div className="basis-1/3 h-full text-center text-sm md:text-2xl  md:hidden poppins ">
            <h3 className="text-2xl md:text-5xl font-bold mt-2 text-center">
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

        {/* fourth - black bottom wave  */}
        <FourthBottomWave />
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
          onClick={() => {
            navigate("/feed");
          }}
        >
          Feed
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
