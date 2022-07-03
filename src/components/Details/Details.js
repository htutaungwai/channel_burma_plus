import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const Details = () => {
  const { movieId } = useParams();
  console.log(movieId);
  return (
    <div className="w-full h-screen">
      <p>hello</p>
    </div>
  );
};

export default Details;
