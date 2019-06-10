import React from "react";

// resume data
import Data from "./data";

// left section
import Info from "./components/info";
import EducationSection from "./components/educationSection";
import Recommendations from "./components/recommendationSection";

// right section
import Skills from "./components/skills";
import Frameworks from "./components/frameworks";
import HybridFrameworks from "./components/hybridFrameworks";
import Experiences from "./components/experiences";
import CoverIntro from "./components/coverIntro";

// social
import Social from "./components/social";

// setting data on root for easy accesss
window.Data = Data; // eslint-disable-line

const Resume = () => {
  return (
    <div className="row flex-container">
      <div className="left-panel col-1 col">
        <Info />
        <EducationSection educationList={Data.education} />
        <Recommendations recommendationList={Data.recommendations} />
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="btn orange view-recommendation"
          href="https://www.linkedin.com/in/niraj-maharjan-99881731?trk=hp-identity-name"
        >
          {" "}
          View Recommendations in LinkedIn{" "}
        </a>
      </div>
      <div className="right-panel col-2 col">
        {/* <h1 className="green"> &lt;INTRO&gt; </h1> */}
        <CoverIntro />
        <Skills skills={Data.skills} />
        {/* <Frameworks webFrameworks={Data.web_frameworks} /> */}
        {/* <HybridFrameworks hybridMobile={Data.hybrid_mobile} /> */}
        <Experiences title="Experiences" dataList={Data.experiences} />
        <Social />
      </div>
    </div>
  );
};

export default Resume;
