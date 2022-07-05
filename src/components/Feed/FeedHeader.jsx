import { useState, useRef, useEffect } from "react";
import { HiMenuAlt2, HiSearchCircle } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import {
  getSearchState,
  setKeywords,
  setManualPage,
  setType,
} from "../../features/search/searchSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";

const FeedHeader = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputState, setInputState] = useState(false);
  const [typeChecked, setTypeChecked] = useState(false);
  const searchRef = useRef(null);
  const { pathname } = useLocation();

  const paths = ["/"];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { type } = useSelector(getSearchState);

  // local input state handler
  const handleInputValue = () => {
    setInputValue(searchRef.current.value);
  };

  // focusing search input
  useEffect(() => {
    if (inputState && searchRef.current) {
      searchRef.current.focus();
    }
  }, [inputState]);

  // checking type
  useEffect(() => {
    if (typeChecked) {
      dispatch(setManualPage(1));
      dispatch(setType("tv"));
    } else {
      dispatch(setManualPage(1));
      dispatch(setType("movie"));
    }
  }, [typeChecked]);

  // handling search keywords
  const handleSearch = (e) => {
    e.preventDefault();

    if (inputValue && inputValue !== "") {
      dispatch(setManualPage(1));
      dispatch(setKeywords(inputValue));
      setInputState(false);
      navigate("/search");
    }
  };

  if (!paths.includes(pathname)) {
    return (
      <>
        <div className="w-full h-[8vh] text-white flex items-center justify-between px-4 text-3xl z-50 lg:pt-10 lg:mb-10">
          <HiMenuAlt2 />
          <h2 className="text-2xl md:text-5xl font-bold">
            CB<span className="text-red-600">&#43;</span>
          </h2>
          <HiSearchCircle
            className=" cursor-pointer"
            onClick={() => {
              setInputState(!inputState);
            }}
          />
        </div>
        {inputState && (
          <>
            {/* Movie or TV Switch */}
            <div className="w-full h-10  mb-4 flex justify-end  ">
              <div className="min-w-[150px] min-h-[40px] lg:h-10 text-base lg:text-lg text-textColor  text-center flex justify-center items-center capitalize font-normal transition-all ease-in-out duration-300 relative">
                <div className="absolute z-10 w-full h-full text-white font-bold flex justify-center  items-center poppins pointer-events-none ">
                  <div className="w-1/2 text-center">Movie</div>
                  <div className=" w-1/2">TV</div>
                </div>
                <label
                  htmlFor="searchType"
                  className="cursor-pointer bg-slate-600 relative w-36 h-8 rounded-full peer:bg-blue-500 checked:bg-blue-300"
                >
                  <input
                    type="checkbox"
                    id="searchType"
                    className="sr-only peer"
                    defaultChecked={type === "movie" ? false : true}
                    onChange={() => {
                      setTypeChecked(!typeChecked);
                    }}
                  />

                  <span
                    className="w-1/2 h-full bg-gray-500 absolute top-0 left-0 rounded-full transition-all duration-500 ease-in-out
            peer-checked:bg-blue-400 peer-checked:left-[100%] peer-checked:translate-x-[-100%]"
                  ></span>
                </label>
              </div>
            </div>
            {/* Search Form */}
            <form
              className="w-full px-12 my-2 flex h-8"
              onSubmit={handleSearch}
            >
              <input
                className="w-full text-lg"
                type="text"
                name="search"
                ref={searchRef}
                value={inputValue}
                onChange={handleInputValue}
              />
              <button className=" bg-slate-300 px-2 flex justify-center items-center cursor-pointer">
                <FaSearch className="text-2xl" />
              </button>
            </form>
          </>
        )}
      </>
    );
  } else {
    return <></>;
  }
};

export default FeedHeader;
