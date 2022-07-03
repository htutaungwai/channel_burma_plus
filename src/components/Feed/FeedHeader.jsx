import { useState, useRef, useEffect } from "react";
import { HiMenuAlt2, HiSearchCircle } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { setKeywords, setManualPage } from "../../features/search/searchSlice";
import { useDispatch } from "react-redux/es/exports";

const FeedHeader = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputState, setInputState] = useState(false);
  const searchRef = useRef(null);
  const { pathname } = useLocation();

  const paths = ["/"];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputValue = () => {
    setInputValue(searchRef.current.value);
  };
  useEffect(() => {
    if (inputState && searchRef.current) {
      searchRef.current.focus();
    }
  }, [inputState]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (inputValue && inputValue !== "") {
      dispatch(setManualPage(1));
      dispatch(setKeywords(inputValue));
      navigate("/search");
    }
  };

  if (!paths.includes(pathname)) {
    return (
      <>
        <div className="w-full h-[8vh] text-white flex items-center justify-between px-4 text-3xl z-50">
          <HiMenuAlt2 />
          <h2 className="text-2xl md:text-5xl font-bold">
            CB<span className="text-red-600">&#43;</span>
          </h2>
          <HiSearchCircle
            onClick={() => {
              setInputState(!inputState);
            }}
          />
        </div>
        {inputState && (
          <>
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
              <button className=" bg-slate-300 px-2 flex justify-center items-center">
                <FaSearch className="text-2xl" />
              </button>
            </form>

            {/* Movie or TV */}
            <div className="min-w-[150px] min-h-[30px] lg:h-10 text-base lg:text-lg text-textColor  text-center flex justify-end items-center capitalize font-normal transition-all ease-in-out duration-300 relative px-16">
              <label
                htmlFor="language"
                className="bg-slate-300 cursor-pointer relative w-12 h-5 rounded-full peer:bg-blue-500 checked:bg-blue-300"
              >
                <input
                  type="checkbox"
                  id="language"
                  className="sr-only peer"
                  // defaultChecked={languageFlag}
                  // onChange={handleLanguage}
                />

                <span className="w-2/5 h-4/5 bg-blue-400 absolute left-1 top-[2px] rounded-full peer-checked:bg-blue-700 peer-checked:left-6 transition-all duration-500"></span>
              </label>
            </div>
          </>
        )}
      </>
    );
  } else {
    return <></>;
  }
};

export default FeedHeader;
