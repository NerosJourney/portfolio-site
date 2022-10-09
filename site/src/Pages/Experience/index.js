import React from "react";
import NavBar from "../../Components/NavBar";
import Banana from "../../assets/images/project_temp.png";

const Experience = () => {
  return (
    <>
      <div className="bg-slate-700 h-screen">
        <NavBar />
        <div className="bg-slate-700 text-center py-20">
          {/* <div className="left-[49vw] right[49vw] top-32 bottom-2 bg-rose-500 absolute text-rose-500">
            <p className="invisible">test</p>
          </div> */}
          <TimelineYear />
          <TimelineExperience />
          <TimelineYear />
          <TimelineYear />
          <TimelineYear />
        </div>
      </div>
    </>
  );
};

const TimelineYear = ({ year }) => {
  return <div></div>;
};

const TimelineExperience = ({ name, date, description, logo }) => {
  return <div></div>;
};

const ExperiencePopout = ({ name, date, description }) => {
  return <div></div>;
};

export default Experience;
