import { useState, useEffect } from "react";
import {
  IoMdArrowDropdown,
  IoMdRadioButtonOff,
  IoMdSend,
} from "react-icons/io";
import Message from "./Message";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toggleFYIFlag } from "../features/menu/menu";
import { QAs } from "../utilities/QandA";

const QandA = () => {
  const [messages, setMessages] = useState([]);

  const generateMessage = (id, ans = false, reply = false) => {
    const foundItem = QAs.find((item) => item.id === id);
    let message = {
      id: foundItem.id,
      message: ans ? foundItem.answer : foundItem.question,
      reply,
    };
    return message;
  };

  const sendMessage = (id) => {
    const msg = generateMessage(id, false, false);
    setMessages([...messages, msg]);
    setTimeout(() => {
      replyMessage(id, msg);
    }, 2000);
  };

  const replyMessage = (id, msg) => {
    const rmsg = generateMessage(id, true, true);
    setMessages([...messages, msg, rmsg]);
  };

  const dispatch = useDispatch();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      className="fixed bottom-0 right-10 z-20 min-w-[350px] max-w-[370px] min-h-[500px] h-420"
    >
      <div className="relative w-full h-full  flex flex-col flex-wrap overflow-hidden rounded-t-md">
        <div className="basis-2/12 bg-teal-600 p-2 flex justify-between text-base items-center">
          <div className="flex gap-2 items-center ">
            <div className="w-10 h-10 bg-[#006AFF] text-center rounded-full border-2 relative">
              <IoMdRadioButtonOff className="absolute -right-1 -bottom-1 text-white bg-pink-500 rounded-full" />
              <h3 className="font-bold text-white ">
                CB<span className=" text-xl text-fuchsia-300">+</span>
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
            className="cursor-pointer"
            size={25}
            onClick={() => {
              dispatch(toggleFYIFlag());
            }}
          />
        </div>

        <div className="bg-emerald-100 basis-8/12   max-h-[58%] ">
          <div className="wrapper w-full h-full  overflow-x-hidden flex flex-col gap-2 p-3 pr-6">
            <Message
              reply={true}
              message={
                "Welcome to Channel Burma plus. Click the button if there anything you want to know or directly contact us by phone."
              }
            />
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

        <div className=" basis-2/12 bg-emerald-300 rounded-b-md flex items-center justify-between px-2">
          <div className="w-full h-[80%] max-h-[80%] max-w-[85%] flex items-center justify-center relative ml-6">
            <Slider {...settings} className="w-275">
              {QAs.map(({ id, question }) => {
                console.log(Math.random() * 999);
                return (
                  <div
                    key={Math.random() * 9999}
                    className=" rounded-full text-center bg-slate-700 text-white flex justify-center items-center h-10 cursor-pointer "
                    onClick={() => {
                      sendMessage(id);
                    }}
                  >
                    <p className="mt-1 font-normal">
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
