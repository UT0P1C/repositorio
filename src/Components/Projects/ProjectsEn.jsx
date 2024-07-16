import { useState, useEffect } from "react";
import "./Projects.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactMarkdown from "react-markdown";
import axios from "axios";

const ProjectsEn = () => {
  // eslint-disable-next-line no-unused-vars
  const [repositories, setRepositories] = useState([
    {
      name: "advice-generator",
      html_url: `https://github.com/UT0P1C/advice-generator`,
      branch: "main",
    },
    {
      name: "linktree",
      html_url: `https://github.com/UT0P1C/linktree`,
      branch: "master",
    },
    // Adicione outros repositórios conforme necessário
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readmeContent, setReadmeContent] = useState(null);
  const username = "UT0P1C"; // Substitua pelo nome de usuário desejado

  const fetchReadmeContent = async (repo, branch) => {
    try {
      const response = await axios.get(
        `https://raw.githubusercontent.com/${username}/${repo.name}/${branch}/README.md`
      );
      console.log(response.data); // Debug: Verifica se o conteúdo do README.md está sendo carregado corretamente
      return response.data;
    } catch (error) {
      console.error(
        `Error fetching README.md for ${repo.name} (${branch}):`,
        error
      );
      return null; // Retorna null em caso de erro para não quebrar a renderização
    }
  };

  useEffect(() => {
    const loadReadme = async () => {
      if (repositories.length > 0 && repositories[currentSlide]) {
        const repo = repositories[currentSlide];
        const content = await fetchReadmeContent(repo, repo.branch);
        setReadmeContent(content);
      }
    };

    loadReadme();
  }, [repositories, currentSlide]);

  const settings = {
    dots: false,
    fade: true, // Usar o efeito fade para transição suave
    speed: 1000, // Ajuste a velocidade da transição (em milissegundos)
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className="repositories-container">
      <h1 className="title">Alguns projetos do meu Github</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {repositories.map((repo, index) => (
            <div key={index} className="slick-slide">
              {index === currentSlide && (
                <div className="card">
                  <h2>{repo.name}</h2>
                  <p>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {repo.html_url}
                    </a>
                  </p>
                  {readmeContent && (
                    <ReactMarkdown>{readmeContent}</ReactMarkdown>
                  )}
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectsEn;
