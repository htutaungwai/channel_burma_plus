import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import FeedControl from "./components/Feed/FeedControl";
import FeedHeader from "./components/Feed/FeedHeader";

function App() {
  return (
    <div className="App bg-secondBgColor relative">
      <Router>
        <FeedHeader />
        <AnimatedRoutes />
        <FeedControl />
      </Router>
    </div>
  );
}

export default App;
