import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchGenres,
  getAllGenres,
  getAllMovies,
  getAllTV,
  getTVStatus,
  getMoviesStatus,
} from "../../features/feed/feed";
import Slide from "./Slide";

const FeedContainer = () => {
  const movies = useSelector(getAllMovies);
  const moviesStatus = useSelector(getMoviesStatus);
  const tv = useSelector(getAllTV);
  const tvStatus = useSelector(getTVStatus);
  const genres = useSelector(getAllGenres);
  const dispatch = useDispatch();

  // fetching genres section
  useEffect(() => {
    window.scroll(0, 0);
    dispatch(fetchGenres());
  }, []);

  // preparing genres section
  let genresContent = (
    <div className="text-white w-full text-center">Loading...</div>
  );
  if (genres.length > 0) {
    genresContent = (
      <div className=" flex flex-wrap gap-2">
        {genres.map(({ name, id }) => {
          return (
            <div
              key={id}
              id={id}
              className="text-white bg-mainBgColor py-2 px-4 rounded-full"
              onClick={() => {
                console.log(id);
              }}
            >
              {name}
            </div>
          );
        })}
      </div>
    );
  }
  // genres end

  // The empty array selected from the store, the array status and type are passed to the slide. In slide, the slide check the type and fetch the data from the api and then passes again.
  return (
    <div className="min-w-screen min-h-screen bg-secondBgColor pb-[10vh] overflow-x-hidden">
      <h2 className="poppins font-bold tex-white pl-8 pt-2 text-lg uppercase text-white">
        Movies
      </h2>
      <div className=" min-h-[300px] w-full">
        <Slide type="moive" collections={movies} status={moviesStatus} />
      </div>

      <h2 className="poppins font-bold tex-white pl-8 pt-2 text-lg uppercase text-white">
        TV Series
      </h2>
      <div className=" min-h-[300px] w-full">
        <Slide type="tv" collections={tv} status={tvStatus} />
      </div>

      <div className="w-full p-4 ">
        <h2 className="text-white poppins font-bold text-xl mb-2">Generes</h2>
        {genresContent}
      </div>
    </div>
  );
};

export default FeedContainer;
