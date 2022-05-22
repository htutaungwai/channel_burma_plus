import React from "react";
import {
  IoMdArrowDropdown,
  IoMdRadioButtonOff,
  IoMdSend,
} from "react-icons/io";
import Message from "./Message";

const QandA = () => {
  return (
    <div className="fixed bottom-0 right-10 z-20 min-w-[350px] max-w-[370px] min-h-[400px] h-420">
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

          <IoMdArrowDropdown className="cursor-pointer" size={25} />
        </div>

        <div className="bg-emerald-100 basis-8/12   max-h-[58%] ">
          <div className="wrapper w-full h-full  overflow-x-hidden flex flex-col gap-2 p-3 items-end">
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
          </div>
        </div>

        <div className=" basis-2/12 bg-emerald-300 rounded-b-md flex items-center justify-between px-2">
          <button className="bg-red-300 h-30">question</button>
          <IoMdSend className="width text-black " />
        </div>
      </div>
    </div>
  );
};

export default QandA;
