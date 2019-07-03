import React from "react";

const Skills = ({ skills }) => (
  <section className="skills" data-sr="wait 0.3s, enter right">
    <h1 data-sr="wait 0.3s, enter top" className="purple">
      SKILLS
    </h1>
    <ul>
      <li>
        <h4>
          Back End: <span>PHP, NodeJs </span>
        </h4>
        Laravel, CodeIgniter, CakePHP, Wordpress, Durpal, ExpressJS, SailsJS
      </li>
      <li>
        <h4>Front End:</h4>
        ReactJS, VueJs, Lodash, BackboneJS, HTML5, CSS3, jQuery,
      </li>
      <li>
        <h4>Build tools:</h4> (Gulp, Grunt, Webpack, Rollup)
      </li>
      <li>
        <h4>Cross platform app development:</h4> Appcelerator, React Native,
        ElectronJS
      </li>
    </ul>
    <div className="clear" />
  </section>
);

export default Skills;
