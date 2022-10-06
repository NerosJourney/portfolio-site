import React from "react";
import NavBar from "../../Components/NavBar";
import ProjectImg from "../../assets/images/project_temp.png";

const Projects = () => {
  return (
    <>
      <div className="bg-slate-700 h-screen">
        <NavBar />
        <div className="bg-slate-700 py-4">
          <ul className="grid md:grid-cols-2 grid-cols-1">
            <ProjectItem
              name="Test"
              desc="This is a very long sentence that would need to be expanded even further to test whether this is working lorem ipsum shit and stuff"
            />
            <ProjectItem name="Test" />
            <ProjectItem name="Test" />
            <ProjectItem name="Test" />
            <ProjectItem name="Test" />
          </ul>
        </div>
      </div>
    </>
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

export default Projects;
