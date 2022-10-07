import React from "react";
import NavBar from "../../Components/NavBar";
import ProjectImg from "../../assets/images/project_temp.png";
import Elephant from "../../assets/images/elephant.png";
import { Link } from "react-router-dom";

const Projects2 = () => {
  return (
    <>
      <div className="bg-slate-700 h-screen">
        <NavBar />
        <div className="bg-slate-700">
          <CarouselItem
            name="Test"
            img={Elephant}
            desc="Lorem ipsum dolor sit is a very long description to test how this is gonna look. How much can I say before this looks bad?"
          />
        </div>
      </div>
    </>
  );
};

const CarouselItem = ({ name, img, desc }) => {
  return (
    <Link to="/projects2" className="relative">
      <img
        src={img}
        alt={name}
        className="w-screen min-h-64 max-h-[80vh] object-cover"
      />
      <div className="absolute top-1/4 bottom-1/4 left-[15vw] lg:right-[50vw] right-[15vw] backdrop-blur-sm min-w-min object-center border-2 border-rose-500 overflow-hidden rounded-lg">
        <p className="text-2xl lg:text-7xl p-2 font-serif font-extrabold underline text-cyan-500 border-b-2 border-rose-500">
          {name}
        </p>
        <p className="lg:text-4xl p-2 font-serif text-cyan-100 text-ellipsis">
          {desc}
        </p>
      </div>
    </Link>
  );
};

const ProjectItem = ({ name, desc }) => {
  return (
    <li className="bg-slate-800 m-2 flex rounded-lg border-rose-500 border-2">
      <img
        className="w-72 rounded-l-lg border-rose-500 border-r-2"
        src={ProjectImg}
        alt="Project"
      />
      <div className="px-2">
        <p className="text-2xl text-cyan-500 rounded-r-lg rounded-b-none border-b-rose-500 border-b-2 font-serif">
          {name}
        </p>
        <p className="text-lg text-cyan-100">{desc}</p>
      </div>
    </li>
  );
};

export default Projects2;
