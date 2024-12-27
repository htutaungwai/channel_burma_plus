import { useEffect } from "react";
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
import SearchBar from "../Search/SearchBar";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

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
    <div className="min-w-screen min-h-screen bg-secondBgColor pb-[10vh] overflow-x-hidden md:px-5 flex-col lg:flex-row flex ">
      {/* SLICE SECTION START*/}
      <div className="w-full xl:max-w-[80%]">
        {/* SLICK SECTION */}

        <SearchBar />
        <div className="w-fit flex items-center ml-4 mt-2  lg:ml-20 px-4 rounded-md">
          <h2 className="poppins font-bold tex-white  text-lg uppercase text-red-300 lg:text-2xl">
            Movies
          </h2>
        </div>
        <div className=" min-h-[250px] md:min-h-[400px] w-full ">
          <Slide type="moive" collections={movies} status={moviesStatus} />
        </div>

        <div className="w-fit flex items-center ml-4 lg:mt-2  lg:ml-20 px-4 rounded-md">
          <h2 className="poppins font-bold tex-white  text-lg uppercase text-red-300 lg:text-2xl  ">
            TV series
          </h2>
        </div>

        <div className=" min-h-[250px]  md:min-h-[400px]  ">
          <Slide type="tv" collections={tv} status={tvStatus} />
        </div>
      </div>
      {/* SLICE SECTION END */}

      {/* GENERE SECTION START*/}
      <div className="w-full p-4 ">
        <h2 className="text-white poppins font-bold text-xl mb-2">Generes</h2>
        {genresContent}
      </div>
      {/* GENERE SECTION END */}
    </div>
  );
};

export default FeedContainer;
