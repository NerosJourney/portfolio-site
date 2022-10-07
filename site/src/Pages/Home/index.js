import React from "react";
import NavBar from "../../Components/NavBar";
import ProfileImage from "../../assets/images/profile.jpg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div className="bg-slate-700 h-screen">
        <NavBar />
        <div className="bg-slate-700 text-center py-12">
          <img
            className="rounded-full flex-auto self-center align-middle mx-auto md:w-96 h-auto my-8 w-48 border-rose-500 border-4"
            src={ProfileImage}
            alt="Bailey Wimer"
          />
          <h1 className="text-cyan-500 font-extrabold text-6xl md:text-8xl font-mono">
            Bailey Wimer
          </h1>
          <p className="text-cyan-100 my-12 md:text-3xl text-2xl font-mono">
            Software Developer - Student - Researcher
          </p>
          <a
            className="text-cyan-100 my-12 md:text-3xl text-2xl m-4 py-5 px-2 hov-highlight font-mono"
            href="https://github.com/NerosJourney"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare className="inline pb-2 text-rose-500" size="70" />
            <p className="inline p-2">NerosJourney</p>
          </a>
          <a
            className="text-cyan-100 my-12 md:text-3xl text-2xl m-4 py-5 px-2 hov-highlight font-mono"
            href="https://www.linkedin.com/in/bwimer3/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="inline pb-2 text-rose-500" size="70" />
            <p className="inline p-2">bwimer3</p>
          </a>
          <samp className="text-cyan-100 my-12 md:text-3xl text-2xl m-4 py-5 px-2 hov-highlight font-mono">
            <MdOutlineEmail className="inline pb-2 text-rose-500" size="70" />
            <p className="inline p-2">bwimer3@kent.edu</p>
          </samp>
        </div>
      </div>
    </>
  );
};

export default Home;
