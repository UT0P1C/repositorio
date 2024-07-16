
import { useState, useEffect } from "react";
import "./About.css";

function About() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const text =
      "I'm a technology enthusiast, programming since I was 16 and\n" +
      "passionate about this area since I was 12. Turning my love for\n" +
      "technology into a career has always been my goal, and every day I\n" +
      "feel more fulfilled in this path.\n\n" +
      "As a fullstack developer, I specialized in backend, working with a robust stack of\n" +
      "JavaScript that includes React, Vue, and NodeJS. My experience extends\n" +
      "to relational and non-relational databases, ensuring the\n" +
      "flexibility needed for different projects.\n\n" +
      "I have a strong commitment to code quality and excellence in\n" +
      "development. Principles like BDD, TDD, SOLID, and Clean Architecture\n" +
      "are part of my daily routine, ensuring that my solutions are\n" +
      "efficient, scalable, and well-structured.\n\n" +
      "I believe in the power of agile methodologies to create a dynamic and\n" +
      "collaborative work environment, always focused on delivering value. I'm always\n" +
      "seeking new opportunities to apply my skills and learn\n" +
      "more. If you're looking for a dedicated professional with solid\n" +
      "experience and passion for what they do, I'm ready to discuss how I can\n" +
      "add value to your team. Let's exchange ideas and build something\n" +
      "amazing together! ☺️";

    let index = 0;
    const interval = setInterval(() => {
      if (index < (text.length - 1)) {
        setDisplayText((prevText) => prevText + text[index]);
        index++;
      } else {
        clearInterval(interval); // Parar o intervalo quando o texto estiver completo
      }
    }, 10); // Ajuste o valor para aumentar ou diminuir a velocidade (em milissegundos)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about">
      <div className="text-container">
        <h2 className="title">About me</h2>
        <p>
          <span className="typing-text">{displayText}</span>
        </p>
        <img
          src="https://avatars.githubusercontent.com/u/34144900?v=4"
          alt="my profile picture"
          className="profile-image"
        />
      </div>
    </div>
  );
}

export default About;
