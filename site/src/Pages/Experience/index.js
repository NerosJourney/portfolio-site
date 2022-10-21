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
            role="Navigat.io"
            date="Oct 2022"
            desc={
              <>
                <p>
                  Our team designed an AR navigation platform using Google Maps.
                  For more information, see the projects page. <br />
                  <b>Won:</b>
                </p>
                <ul type="circle">
                  <li>• "Best use of Google Cloud Platform"</li>
                  <li>• "Most Creative use of Twilio"</li>
                </ul>
              </>
            }
            company="Kent Hack Enough 2022"
            logo={Banana}
            isMajor={false}
          />
          <LeftTimelineExperience
            role="ATR Lab"
            date="May 2022 - Aug 2022"
            desc={
              <>
                <ul type="circle">
                  <li>
                    • Developed a STEM-focused Educational Drone and Software
                    Suite
                  </li>
                  <li>
                    • Led a research project that resulted in a published paper
                  </li>
                  <li>
                    • Won first place in official research presentation for the
                    program
                  </li>
                </ul>
              </>
            }
            company="Summer Undergraduate Research Experience"
            logo={Banana}
            isMajor={false}
          />
          <RightTimelineExperience
            role="Undergraduate Researcher"
            date="Jan 2022 - Present"
            desc={
              <>
                <ul type="circle">
                  <li>
                    • Worked with Python, C++, and Node.JS to research and
                    create STEM-education focused solutions
                  </li>
                  <li>
                    • Combined hardware and software to develop novel solutions
                    to common robotics problems
                  </li>
                  <li>• Mentored undergraduate and high school students</li>
                </ul>
              </>
            }
            company="Advanced Telerobotics Research Lab"
            logo={Banana}
            isMajor={true}
          />
          <LeftTimelineExperience
            role="CS Scholarship"
            date="Sep 2021"
            desc={
              <>
                <ul type="circle">
                  <li>
                    • Scholarship given to select CS Majors in Ohio who have
                    high potential
                  </li>
                  <li>• Offered opportunities to advance studies and career</li>
                  <li>
                    • Included a poster conference, where my team won "Best
                    Presentation" award
                  </li>
                </ul>
              </>
            }
            company="Choose Ohio First"
            logo={Banana}
            isMajor={false}
          />
          <RightTimelineExperience
            role="B.S. in Computer Science"
            date="Sep 2021 - Dec 2023 (est.)"
            desc={
              <>
                <p>
                  Current GPA: 3.7
                  <br />
                  Coursework:
                </p>
                <ul type="circle">
                  <li>• Design and Analysis of Algorithms</li>
                  <li>• Data Structures</li>
                  <li>• Operating Systems</li>
                  <li>• Databases</li>
                  <li>• Human Interface Computing</li>
                </ul>
              </>
            }
            company="Kent State University"
            logo={Banana}
            isMajor={true}
          />
          <LeftTimelineExperience
            role="Assistant Store Manager"
            date="Aug 2019 - Jul 2020"
            desc={
              <>
                <p>
                  I was hired as a standard employee, and had 3 promotions
                  within 6 months to the position of Assistant Store Manager.
                </p>
                <ul type="circle">
                  <li>
                    {" "}
                    • Managed a team of over 30 employees and shift leaders
                  </li>
                  <li>
                    • Improved throughput of the store, nearly doubling income
                    and becoming the largest store in the district
                  </li>
                </ul>
              </>
            }
            company="Dairy Queen"
            logo={Banana}
            isMajor={true}
          />
          <RightTimelineExperience
            role="High School Diploma"
            date="May 2019"
            desc={
              <>
                <ul>
                  <li>• 4.4 GPA</li>
                  <li>• Graduated "Summa cum Laude"</li>
                  <li>• Finished with 42 credit hours</li>
                  <li>
                    • Won "Best in Class Senior" Award and was interviewed on
                    live TV
                  </li>
                </ul>
              </>
            }
            company="Cuyahoga Falls High School"
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
      className="peer rounded-full w-48 h-48 border-rose-500 border-2 object-cover mx-auto mt-8"
      src={logo}
      alt={company}
    />
  );
};

export default Experience;
