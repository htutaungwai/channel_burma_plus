import React from "react";

const Message = ({ reply, message = "error message" }) => {
  return (
    <div
      className={`w-fit min-w-[10%] max-w-[300px] h-auto rounded-xl  border-1 border-black px-2 py-1 ${
        reply ? "bg-slate-300 mr-auto" : "ml-auto bg-slate-200"
      }`}
    >
      <p className="pl-2 text-left ">{message}</p>
    </div>
  );
};

export default Message;
