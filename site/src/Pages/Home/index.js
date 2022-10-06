import React from "react";
import NavBar from "../../Components/NavBar";
import ProfileImage from "../../assets/images/profile.jpg";

const Home = () => {
  return (
    <>
      <div className="bg-slate-700 h-screen">
        <NavBar />
        <div className="bg-slate-700 text-center py-20">
          <img
            className="rounded-full flex-auto self-center align-middle mx-auto md:w-96 h-auto my-8 w-48 border-rose-500 border-4"
            src={ProfileImage}
            alt="Bailey Wimer"
          />
          <h1 className="text-cyan-500 font-extrabold text-6xl md:text-8xl font-serif">
            Bailey Wimer
          </h1>
          <p className="text-cyan-100 my-12 md:text-3xl text-2xl">
            Software Developer - Student - Researcher
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
