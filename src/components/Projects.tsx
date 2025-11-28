import { useEffect, useState } from "react";
import { getRepos } from "../api/getRepos";
import { motion } from "framer-motion";
import "./Projects.css";

export default function Projects() {
  const [repos, setRepos] = useState<any[]>([]);
  const username = "Rojeets";

  useEffect(() => {
    getRepos(username)
      .then(setRepos)
      .catch(console.error);
  }, []);

  return (
        <motion.div
      className="projects-container"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -80 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >

    
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
    
        </motion.div>
  );
}
