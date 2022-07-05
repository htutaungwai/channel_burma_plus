import React from "react";
import { useNavigate } from "react-router-dom";

import Error from "../../images/error.png";

const SearchContents = ({ res, type }) => {
  const navigate = useNavigate();
  const { id, poster_path, title, name, release_date, vote_average } = res;
  let background;

  const Poster = poster_path
    ? `https://image.tmdb.org/t/p/original/${poster_path}`
    : Error;
  let movieTitle = title === undefined ? name : title;
  if (movieTitle.length > 30) {
    movieTitle = movieTitle.substring(0, 30) + `..`;
  }
  if (release_date) {
    movieTitle = movieTitle + ` (${release_date.substring(4, -1)})`;
  }

  if (vote_average > 7) {
    background = "bg-emerald-600";
  } else if (vote_average > 3) {
    background = "bg-orange-700";
  } else if (vote_average > 0.1) {
    background = "bg-red-600";
  } else {
    background = "bg-slate-900";
  }
  return (
    <div
      className="relative"
      onClick={() => {
        navigate(`/product/${type}/${id}`);
      }}
    >
      <div className="bg-slate-500 h-60 overflow-hidden flex justify-center relative w-fit min-w-[138px] max-w-[140px] rounded-md md:h-full md:max-w-[200px]">
        <img
          src={Poster}
          alt={title}
          className="h-52 brightness-90 md:h-full md:w-auto"
        />

        {/* title */}
        <div className="w-full absolute bottom-0 h-12 bg-slate-700 ">
          <h4 className="text-sm text-center pt-1 font-semibold">
            {movieTitle}
          </h4>
        </div>
      </div>
      {/* rating */}
      <div
        className={`absolute -top-1 right-2 w-10 h-10  rounded-full ${background} flex justify-center items-center md:-top-4 md:right-9 md:w-14 md:h-14 md:text-2xl`}
      >
        <h3 className="font-bold poppins ">
          {vote_average > 0 ? vote_average : "N/A"}
        </h3>
      </div>
    </div>
  );
};

export default SearchContents;
