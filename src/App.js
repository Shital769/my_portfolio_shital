import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "./Components/Skills";
import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
