import { useEffect, useRef } from "react";
import { IoMdArrowDropdown, IoMdRadioButtonOff } from "react-icons/io";
import Message from "./Message";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleFYIFlag } from "../../features/menu/menu";
import QAs from "../../utilities/QandA";
import {
  getMessengerState,
  setMessage,
  setLoading,
} from "../../features/messenger/messenger";

const QandA = () => {
  const divRef = useRef(null);
  const dispatch = useDispatch();
  const { messages, messageLoading } = useSelector(getMessengerState);

  const sendMessage = (questionID) => {
    if (!messageLoading) {
      dispatch(setLoading(true));
      dispatch(setMessage(questionID, false));

      setTimeout(() => {
        dispatch(setMessage(questionID, true));
        dispatch(setLoading(false));
      }, 3000);
    }
  };

  // Slider Settigns
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // To show lastet message
  useEffect(() => {
    const scrollHeight = divRef.current.scrollHeight;
    const clientHeight = divRef.current.clientHeight;
    const maxScrollTop = scrollHeight - clientHeight;
    divRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      className="fixed bottom-0 right-3 md:right-10 min-w-[350px] max-w-[370px] min-h-[500px] h-420 z-50"
    >
      <div className="relative w-full h-full flex flex-col flex-wrap overflow-hidden rounded-t-md ">
        {/* bg */}
        <div className="absolute w-full h-full -z-20 bg-[#191919] bottom-20"></div>

        <div className="basis-2/12 bg-[#4d4d4d] p-2 flex justify-between text-base items-center  ">
          <div className="flex gap-2 items-center  ">
            <div className="w-10 h-10 bg-pink-400 text-center rounded-full border-2 relative">
              <IoMdRadioButtonOff className="absolute -right-1 -bottom-1 text-white bg-emerald-500 rounded-full" />
              <h3 className="font-bold text-white ">
                CB<span className=" text-xl text-red-900">+</span>
              </h3>
            </div>
            <div className=" leading-5">
              <h3 className="font-bold text-slate-100 uppercase ">
                Team Channel Burma
              </h3>
              <p className="text-white text-xs">active now</p>
            </div>
          </div>

          <IoMdArrowDropdown
            className="cursor-pointer text-white"
            size={25}
            onClick={() => {
              dispatch(toggleFYIFlag());
            }}
          />
        </div>

        <div className="bg-[#191919]  basis-8/12   max-h-[60%] min-h-[275px]">
          {/* Message Box */}
          <div
            className="wrapper custom-scroll w-full h-full  overflow-x-hidden flex flex-col gap-4 p-3 pr-6 relative"
            ref={divRef}
          >
            {messages.length > 0 &&
              messages.map((msg) => {
                return (
                  <Message
                    key={msg.id}
                    reply={msg.reply}
                    message={msg.message}
                  />
                );
              })}
          </div>
        </div>

        <div className=" basis-2/12 bg-[#201e1e] rounded-b-md flex items-center justify-between rounded-t-[20px] relative ">
          <div className="w-full h-[80%] max-h-[80%] max-w-[85%] flex items-center justify-center relative ml-6  px-2 ">
            <Slider {...settings} className="w-275">
              {QAs.map(({ id, question }) => {
                return (
                  <div
                    key={id}
                    className=" rounded-full  text-center bg-slate-300 text-neutral-900  flex justify-center items-center h-10 cursor-pointer "
                    onClick={() => {
                      sendMessage(id);
                    }}
                  >
                    <p className="mt-1 font-semibold">
                      {id}. {question}
                    </p>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default QandA;
