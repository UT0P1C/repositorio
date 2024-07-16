/* eslint-disable react/prop-types */
import AboutEn from "../About/AboutEn";
import ContactEn from "../Contact/ContactEn";
import ProjectsEn from "../Projects/ProjectsEn";
import "./NavBar.css";

function NavBar({ onComponentChange }) {
  return (
    <div className="navBar">
      <header className="header-container">
        <a className="home" onClick={() => onComponentChange(<AboutEn />)}>
          About
        </a>
        <a
          className="projects"
          onClick={() => onComponentChange(<ProjectsEn />)}
        >
          Projects
        </a>
        <a className="contact" onClick={() => onComponentChange(<ContactEn />)}>
          Contact
        </a>
      </header>
    </div>
  );
}

export default NavBar;
