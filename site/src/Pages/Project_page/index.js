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
        <p className="text-cyan-100 font-mono text-6xl px-10 pt-10 font-extrabold text-center">
          Projects
        </p>
        <div className="bg-slate-700 py-4">
          <ul>
            <ProjectItem
              name="Rocket"
              desc={
                <>
                  <p>
                    Its the year 2032. Gaben has exhausted all of Valve's
                    resources on Half-Life 3. The company has collapsed, and
                    with it, the greatest game launcher of all time: Steam. With
                    the PC gaming world in shambles, and every company rushing
                    to make their own crappy launcher, one launcher must rise
                    above the rest. Prepare to blast off, with Rocket.
                  </p>
                  <p className="hide-mobile">
                    <br />
                    For this project, our team set out to build one launcher
                    which incorporates everything that a gamer would need. From
                    integrating several launchers into one, to embedding a
                    discord channel unique to each game, Rocket is the solution
                    to your ever-growing list of games.
                  </p>
                </>
              }
              img={ProjectImg}
              sublink="rocket"
            />
            <ProjectItem
              name="Stock Algorithm Test Environment"
              desc="An environment used to learn about and attempt to build stock trading algorithms. Then, by implementing them using paper trading, you can view their performance over time."
              img={Elephant}
              sublink="stocks"
            />
            <ProjectItem
              name="ATR Drone System"
              desc={
                <>
                  <p>
                    The ATR Drone System is a holistic approach to K-12 Robotics
                    Education. The system is designed to teach students using
                    incremental learning, where a student may get the drone in
                    5th grade, but be able to learn new concepts with it every
                    year through high school and beyond.
                  </p>
                  <p className="hide-mobile">
                    <br />
                    This project resulted in a paper being published in IHCI
                    2022, where I went on to present the ideas to fellow
                    researchers around the world.
                  </p>
                </>
              }
              img={ProjectImg}
              sublink="drone"
            />
            <ProjectItem
              name="Quote Guesser"
              desc='This project leverages the "Quotes API" to generate random famous quotes. The user is presented with one quote and four options of authors. If the user picks the correct option, they get a point and continue until they answer incorrectly.'
              img={Elephant}
              sublink="quotes"
            />
            <ProjectItem
              name="Portfolio Site"
              desc={
                <>
                  <p>
                    This is the site that you are currently on (Nero.gg).
                    <br /> <br />
                    It was built over the course of three weeks using React and
                    Tailwindcss. The site is hosted using the free tier of
                    Firebase. The purpose behind the site is to show off
                    previous work that I have done and increase my networking
                    abilities.
                  </p>
                </>
              }
              img={ProjectImg}
              sublink="portfolio"
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
          alt={name}
        />
        <div className="px-2">
          <p className="text-2xl md:text-5xl text-cyan-500 rounded-r-lg rounded-b-none border-b-rose-500 border-b-2 font-mono">
            {name}
          </p>
          <p className="text-lg md:text-3xl text-cyan-100 font-mono">{desc}</p>
        </div>
      </Link>
    </li>
  );
};

export default Projects;
