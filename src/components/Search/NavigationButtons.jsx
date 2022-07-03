import { useDispatch } from "react-redux/es/exports";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import {
  setManualPage,
  setNextPage,
  setPrevPage,
} from "../../features/search/searchSlice";

const NavigationButtons = ({ total, current }) => {
  const dispatch = useDispatch();
  let buttons = [];
  let leftBoundary = 0;
  let rightBoundary = 0;
  if (current < 6 && total > 1) {
    // console.log("first");
    leftBoundary = 1;
    rightBoundary = 5;
  } else if (total > 5 && current > 5) {
    // console.log("second");
    rightBoundary = Math.ceil(current / 5) * 5;
    leftBoundary = Math.ceil(current / 5 - 1) * 5 + 1;
  } else {
    // console.log("last");
    rightBoundary = total;
    leftBoundary = Math.floor(current / 5) * 5;
  }

  if (leftBoundary < 1) leftBoundary = 1;
  if (rightBoundary > total) rightBoundary = total;
  for (let i = leftBoundary; i < rightBoundary + 1; i++) {
    buttons.push(i);
  }

  return (
    <div className="text-white w-full ">
      {buttons && (
        <div className="flex gap-2 justify-center items-center">
          {current !== 1 && (
            <button
              onClick={() => {
                // prev page
                dispatch(setPrevPage());
              }}
            >
              <FaAngleLeft className="rounded-full bg-slate-300 w-7 h-7 text-black font-bold font-['Concert One'] text-center flex justify-center items-center" />
            </button>
          )}

          {total > 1 &&
            buttons.map((btn) => {
              return (
                <button
                  key={btn}
                  className={`rounded-full ${
                    btn === current
                      ? "bg-red-500 text-white"
                      : "bg-slate-300 text-black"
                  } w-7 h-7  font-bold font-['Concert One'] `}
                  onClick={() => {
                    if (btn !== current) {
                      // manual page

                      dispatch(setManualPage(btn));
                    }
                  }}
                >
                  {btn}
                </button>
              );
            })}
          {current !== total && (
            <button
              onClick={() => {
                // next page
                dispatch(setNextPage());
              }}
            >
              <FaAngleRight className="rounded-full bg-slate-300 w-7 h-7 text-black font-bold font-['Concert One'] text-center flex justify-center items-center" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default NavigationButtons;
