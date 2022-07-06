import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  fetchSearchContents,
  getSearchState,
} from "../features/search/searchSlice";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import NavigationButtons from "../components/Search/NavigationButtons";
import SearchContents from "../components/Search/SearchContents";

const Search = () => {
  const {
    keywords,
    type,
    status,
    results,
    totalPages,
    currentPage,
    totalResults,
    error,
  } = useSelector(getSearchState);
  const dispatch = useDispatch();

  // keywords and page change
  useEffect(() => {
    dispatch(
      fetchSearchContents({
        keywords: String(keywords).toLocaleLowerCase(),
        type,
        page: currentPage,
      })
    );
  }, [keywords, currentPage, type]);

  if (
    keywords !== "" &&
    status === "idle" &&
    results !== [] &&
    error === null
  ) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: 0.8 }}
        className="w-full min-h-screen pb-[14vh]"
      >
        {totalResults > 0 && (
          <main>
            <NavigationButtons current={currentPage} total={totalPages} />

            <h2 className="text-white text-center my-2 md:text-4xl md:my-12">
              Showing results for " {keywords} "
            </h2>
            <div className="search_container w-full h-fit text-white my-8 md:pl-5 ">
              {results?.map((res) => (
                <SearchContents res={res} key={res.id} type={type} />
              ))}
            </div>

            <NavigationButtons current={currentPage} total={totalPages} />
          </main>
        )}

        {totalResults <= 0 && (
          <main className="w-full h-full flex justify-center items-center">
            <h2 className="text-white text-center ">
              No results for " {keywords} "
            </h2>
          </main>
        )}
      </motion.div>
    );
  } else if (status === "pending") {
    return (
      <div className="w-full min-h-screen text-white flex  justify-center items-center">
        Loading...
      </div>
    );
  } else if (keywords !== "" && status === "error" && error !== null) {
    return (
      <div className="w-full min-h-screen text-white flex  justify-center items-center flex-col">
        <h2 className="text-2xl underline font-bold">Error 404</h2>
        <p>{error}</p>
        {keywords !== "" ? (
          <button
            onClick={() => {
              dispatch(
                fetchSearchContents({
                  keywords: String(keywords).toLocaleLowerCase(),
                  type: type,
                  page: currentPage,
                })
              );
            }}
            className="text-blue-600"
          >
            Click here to refresh
          </button>
        ) : (
          <p>Search Again to reload</p>
        )}
      </div>
    );
  } else {
    return (
      <div className="w-full min-h-[95vh] flex justify-center items-center">
        <p className="text-white text-xl font-bold poppins ">
          Wanna Search Something?
        </p>
      </div>
    );
  }
};

export default Search;
