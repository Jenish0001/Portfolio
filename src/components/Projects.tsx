import { useEffect, useState } from "react";
import { getRepos } from "../api/getRepos";
import "../styles/Projects.css";

export default function Projects() {
  const [repos, setRepos] = useState<any[]>([]);
  const username = "jenish0001";

  useEffect(() => {
    getRepos(username)
      .then(setRepos)
      .catch(console.error);
  }, []);

  return (
    <div className="projects-container">
      <h1>My GitHub Projects</h1>
      <div className="projects-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="project-card">
            <h2 className="project-title">{repo.name}</h2>
            <p>{repo.description || "No description yet"}</p>

            <a href={repo.html_url} target="_blank">
              View Repo →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
