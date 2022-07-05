import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsContents from "./DetailsContents";

const Details = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setErorr] = useState(null);

  useEffect(() => {
    const fetchData = async (movieId) => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=685113a1507bae54f2638e286629cad1&language=en-US`;

      try {
        const response = await axios.get(url);
        if (response.status === 200) {
          setDetails(response.data);
        }
      } catch (err) {
        setErorr(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData(movieId);
  }, []);

  if (error === null && !loading) {
    return (
      <div className="w-full min-h-screen  text-white pb-[12vh]  ">
        <DetailsContents content={details} />
      </div>
    );
  } else if (error !== null && !loading) {
    return (
      <div className="w-full min-h-screen  text-white font-bold poppins flex justify-center items-center">
        error
      </div>
    );
  } else {
    return (
      <div className="w-full min-h-screen  text-white font-bold poppins flex justify-center items-center">
        loading....
      </div>
    );
  }
};

export default Details;
