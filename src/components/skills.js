import React from "react";

const Skills = ({ skills }) => (
  <section className="skills" data-sr="wait 0.3s, enter right">
    <h1 data-sr="wait 0.3s, enter top" className="purple">
      SKILLS
    </h1>
    {skills &&
      skills.map(skill => (
        <label htmlFor={skill} key={skill}>
          {" "}
          <span id={skill}>{skill}</span>
        </label>
      ))}
    <div className="clear" />
  </section>
);

export default Skills;
