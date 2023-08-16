// import React from 'react';
// import e_commerce_cms from "../assets/e_commerce_cms.png"

// const ProjectCard = ({ imageSrc, title, subTitle, description, githubLink }) => {
//   return (
//     <div className="project-card position-relative overflow-hidden border rounded">
//       <img src={e_commerce_cms} alt={title} className="project-pic img-fluid" />
//       <div className="project_description">
//             <h3 className="project_description_title">E-Commerce Clone</h3>
//             <h4 class="project__description--sub-title">
//               Html, Css, Javascript ,NextJs
//             </h4>
//             <p class="project__description--para">
//               A clone of the most recognized search engine with tailwind CSS
//             </p>
//             <div className="project_description_links">
//               <a
//                 href="https://www.shitalrayamajhi.com/"
//                 className="project_description_link"
//                 target="_blank"
//               >
//                 <i className="fab fa-github"></i>
//               </a>
//               <a
//                 href="https://www.shitalrayamajhi.com/"
//                 className="project_description_link"
//                 target="_blank"
//               >
//                 <i className="fab fa-github"></i>
//               </a>
//             </div>
//           </div>
//       <div className="project-description position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center text-white p-3 opacity-0 transition-opacity bg-dark style={{ backgroundColor: '#1c1d25', zIndex: 1 }}">
//         <h3 className="project-title">{title}</h3>
//         {/* <h4 className="project-description-sub-title">{subTitle}</h4> */}
//         <p className="project-details">{description}</p>
//         <a href={githubLink} target="_blank" className="project-link btn btn-primary">
//           Check it Out!
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

import React, { useState } from 'react';

const ProjectCard = ({ imageSrc, title, subTitle, description, githubLink }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleDescription = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`project-card position-relative overflow-hidden border rounded ${isActive ? 'active' : ''}`}
      onClick={toggleDescription}
      onMouseEnter={toggleDescription}
      onMouseLeave={toggleDescription}
    >
      <img src={imageSrc} alt={title} className="project-pic img-fluid" />
      <div className="project-description position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center  text-white p-3 opacity-1  ms-5 me-0 transition-opacity bg-dark" style={{ zIndex: 1 }}>
        <h3 className="project-description-title">{title}</h3>
        <h4 className="project-description-sub-title">{subTitle}</h4>
        <p className="project-description-para">{description}</p>
        <div className="project-description-links">
          <a href={githubLink} className="project-description-link" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

