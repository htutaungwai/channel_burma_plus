import React from "react";

const handleSearch = (e) => {};

const SearchBar = () => {
  return (
    <div className="w-[80%] flex justify-center items-center">
      {/* Movie or TV Switch */}
      <div className="h-10  mb-4 flex justify-end  sticky ">
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
              //   defaultChecked={type === "movie" ? false : true}
              //   onChange={() => {
              //     setTypeChecked(!typeChecked);
              //   }}
            />

            <span
              className="w-1/2 h-full bg-gray-500 absolute top-0 left-0 rounded-full transition-all duration-500 ease-in-out
    peer-checked:bg-blue-400 peer-checked:left-[100%] peer-checked:translate-x-[-100%]"
            ></span>
          </label>
        </div>
      </div>
      {/* Search Form */}
      <form className="w-full px-12 my-2 flex h-8" onSubmit={handleSearch}>
        <input
          className="w-full text-lg"
          type="text"
          name="search"
          //   ref={searchRef}
          //   value={inputValue}
          //   onChange={handleInputValue}
        />
        <button className=" bg-slate-300 px-2 flex justify-center items-center cursor-pointer">
          NEED TO UPDATE
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
