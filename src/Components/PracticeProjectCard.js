import React from "react";
import e_commerce_cms from "../assets/e_commerce_cms.png";

const PracticeProjectCard = ({project}) => {
   
  return (
    <div className="project-container project-card col">
      <div className="project">
        <div className="project_wrapper">
          <img src={project.imageSrc} alt="e-com" className="project-pic" />
          <div className="project_wrapper--bg"></div>
          <div className="project_description">
            <h3 className="project_description_title">{project.title}</h3>
            <h4 className="project__description--sub-title">
              {project.technologies}
            </h4>
            <p className="project__description--para">{project.description}</p>
            <div className="project_description_links">
              <a
                href={project.githubLink}
                className="project_description_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href={project.liveDemoLink}
                className="project_description_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
        <a
          href={project.liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link effectForLink"
        >
          Check it Out!
        </a>
      </div>
    </div>
  );
};

export default PracticeProjectCard;
