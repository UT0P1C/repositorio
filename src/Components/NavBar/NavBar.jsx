// src/Components/NavBar/NavBar.jsx
/* eslint-disable react/prop-types */
import { Link } from "react-scroll";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navBar">
      <header className="header-container">
        <Link
          className="home"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          About
        </Link>
        <Link
          className="projects"
          to="project"
          spy={true}
          smooth={true}
          duration={500}
        >
          Projects
        </Link>
        <Link
          className="contact"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
      </header>
    </div>
  );
}

export default NavBar;
