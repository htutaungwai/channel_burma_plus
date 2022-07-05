import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, fetchTV } from "../../features/feed/feed";
import "./Slide.css";
import SlideContents from "./SlideContents";

const Slide = ({ type, collections, status }) => {
  const [time, setTime] = useState("day");
  const [timeFlag, setTimeFlag] = useState(false);
  const dispatch = useDispatch();
  const handleTimeFlag = () => {
    if (time === "day") {
      setTimeout(() => {
        setTime("week");
      }, 500);
    } else {
      setTimeout(() => {
        setTime("day");
      }, 500);
    }
    setTimeFlag(!timeFlag);
  };

  useEffect(() => {
    if (status === "idle" && type === "moive") {
      dispatch(fetchMovies(time));
    }

    if (status === "idle" && type === "tv") {
      dispatch(fetchTV(time));
    }
  }, [time]);

  return (
    <div className="w-full h-fit ">
      {/* switch */}
      <div className="w-full h-10  mb-4 flex justify-end  pr-2 lg:pr-20">
        <div className="min-w-[150px] min-h-[40px] lg:h-10 text-base lg:text-lg text-textColor  text-center flex justify-center items-center capitalize font-normal transition-all ease-in-out duration-300 relative">
          <div className="absolute z-10 w-full h-full text-white font-bold flex justify-around items-center poppins pointer-events-none">
            <span className={timeFlag ? "text-slate-500" : "text-white"}>
              Today
            </span>
            <span className={timeFlag ? "text-white" : "text-slate-500 "}>
              Weekly
            </span>
          </div>
          <label
            htmlFor={`${type}-time`}
            className="cursor-pointer bg-slate-600 relative w-36 h-8 rounded-full peer:bg-blue-500 checked:bg-blue-300"
          >
            <input
              type="checkbox"
              id={`${type}-time`}
              className="sr-only peer"
              defaultChecked={timeFlag}
              onChange={() => {
                handleTimeFlag(!timeFlag);
              }}
            />

            <span
              className="w-1/2 h-full bg-blue-500 absolute top-0 left-0 rounded-full transition-all duration-500 ease-in-out
            peer-checked:bg-red-400 peer-checked:left-[100%] peer-checked:translate-x-[-100%]"
            ></span>
          </label>
        </div>
      </div>
      {/* switch end */}

      {/* Slider */}
      <SlideContents collections={collections} status={status} />
    </div>
  );
};

export default Slide;
