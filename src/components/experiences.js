import React from "react";

const experiences = ({ title, dataList }) => (
  <section id="experience">
    <h1 className="purple"> {title}</h1>
    {dataList.map(experience => (
      <section
        key={`exp${experience.company}`}
        data-sr="wait 0.3s, enter right"
      >
        <img
          alt=""
          className={`company_logo ${experience.company
            .toLowerCase()
            .replace(/[ .]/g, "-")}`}
          src={
            experience.company_logo
              ? `PICS/${experience.company_logo}`
              : "PICS/react.ico"
          }
        />
        <div>
          <h1 className="green">{experience.company}</h1>
          <b>{experience.postion}</b>
          <br />
          {experience.work_year}
          <br />
          {experience.duties.map(duty => (
            <span key={`duty${duty}`}>
              #{duty}
              <br />{" "}
            </span>
          ))}
        </div>
      </section>
    ))}
  </section>
);

export default experiences;
