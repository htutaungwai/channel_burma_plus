import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="w-full min-h-[93vh] text-white flex justify-center items-center flex-col gap-2">
      <h2 className="font-bold poppins underline underline-offset-4 text-2xl">
        Error #404
      </h2>
      <h3>Page Not Found</h3>
      <p className="text-blue-400 font-semibold">
        <Link to="/feed">Go to feed</Link>
      </p>
    </div>
  );
};

export default NotFound;
