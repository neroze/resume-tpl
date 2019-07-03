import React from "react";

const experiences = ({ title, dataList }) => (
  <section id="experiences">
    <h1 className="purple"> {title}</h1>
    {dataList.map(experience => (
      <section
        key={`exp${experience.company}`}
        data-sr="wait 0.3s, enter right"
        className="flex-container exeprience"
      >
        <div className="flex-col1">
          <h5>{experience.postion}</h5>
          <span className="year">{experience.work_year}</span>

          {experience.duties.map(duty => (
            <span key={`duty${duty}`}>
              ♢ {duty}
              <br />{" "}
            </span>
          ))}
        </div>
        <div className="flex-col2">
          <img
            alt=""
            className={`company_logo ${experience.company
              .toLowerCase()
              .replace(/[ .]/g, "-")}`}
            src={
              experience.company_logo
                ? `images/${experience.company_logo}`
                : "images/react.ico"
            }
          />
          <h4 className="green">{experience.company}</h4>
        </div>
      </section>
    ))}
  </section>
);

export default experiences;
