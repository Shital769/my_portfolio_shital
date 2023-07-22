import React from "react";
import Footer from "./Footer";
import TopNav from "./TopNav";
import SocialIcons from "./SocialIcons";

const Layout = ({ children }) => {
  return (
    <>
      <TopNav />
      <div className="main-layout">{children}</div>
      <SocialIcons />
      <Footer />
      <a href="#navbar" id="group">
        <i className="fa-solid fa-circle-up"></i>
      </a>
    </>
  );
};

export default Layout;
