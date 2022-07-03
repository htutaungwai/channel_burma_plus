import React from "react";

const Message = ({ reply, message = "error message" }) => {
  return (
    <div
      className={`w-fit min-w-[10%] max-w-[300px] h-auto rounded-xl  border-1 border-black px-2 py-1 ${
        reply
          ? "bg-blue-700 mr-auto text-white"
          : "ml-auto bg-blue-600 text-slate-100"
      }`}
    >
      <p className="pl-2 text-left ">{message}</p>
    </div>
  );
};

export default Message;
