import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import logo from "../assets/logo.png";

const TopNav = () => {
  return (
    <NavBar expand="md" className="topNav" id="navbar">
      <Container>
        <Link to="/">
          <img src={logo} alt="logo" width="170px" />
        </Link>
        <NavBar.Toggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/skills">
              Skills
            </Link>
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
            <Link className="nav-link" to="/about">
              About Me
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </Nav>
        </NavbarCollapse>
      </Container>
    </NavBar>
  );
};

export default TopNav;
