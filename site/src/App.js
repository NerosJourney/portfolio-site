import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Bio from "./Pages/Bio";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  );
}

export default App;
