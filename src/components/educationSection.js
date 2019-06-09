import React from "react";
import EducationBlock from "./education";

const educationSection = ({ educationList }) => (
  <section className="education" data-sr="wait 0.3s, enter left">
    <h1 className="purple"> EDUCATION</h1>
    {educationList &&
      educationList.map(education => (
        <EducationBlock key={education.school_name} educationData={education} />
      ))}
  </section>
);

export default educationSection;
