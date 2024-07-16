// src/App.jsx
import { Element } from "react-scroll";
import "./App.css";
import AboutEn from "./Components/About/AboutEn.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import ContactEn from "./Components/Contact/ContactEn.jsx";
import ProjectsEn from "./Components/Projects/ProjectsEn.jsx";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Element name="about" className="section">
        <AboutEn />
      </Element>
      <div className="divider"></div>
      <Element name="project" className="section">
        <ProjectsEn />
      </Element>
      <div className="divider"></div>
      <Element name="contact" className="section">
        <ContactEn />
      </Element>
      <footer>made by Vinicius Gomes</footer>
    </div>
  );
}

export default App;
