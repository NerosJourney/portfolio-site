import React from "react";
import NavBar from "../../Components/NavBar";
import ProjectImg from "../../assets/images/project_temp.png";
import Elephant from "../../assets/images/elephant.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="bg-slate-700 h-screen">
        <NavBar />
        <p className="text-cyan-100 font-serif text-6xl px-10 pt-10 font-extrabold text-center">
          Projects
        </p>
        <div className="bg-slate-700 py-4">
          <ul>
            <ProjectItem
              name="Test"
              desc="This is a very long sentence that would need to be expanded even further to test whether this is working lorem ipsum shit and stuff. How long can this be before it looks bad? Lets find out if it ever does. I guess I need to add even more detail here to find out test"
              img={Elephant}
              sublink="test"
            />
            <ProjectItem
              name="Test"
              desc={
                <>
                  <p>
                    This is a test of a description
                    <br /> <br />
                    This should break a line and then continue to type things
                    below it to make sure that this is working
                  </p>
                  <p className="hide-mobile">
                    This is a test of a description
                    <br /> <br />
                    This should break a line and then continue to type things
                    below it to make sure that this is working
                  </p>
                  <p className="hide-mobile">
                    This is a test of a description
                    <br /> <br />
                    This should break a line and then continue to type things
                    below it to make sure that this is working
                  </p>
                </>
              }
              img={ProjectImg}
            />
            <ProjectItem
              name="Test"
              desc="This is a very long sentence that would need to be expanded even further to test whether this is working lorem ipsum shit and stuff"
              img={Elephant}
            />
            <ProjectItem
              name="Test"
              desc="This is a very long sentence that would need to be expanded even further to test whether this is working lorem ipsum shit and stuff"
              img={ProjectImg}
            />
            <ProjectItem
              name="Test"
              desc="This is a very long sentence that would need to be expanded even further to test whether this is working lorem ipsum shit and stuff"
              img={Elephant}
            />
          </ul>
        </div>
      </div>
    </>
  );
};

const ProjectItem = ({ name, desc, img, sublink = "" }) => {
  let project_link = "/projects/" + sublink;
  return (
    <li>
      <Link
        to={project_link}
        className="bg-slate-800 m-2 flex rounded-lg border-rose-500 border-2 overflow-hidden"
      >
        <img
          className="w-1/4 md:w-[15vw] hover:w-1/4 rounded-l-lg border-rose-500 border-r-2 object-cover transition-all ease-in-out"
          src={img}
          alt="Project"
        />
        <div className="px-2">
          <p className="text-2xl md:text-5xl text-cyan-500 rounded-r-lg rounded-b-none border-b-rose-500 border-b-2 font-serif">
            {name}
          </p>
          <p className="text-lg md:text-3xl text-cyan-100">{desc}</p>
        </div>
      </Link>
    </li>
  );
};

export default Projects;
