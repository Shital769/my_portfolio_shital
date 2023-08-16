// import React from "react";
// import ProjectCard from "./ProjectCard"; // Import your ProjectCard component
// import e_commerce_cms from "../assets/e_commerce_cms.png"; // Import your project images

// const Samples = () => {
//   const projects = [
//     {
//       imageSrc: e_commerce_cms,
//       title: "E-Commerce CMS",
//       // subTitle: "HTML, CSS, JS",
//       description:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia earum eos...",
//       githubLink: "#",
//     },
//     {
//       imageSrc: e_commerce_cms,
//       title: "E-Commerce CMS",
//       // subTitle: "HTML, CSS, JS",
//       description:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia earum eos...",
//       githubLink: "#",
//     },
//     {
//       imageSrc: e_commerce_cms,
//       title: "E-Commerce CMS",
//       // subTitle: "HTML, CSS, JS",
//       description:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia earum eos...",
//       githubLink: "#",
//     },
//     {
//       imageSrc: e_commerce_cms,
//       title: "E-Commerce CMS",
//       // subTitle: "HTML, CSS, JS",
//       description:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia earum eos...",
//       githubLink: "#",
//     },
//     {
//       imageSrc: e_commerce_cms,
//       title: "E-Commerce CMS",
//       // subTitle: "HTML, CSS, JS",
//       description:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia earum eos...",
//       githubLink: "#",
//     },
//     {
//       imageSrc: e_commerce_cms,
//       title: "E-Commerce CMS",
//       // subTitle: "HTML, CSS, JS",
//       description:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia earum eos...",
//       githubLink: "#",
//     },
//     {
//       imageSrc: e_commerce_cms,
//       title: "E-Commerce CMS",
//       // subTitle: "HTML, CSS, JS",
//       description:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia earum eos...",
//       githubLink: "#",
//     },
//     {
//       imageSrc: e_commerce_cms,
//       title: "E-Commerce CMS",
//       // subTitle: "HTML, CSS, JS",
//       description:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia earum eos...",
//       githubLink: "#",
//     },
//     {
//       imageSrc: e_commerce_cms,
//       title: "E-Commerce CMS",
//       // subTitle: "HTML, CSS, JS",
//       description:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia earum eos...",
//       githubLink: "#",
//     },
//     // Add more project objects as needed
//   ];

//   return (
//     <div className="projects container text-center">
//       <h2 className="project-title mb-5 slct">Some of My Recent Projects</h2>
//       {/* subTitle:"HTML, CSS, JS", */}
//       <div className="projects-container row">
//         {projects.map((project, index) => (
//           <div key={index} className="col-md-4 mb-4">
//             <ProjectCard
//               imageSrc={project.e_commerce_cms}
//               title={project.title}
//               // // subTitle={project.subTitle}
//               description={project.description}
//               githubLink={project.githubLink}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Samples;


import React from 'react';
import ProjectCard from './ProjectCard';
 import e_commerce_cms from "../assets/e_commerce_cms.png";

const ProjectsPage = () => {
  const projects = [
    {
      imageSrc: e_commerce_cms,
      title: 'E-Commerce CMS',
      subTitle: 'Html, Css, Javascript, NextJs',
      description: 'A clone of the most recognized search engine with tailwind CSS',
      githubLink: 'https://www.shitalrayamajhi.com/',
    },
    {
      imageSrc: e_commerce_cms,
      title: 'E-Commerce CMS',
      subTitle: 'Html, Css, Javascript, NextJs',
      description: 'A clone of the most recognized search engine with tailwind CSS',
      githubLink: 'https://www.shitalrayamajhi.com/',
    },
    {
      imageSrc: e_commerce_cms,
      title: 'E-Commerce CMS',
      subTitle: 'Html, Css, Javascript, NextJs',
      description: 'A clone of the most recognized search engine with tailwind CSS',
      githubLink: 'https://www.shitalrayamajhi.com/',
    },
    {
      imageSrc: e_commerce_cms,
      title: 'E-Commerce CMS',
      subTitle: 'Html, Css, Javascript, NextJs',
      description: 'A clone of the most recognized search engine with tailwind CSS',
      githubLink: 'https://www.shitalrayamajhi.com/',
    },
    {
      imageSrc: e_commerce_cms,
      title: 'E-Commerce CMS',
      subTitle: 'Html, Css, Javascript, NextJs',
      description: 'A clone of the most recognized search engine with tailwind CSS',
      githubLink: 'https://www.shitalrayamajhi.com/',
    },
    {
      imageSrc: e_commerce_cms,
      title: 'E-Commerce CMS',
      subTitle: 'Html, Css, Javascript, NextJs',
      description: 'A clone of the most recognized search engine with tailwind CSS',
      githubLink: 'https://www.shitalrayamajhi.com/',
    },
    {
      imageSrc: e_commerce_cms,
      title: 'E-Commerce CMS',
      subTitle: 'Html, Css, Javascript, NextJs',
      description: 'A clone of the most recognized search engine with tailwind CSS',
      githubLink: 'https://www.shitalrayamajhi.com/',
    },
    {
      imageSrc: e_commerce_cms,
      title: 'E-Commerce CMS',
      subTitle: 'Html, Css, Javascript, NextJs',
      description: 'A clone of the most recognized search engine with tailwind CSS',
      githubLink: 'https://www.shitalrayamajhi.com/',
    },
    {
      imageSrc: e_commerce_cms,
      title: 'E-Commerce CMS',
      subTitle: 'Html, Css, Javascript, NextJs',
      description: 'A clone of the most recognized search engine with tailwind CSS',
      githubLink: 'https://www.shitalrayamajhi.com/',
    },
    {
      imageSrc: e_commerce_cms,
      title: 'E-Commerce CMS',
      subTitle: 'Html, Css, Javascript, NextJs',
      description: 'A clone of the most recognized search engine with tailwind CSS',
      githubLink: 'https://www.shitalrayamajhi.com/',
    },
    {
      imageSrc: e_commerce_cms,
      title: 'E-Commerce CMS',
      subTitle: 'Html, Css, Javascript, NextJs',
      description: 'A clone of the most recognized search engine with tailwind CSS',
      githubLink: 'https://www.shitalrayamajhi.com/',
    },
    
    // Add more project objects as needed
    
    // Repeat the above object structure for each project
  ];

  return (
    <div className="projects container text-center">
      <h2 className="project-title mb-5">Some of My Recent Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <ProjectCard
              imageSrc={project.imageSrc}
              title={project.title}
              subTitle={project.subTitle}
              description={project.description}
              githubLink={project.githubLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

