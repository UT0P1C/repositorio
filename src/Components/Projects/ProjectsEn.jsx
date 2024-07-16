import { useState, useEffect } from "react";
import "./Projects.css";

const ProjectsEn = () => {
  const [repositories, setRepositories] = useState([]);
  const username = "UT0P1C"; // Substitua pelo nome de usuário desejado

  useEffect(() => {
    fetchRepositories();
  }, []);

  const fetchRepositories = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }
      const data = await response.json();
      setRepositories(data);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  };

  return (
    <div className="repositories-container">
      <h1>My github projects :D</h1>
      <ul className="repositories-list">
        {repositories.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsEn;
