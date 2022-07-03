import { motion } from "framer-motion";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slickyArrow nextArrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slickyArrow prevArrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

const SlideContents = ({ collections, status }) => {
  // Slide Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  if (collections && status === "idle") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, animationDelay: 0.5 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-full h-full flex justify-center items-center relative pb-8"
      >
        <div className="w-11/12">
          <Slider {...settings}>
            {collections.map(
              ({
                poster_path,
                title,
                name,
                id,
                vote_average,
                release_date,
              }) => {
                const Poster = `https://image.tmdb.org/t/p/original/${poster_path}`;
                let movieTitle = title === undefined ? name : title;
                if (movieTitle.length > 18) {
                  movieTitle = movieTitle.substring(0, 18) + `..`;
                }
                if (release_date) {
                  movieTitle =
                    movieTitle + ` (${release_date.substring(4, -1)})`;
                }

                let background;

                if (vote_average > 7) {
                  background = "bg-emerald-600";
                } else if (vote_average > 3) {
                  background = "bg-orange-600";
                } else if (vote_average > 0.1) {
                  background = "bg-red-600";
                } else {
                  background = "bg-slate-900";
                }

                return (
                  <div
                    className="h-full w-full flex justify-center items-center relative "
                    key={id}
                  >
                    <img src={Poster} alt={movieTitle} className="w-28" />
                    <div className="rating absolute w-28 top-0  font-bold rounded-tr-medium flex justify-end">
                      <div
                        className={`${background} w-fit pl-4 pr-2 pb-2 text-white rounded-bl-full`}
                      >
                        {vote_average === 0
                          ? "N/A"
                          : Number.parseFloat(vote_average).toFixed(1)}
                      </div>
                    </div>
                    <div className="absolute title w-28 bg-slate-600 h-10 -bottom-0 font-medium text-slate-100 rounded-t-md capitalize text-xs p-1 text-center">
                      <h4>{movieTitle} </h4>
                    </div>
                  </div>
                );
              }
            )}
          </Slider>
        </div>
      </motion.div>
    );
  } else if (status === "pending") {
    return (
      <div className="flex justify-center items-center text-white">
        Loading...
      </div>
    );
  } else {
    return (
      <div className="text-white w-full text-center my-5">
        <p>Error 404</p>
      </div>
    );
  }
};

export default SlideContents;
