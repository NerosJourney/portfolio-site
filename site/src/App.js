import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Bio from "./Pages/Bio";
import Projects from "./Pages/Project_page";
import Experience from "./Pages/Experience";
import Drone from "./Pages/Projects/Drone";
import Portfolio from "./Pages/Projects/Portfolio";
import Stocks from "./Pages/Projects/Stocks";
import Rocket from "./Pages/Projects/Rocket";
import Quotes from "./Pages/Projects/Quotes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />

        <Route path="/projects/drone" element={<Drone />} />
        <Route path="/projects/quotes" element={<Quotes />} />
        <Route path="/projects/stocks" element={<Stocks />} />
        <Route path="/projects/portfolio" element={<Portfolio />} />
        <Route path="/projects/rocket" element={<Rocket />} />
      </Routes>
    </>
  );
}

export default App;
