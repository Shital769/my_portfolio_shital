import React from "react";
import Layout from "./Layout";
// import bootstrap_icon from "../assets/bootstrap_icon.svg";

const Skills = () => {
  return (
    <Layout>
      <section className="skills container py-2 " id="skill">
        <h2 className="skill-header"> My Top Skills</h2>

        <div className="skills-wrapper ">
          <div className=" animate__animated animate__pulse icons ">
            <div className="rounded-2 shitaaal">
              <i className="fa-brands fa-html5 text-danger   "></i> HTML
            </div>
            <div className="rounded-2 shitaaal">
              <i className="fa-brands fa-css3-alt text-primary "></i> CSS
            </div>
            <div className="rounded-2 shitaaal">
              <i className="fa-brands fa-square-js text-warning "></i>{" "}
              JavaScript
            </div>
            <div className="rounded-2 shitaaal">
              <i className="fa-brands fa-figma"></i>Figma
            </div>
            <div className="rounded-2 shitaaal">
              <i className="fa-brands fa-react"></i>React
            </div>
            <div className="rounded-2 shitaaal">
              <i className="fa-brands fa-node"></i>React
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
