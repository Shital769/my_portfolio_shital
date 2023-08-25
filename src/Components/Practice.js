import React from "react";
import e_commerce_cms from "../assets/e_commerce_cms.png";
import PracticeProjectCard from "./PracticeProjectCard";

const Practice = () => {
  const projects = [
    {
      title: "E-Commerce Clone",
      technologies: "Html, Css, Javascript, NextJs",
      description:
        "A clone of the most recognized search engine with tailwind CSS",
      githubLink: "https://www.shitalrayamajhi.com/",
      liveDemoLink: "https://www.shitalrayamajhi.com/",
      imageSrc: e_commerce_cms, // Replace with your image source
    },
    {
      title: "E-Commerce Clone",
      technologies: "Html, Css, Javascript, NextJs",
      description:
        "A clone of the most recognized search engine with tailwind CSS",
      githubLink: "https://www.shitalrayamajhi.com/",
      liveDemoLink: "https://www.shitalrayamajhi.com/",
      imageSrc: e_commerce_cms, // Replace with your image source
    },
    {
      title: "E-Commerce Clone",
      technologies: "Html, Css, Javascript, NextJs",
      description:
        "A clone of the most recognized search engine with tailwind CSS",
      githubLink: "https://www.shitalrayamajhi.com/",
      liveDemoLink: "https://www.shitalrayamajhi.com/",
      imageSrc: e_commerce_cms, // Replace with your image source
    },

    // Add more project objects here
  ];
  return (
    <>
      <div className="projects-container row">
        {projects.map((project, index) => (
          <PracticeProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="projects-container row">
        {projects.map((project, index) => (
          <PracticeProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="projects-container row">
        {projects.map((project, index) => (
          <PracticeProjectCard key={index} project={project} />
        ))}
      </div>
    </>
  );
};

export default Practice;
