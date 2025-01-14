import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  getSearchState,
  setKeywords,
  setManualPage,
  setType,
} from "../../features/search/searchSlice";
import { debounce } from "lodash";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputState, setInputState] = useState(false);
  const [typeChecked, setTypeChecked] = useState(false);
  const searchRef = useRef(null);

  const { type } = useSelector(getSearchState);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // focusing search input
  useEffect(() => {
    if (inputState && searchRef.current) {
      searchRef.current.focus();
    }
  }, [inputState]);

  // local input state handler
  const handleInputValue = () => {
    setInputValue(searchRef.current.value);
  };

  const debouncedSearch = useRef(
    debounce((value) => {
      console.log("Debounced inputValue: ", value);
      dispatch(setManualPage(1));
      dispatch(setKeywords(value));
      navigate("/search");
    }, 300)
  ).current;

  // handling search keywords
  const handleSearch = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      debouncedSearch(inputValue);
    }
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel(); // Cancel any pending debounced calls
    };
  }, [debouncedSearch]);

  // checking type
  useEffect(() => {
    if (typeChecked) {
      dispatch(setManualPage(1));
      dispatch(setType("tv"));
    } else {
      dispatch(setManualPage(1));
      dispatch(setType("movie"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeChecked]);

  return (
    <div className="w-full lg:w-[80%] flex justify-center items-center  lg:ml-8 ">
      {/* Movie or TV Switch */}
      {/* <div className=" lg:mb-4 flex justify-end sticky">
        <div className="w-[60%] h-12 lg:h-10 lg:w-[150px] text-xs lg:text-lg text-textColor  text-center flex justify-center items-center capitalize font-normal transition-all ease-in-out duration-300 relative ">
          <div className="absolute z-10 w-full h-full text-white font-md lg:font-bold flex justify-center  items-center poppins pointer-events-none ">
            <div className="w-1/2 text-center">Movie</div>
            <div className=" w-1/2">TV</div>
          </div>
          <label
            htmlFor="searchType"
            className="cursor-pointer bg-slate-600 relative w-36 h-6 lg:h-10 rounded-full peer:bg-blue-500 checked:bg-blue-300"
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
      </div> */}
      {/* Search Form */}
      <form className="w-full px-12 my-2 flex h-8" onSubmit={handleSearch}>
        <input
          className="w-full text-lg"
          type="text"
          name="search"
          ref={searchRef}
          value={inputValue}
          onChange={handleInputValue}
        />
        <button className=" bg-slate-300 px-2 flex justify-center items-center cursor-pointer">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
