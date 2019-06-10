import React from "react";

const setClassName = _name => _name.replace(/ /g, "-");

const educationBlock = ({ educationData }) => (
  <section className={`school ${setClassName(educationData.school_name)}`}>
    <img alt="" className="img" src={`images/${educationData.logo}`} />
    <h1 className="green">{educationData.school_name}</h1>
    <b>{educationData.level}</b>
    <br />
    {educationData.title}
    <br />
    {educationData.year}
  </section>
);

export default educationBlock;
