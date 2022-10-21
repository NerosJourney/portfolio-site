import React from "react";
import NavBar from "../../Components/NavBar";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import ProfileImage from "../../assets/images/profile.jpg";

const Bio = () => {
  return (
    <>
      <div className="bg-slate-700 h-screen">
        <NavBar />
        <p className="text-cyan-100 font-mono text-6xl px-10 pt-10 font-extrabold text-center">
          Bio
        </p>
        <div className="bg-slate-700 text-center py-8 md:grid md:grid-cols-3 md:grid-rows-6 gap-2">
          <div className="row-span-5 col-span-2 border-2 border-rose-500 rounded-3xl m-2">
            <div className="flex">
              <img
                className="w-1/4 md:w-[30vw] rounded-l-3xl border-rose-500 border-r-2 object-cover"
                src={ProfileImage}
                alt="Project"
              />
              <div className="px-2 w-full">
                <p className="text-2xl md:text-5xl text-cyan-500 rounded-r-lg rounded-b-none border-b-rose-500 border-b-2 font-mono">
                  Bailey Wimer
                </p>
                <p className="text-lg md:text-3xl text-cyan-100 font-mono text-left">
                  Test
                </p>
              </div>
            </div>
          </div>
          <div className="row-span-6 col-span-1 border-2 border-rose-500 rounded-3xl m-2">
            <div className="px-2 w-full">
              <p className="text-2xl md:text-5xl text-cyan-500 rounded-r-lg rounded-b-none border-b-rose-500 border-b-2 font-mono">
                Skills
              </p>
              <Skill name="C++" bar_percent={90} />
              <Skill name="Python" bar_percent={75} />
              <Skill name="Java" bar_percent={60} />
              <Skill name="JavaScript" bar_percent={50} />
              <p className="text-xl md:text-4xl text-cyan-100 font-mono text-left ">
                Others:
              </p>
              <SkillList
                title="Languages (cont.)"
                list="HTML, CSS, C#, Lua, R"
              />
              <SkillList
                title="Tools"
                list="Git/GitHub, Linux, MySQL, LaTeX, Arduino"
              />
              <SkillList
                title="Miscellaneuous"
                list="Robot Operating System (ROS), PCB Design, 3D Modelling/Printing"
              />
            </div>
          </div>
          <div className="row-span-1 col-span-2 border-2 border-rose-500 rounded-3xl m-2">
            <a
              className="text-cyan-100 md:my-12 md:text-3xl text-2xl m-4 hov-highlight font-mono"
              href="https://github.com/NerosJourney"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare className="inline pb-2 text-rose-500" size="70" />
              <p className="inline p-2">NerosJourney</p>
            </a>
            <a
              className="text-cyan-100 md:my-12 md:text-3xl text-2xl m-4 hov-highlight font-mono"
              href="https://www.linkedin.com/in/bwimer3/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="inline pb-2 text-rose-500" size="70" />
              <p className="inline p-2">bwimer3</p>
            </a>
            <samp className="text-cyan-100 md:my-12 md:text-3xl text-2xl m-4 hov-highlight font-mono">
              <MdOutlineEmail className="inline pb-2 text-rose-500" size="70" />
              <p className="inline p-2">bwimer3@kent.edu</p>
            </samp>
          </div>
        </div>
      </div>
    </>
  );
};

const Skill = ({ name, bar_percent }) => {
  return (
    <div className="text-xl md:text-4xl text-cyan-100 border-b-cyan-500 border-b-2 font-mono">
      <p className="text-left my-1">{name}:</p>
      <ProgressBar bar_percent={bar_percent} />
    </div>
  );
};

const ProgressBar = ({ bar_percent }) => {
  return (
    <div className="relative pt-1">
      <div className="overflow-hidden h-6 mb-3 text-xs flex rounded-full bg-cyan-100">
        <div style={{ width: `${bar_percent}%` }} className="bg-cyan-500"></div>
      </div>
    </div>
  );
};

const SkillList = ({ title, list }) => {
  return (
    <div className="font-mono text-left ">
      <p className="pl-3 my-1 text-lg md:text-3xl text-cyan-500">{title}:</p>
      <p className="pl-8 text-lg md:text-2xl text-cyan-100">{list}</p>
    </div>
  );
};

export default Bio;
