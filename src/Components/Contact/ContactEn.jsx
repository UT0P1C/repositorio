// src/components/ContactEn.jsx
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactEn = () => {
  return (
    <div className="main-container">
      <h2 className="title">Contact Me :D</h2>
      <ul className="social-links">
        <li>
          <a
            className="link-btn"
            href="https://www.linkedin.com/in/johab-vinicius/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </li>
        <li>
          <a
            className="link-btn"
            href="https://github.com/UT0P1C"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> Github
          </a>
        </li>
        <li>
          <a
            className="link-btn"
            href="mailto:ljonham@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
        </li>
        <li>
          <a
            className="link-btn"
            href="https://x.com/esq1z0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} /> Twitter/X
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactEn;
