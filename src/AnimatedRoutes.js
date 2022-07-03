import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Insight from "./pages/Insight";
import Search from "./pages/Search";
import Details from "./components/Details/Details";
import NotFound from "./pages/NotFound";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { RO } from "country-flag-icons/react/3x2";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/insight" element={<Insight />} />
      <Route path="/favorite" element={<Profile />} />
      <Route path="/search" element={<Search />} />

      <Route path="/product">
        <Route path="" element={<Navigate to="/search" />} />
        <Route path="movie/:movieId" element={<Details />} />
        <Route path="series/:seriesId" element={<Details />} />
      </Route>

      {/* <Route path="movie" element={<Navigate link="/search" />} />
      <Route path=":movieId" element={<Details />} />
      <Route path="series" element={<Navigate link="/search" />} />
      <Route path=":seriesId" element={<Details />} /> */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AnimatedRoutes;
