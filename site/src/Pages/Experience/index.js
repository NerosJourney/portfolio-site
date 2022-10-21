import React from "react";
import NavBar from "../../Components/NavBar";
import Banana from "../../assets/images/project_temp.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Experience = () => {
  return (
    <>
      <div className="bg-slate-700">
        <NavBar />
        <div className="bg-slate-700 text-center py-10">
          <div className="z-0 left-[49vw] right[49vw] top-32 bottom-8 bg-rose-500 absolute text-rose-500 hide-mobile">
            <p className="invisible">test</p>
          </div>
          <RightTimelineExperience
            role="Assistant Store Manager"
            date="Jan 2022 - Jan 2023"
            desc="Test this is a test to see what happens when this description gets to be really long and super large I hope this doesn't break shit uh-oh"
            company="Dairy Queen"
            logo={Banana}
            isMajor={false}
          />
          <LeftTimelineExperience
            role="Assistant Store Manager"
            date="Jan 2022 - Jan 2023"
            desc="Test this is a test to see what happens when this description gets to be really long and super large I hope this doesn't break shit uh-oh"
            company="Advanced Telerobotics Research Lab"
            logo={Banana}
            isMajor={true}
          />
          <RightTimelineExperience
            role="Assistant Store Manager"
            date="Jan 2022 - Jan 2023"
            desc="Test this is a test to see what happens when this description gets to be really long and super large I hope this doesn't break shit uh-oh"
            company="Dairy Queen"
            logo={Banana}
            isMajor={true}
          />
          <LeftTimelineExperience
            role="Assistant Store Manager"
            date="Jan 2022 - Jan 2023"
            desc="Test this is a test to see what happens when this description gets to be really long and super large I hope this doesn't break shit uh-oh"
            company="Dairy Queen"
            logo={Banana}
            isMajor={true}
          />
        </div>
      </div>
    </>
  );
};

const LeftTimelineExperience = ({
  role,
  date,
  company,
  desc,
  logo,
  isMajor,
}) => {
  return (
    <div className="my-10 py-10 relative bg-slate-700">
      <ExperienceIcon logo={logo} company={company} isMajor={isMajor} />
      <LeftExperiencePopout role={role} date={date} desc={desc} />
      <p className="lg:absolute pt-4 lg:pt-0 top-[40%] text-cyan-100 font-mono left-[60vw] text-2xl lg:text-5xl">
        {company}
      </p>
      <MobileExperiencePopout role={role} date={date} desc={desc} />
    </div>
  );
};

const LeftExperiencePopout = ({ role, date, desc }) => {
  return (
    <div className="lg:peer-hover:visible lg:hover:visible invisible text-left absolute top-0 bottom-0 left-12 right-[60vw] m-2 p-2 bg-slate-800 border-rose-500 border-2 rounded-lg">
      <p className="text-2xl lg:text-5xl text-cyan-500 rounded-r-lg rounded-b-none border-b-rose-500 border-b-2 font-mono">
        {role}
      </p>
      <p className="text-lg lg:text-3xl text-cyan-500 font-mono">{date}</p>
      <p className="text-lg lg:text-3xl text-cyan-100 font-mono">{desc}</p>
      <FaArrowRight
        className="right-[-4.9rem] top-[35%] text-rose-500 absolute"
        size="78"
      />
    </div>
  );
};

const RightTimelineExperience = ({
  role,
  date,
  company,
  desc,
  logo,
  isMajor,
}) => {
  return (
    <div className="my-10 py-10 relative bg-slate-700 lg:bg-transparent">
      <ExperienceIcon logo={logo} company={company} isMajor={isMajor} />
      <RightExperiencePopout role={role} date={date} desc={desc} />
      <p className="lg:absolute pt-4 lg:pt-0 top-[40%] text-cyan-100 font-mono right-[60vw] text-2xl lg:text-5xl">
        {company}
      </p>
      <MobileExperiencePopout role={role} date={date} desc={desc} />
    </div>
  );
};

const RightExperiencePopout = ({ role, date, desc }) => {
  return (
    <div className="lg:peer-hover:visible lg:hover:visible invisible text-left absolute top-0 bottom-0 right-12 left-[60vw] m-2 p-2 bg-slate-800 border-rose-500 border-2 rounded-lg">
      <p className="text-2xl lg:text-5xl text-cyan-500 rounded-r-lg rounded-b-none border-b-rose-500 border-b-2 font-mono">
        {role}
      </p>
      <p className="text-lg lg:text-3xl text-cyan-500 font-mono">{date}</p>
      <p className="text-lg lg:text-3xl text-cyan-100 font-mono">{desc}</p>
      <FaArrowLeft
        className="left-[-4.9rem] top-[35%] text-rose-500 absolute"
        size="78"
      />
    </div>
  );
};

const MobileExperiencePopout = ({ role, date, desc }) => {
  return (
    <div className="lg:peer-hover:invisible lg:hover:invisible lg:peer-hover:h-0 lg:hover:h-0 hover:h-auto peer-hover:h-auto h-0 peer-hover:visible hover:visible invisible text-left lg:m-8 m-2 p-2 bg-slate-800 border-rose-500 border-2 rounded-lg ">
      <p className="text-2xl lg:text-5xl text-cyan-500 rounded-r-lg rounded-b-none border-b-rose-500 border-b-2 font-mono">
        {role}
      </p>
      <p className="text-lg lg:text-3xl text-cyan-500 font-mono">{date}</p>
      <p className="text-lg lg:text-3xl text-cyan-100 font-mono">{desc}</p>
    </div>
  );
};

const ExperienceIcon = ({ logo, company, isMajor }) => {
  if (isMajor)
    return (
      <img
        className="peer rounded-full w-64 h-64 border-rose-500 border-2 object-cover mx-auto"
        src={logo}
        alt={company}
      />
    );
  return (
    <img
      className="peer rounded-full w-32 h-32 border-rose-500 border-2 object-cover mx-auto mt-16"
      src={logo}
      alt={company}
    />
  );
};

export default Experience;
