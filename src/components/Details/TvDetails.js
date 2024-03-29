import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsContents from "./DetailsContents";

const TvDetails = () => {
  const { tvId } = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setErorr] = useState(null);

  useEffect(() => {
    const fetchData = async (tvId) => {
      const url = `https://api.themoviedb.org/3/tv/${tvId}?api_key=685113a1507bae54f2638e286629cad1&language=en-US`;

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

    window.scroll(0, 0);
    fetchData(tvId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div className="w-full min-h-screen  text-white font-bold poppins flex justify-center items-center md:font-semibold">
        loading....
      </div>
    );
  }
};

export default TvDetails;
