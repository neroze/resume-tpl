import React from "react";

// resume data
import Data from "./data";

// left section
import EducationSection from "./components/educationSection";
import Recommendations from "./components/recommendationSection";

// right section
import Skills from "./components/skills";
// import Frameworks from "./components/frameworks";
// import HybridFrameworks from "./components/hybridFrameworks";
import Experiences from "./components/experiences";
import CoverIntro from "./components/coverIntro";

// social
import Social from "./components/social";
import Info from "./components/info";

// setting data on root for easy accesss
window.Data = Data; // eslint-disable-line

const Resume = () => {
  return (
    <div className="row flex-container">
      <div className="left-panel col-1 col">
        <h1 className="purple">
          Niraj Maharjan
          <span>KATHMANDU,NEPAL</span>
        </h1>

        <img
          alt="niraj maharjan"
          className="profil-image"
          src="https://avatars1.githubusercontent.com/u/352001?s=150&u=a8500024023d5df64081d6aa864ed7699309f5a5&v=4"
        />
        <EducationSection educationList={Data.education} />
        <Recommendations recommendationList={Data.recommendations} />
        <Social />
      </div>
      <div className="right-panel col-2 col">
        {/* <h1 className="green"> &lt;INTRO&gt; </h1> */}
        <Info />
        <CoverIntro />
        <Skills skills={Data.skills} />
        {/* <Frameworks webFrameworks={Data.web_frameworks} /> */}
        {/* <HybridFrameworks hybridMobile={Data.hybrid_mobile} /> */}
        <Experiences title="Experiences" dataList={Data.experiences} />
      </div>
    </div>
  );
};

export default Resume;
