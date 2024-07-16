import { useState, useEffect } from "react";
import "./About.css";

function About() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const text =
      "Mee chamo Vinicius, tenho 20 anos e sou programador desde os 16 anos, apaixonado por tecnologia desde os 12. Sempre foi meu sonho trabalhar com o que amo e esse é o meu objetivo!\n\n" +
      "Tenho experiência na stack de JS, atuo como fullstack com foco no backend, com React, Vue, NodeJS, e banco de dados relacionais e não relacionais. Tenho experiência comprovada em BDD, TDD, SOLID e Clean Architecture. Tenho familiaridade com metodologias ágeis também!\n\n" +
      "Sinta-se à vontade para me chamar para conversar ☺️ \n \n" +
      "Cursos e especializações: \n " +
      "Análise e Desenvolvimento de Sistemas Estácio, 2023-2025 + Uni.Brasileira Livre, autogerido\n" +
      "CS50: Intro to Computer Science Harvard, 2022 \n" +
      "OOP em Java\n" +
      "JS e TS: FullStack\n" +
      "Testes unitários com Javascript\n" +
      "Udemy, 2022-2024\n" +
      "Cursos avaliados com 4.8+\n";

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length - 1) {
        setDisplayText((prevText) => prevText + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about">
      <div className="text-container">
        <h2 className="title">Sobre mim</h2>
        <p>
          <span className="typing-text">{displayText}</span>
        </p>
        <img
          src="https://avatars.githubusercontent.com/u/34144900?v=4"
          alt="my profile picture"
          className="profile-image"
        />
      </div>
      <span className="line"></span>
    </div>
  );
}

export default About;
