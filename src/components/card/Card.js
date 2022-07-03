import React from "react";
import "./Card.css";
import Poster from "../../images/poster1.jpg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Card = ({ poster, name, discount }) => {
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="absolute -right-2 top-0 bg-red-700 p-2 px-6  rotate-12">
            <h3 className="font-semibold  text-sm md:text-xl Kdam  text-white">
              - {discount}% $
            </h3>
          </div>
          <img
            src={poster}
            alt="Avatar"
            className="w-100 h-150 md:w-300 md:h-300 "
          />
          <div className="absolute bg-secondBgColor Kdam text-xl text-center w-full bottom-0 font-semibold py-1 text-red-500">
            <span className="text-white">1 </span>days
          </div>
        </div>
        <div className="flip-card-back bg-slate-900 p-2 ">
          <h1 className="title text-lg text-red-500 Kdam font-bold px-1 mb-1 capitalize">
            {name}
          </h1>
          <p className="text-left">
            {description.length > 180
              ? `${description.substring(0, 180)}...`
              : description}
          </p>

          <button className="text-2xl absolute bottom-2 right-5 hover:text-slate-400 transition-all duration-100 ease-in-out">
            <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
