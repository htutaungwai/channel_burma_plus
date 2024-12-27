import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import {
  getSearchState,
  setKeywords,
  setManualPage,
  setType,
} from "../../features/search/searchSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import MainDrawer from "../Drawer/MainDrawer";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <div className="w-full min-h-[8vh] text-white px-4 py-4 text-3xl z-50 lg:pt-10 lg:mb-10 text-center">
          <div className="flex items-center justify-between ">
            <MainDrawer className="ml-4 lg:ml-12" />
            <h2 className="text-2xl md:text-5xl font-bold">
              CB<span className="text-red-600">&#43;</span>
            </h2>
            <FaSearch
              className="cursor-pointer"
              onClick={() => {
                setInputState(!inputState);
              }}
            />
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default FeedHeader;
