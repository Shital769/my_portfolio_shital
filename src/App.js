import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "./Components/Skills";
import HeroSection from "./Components/HeroSection";
import Project from "./Components/Project";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Samples from "./Components/Samples";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/samples" element={<Samples />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
