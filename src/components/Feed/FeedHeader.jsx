import { useLocation, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import MainDrawer from "../Drawer/MainDrawer";

const FeedHeader = () => {
  const { pathname } = useLocation();

  const paths = ["/"];

  if (!paths.includes(pathname)) {
    return (
      <>
        <div className="w-full min-h-[8vh] text-white px-4 py-4 text-3xl z-50 lg:pt-10 lg:mb-10 text-center lg:px-20">
          <div className="flex items-center justify-between ">
            <MainDrawer className="ml-4 lg:ml-12" />
            <h2 className="text-2xl md:text-5xl font-bold">
              CB<span className="text-red-600">&#43;</span>
            </h2>
            <div></div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default FeedHeader;
