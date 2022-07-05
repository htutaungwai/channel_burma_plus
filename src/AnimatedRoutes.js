import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Insight from "./pages/Insight";
import Search from "./pages/Search";
import TvDetails from "./components/Details/TvDetails";
import MovieDetails from "./components/Details/MovieDetails";
import NotFound from "./pages/NotFound";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

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
        <Route path="movie/:movieId" element={<MovieDetails />} />
        <Route path="tv/:tvId" element={<TvDetails />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AnimatedRoutes;
