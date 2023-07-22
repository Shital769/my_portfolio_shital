import React from "react";
import twitter from "../assets/twitter.gif";
import instagram from "../assets/instagram.gif";
import linkedin from "../assets/linkedin.gif";
import github from "../assets/github.gif";

const SocialIcons = () => {
  return (
    <div className="socials">
      <a href="#" target="_blank">
        <img src={linkedin} alt="" className="socicon" />
      </a>
      <a href="#" target="_blank">
        <img src={github} alt="" className="socicon" />
      </a>
      <a href="#" target="_blank">
        <img src={linkedin} alt="" className="socicon" />
      </a>
      <a href="#" target="_blank">
        <img src={instagram} alt="" className="socicon" />
      </a>
    </div>
  );
};

export default SocialIcons;
