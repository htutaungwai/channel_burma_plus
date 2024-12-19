import React from "react";
import Error from "../../images/error.png";
import getBackgroundClass from "../../utilities/getBackgroundClass";

const DetailsContents = ({ content }) => {
  const {
    original_title,
    backdrop_path,
    name,
    title,
    release_date,
    genres,
    overview,
    status,
    vote_average,
    poster_path,
    runtime,
    episode_run_time,
    first_air_date,
  } = content;

  console.log(content);
  const Backdrop = backdrop_path
    ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
    : Error;

  const Poster = poster_path
    ? `https://image.tmdb.org/t/p/original/${poster_path}`
    : Error;

  let movieTitle = original_title === undefined ? name : title;

  if (release_date) {
    movieTitle = movieTitle + ` (${release_date.substring(4, -1)})`;
  }

  let background = getBackgroundClass(vote_average);

  let time = runtime ? runtime : episode_run_time;
  let date = release_date ? release_date : first_air_date;

  return (
    <div className="w-full px-4 md:px-12  md:text-xl">
      <h2 className="poppins my-4 text-4xl font-bold  mb-10">{movieTitle}</h2>
      <div className="w-full h-[400px] ">
        <img
          src={Poster}
          alt={original_title}
          className=" h-full text-center mx-auto "
        />
      </div>

      <div className="w-full flex flex-wrap gap-2 mt-6  mb-2">
        {genres.length > 0 &&
          genres.map((genre) => {
            return (
              <div
                key={genre.id}
                className="rounded-full bg-slate-700 text-sm font-thin poppins py-2 px-4 "
              >
                {genre.name}
              </div>
            );
          })}
      </div>

      <div className="mt-6">
        <h3 className="poppins underline-offset-2 underline text-2xl font-bold">
          Overview
        </h3>

        <p className="mt-4 text-md">{overview ? overview : "No details"}</p>
      </div>

      <div className="mt-4">
        <h4>
          status: <span className="text-red-400 pl-2">{status}</span>
        </h4>
        <h4>
          rating:{"   "}
          <span className={`${background} font-bold pl-2`}>{vote_average}</span>
        </h4>
        <h4>
          release date: <span className="text-slate-400 pl-2">{date}</span>
        </h4>
        <h4>
          screen time : <span className="text-slate-400 pl-2">{time} min</span>
        </h4>
      </div>

      <div className="mt-6">
        <h2 className="poppins my-2">Backdrop:</h2>
        <img
          src={Backdrop}
          alt={original_title}
          className="w-full text-center mx-auto "
        />
      </div>
    </div>
  );
};

export default DetailsContents;
