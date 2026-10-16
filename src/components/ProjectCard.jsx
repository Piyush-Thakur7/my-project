import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

function ProjectCard({ project = {} }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="card project-card">
      <div className="project-image">
        {project.image && !imgError ? (
          <img
            src={project.image}
            alt={project.title || "Project"}
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="image-placeholder">
            {project.title ? project.title[0] : "P"}
          </span>
        )}
      </div>

      <h3>{project.title}</h3>
      <p className="muted">{project.description}</p>

      {project.technologies && project.technologies.length > 0 && (
        <div className="badges">
          {project.technologies.map((tech) => (
            <span key={tech} className="badge small">
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="project-links">
        {project.github && (
          <a
            className="btn btn-ghost btn-small"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} /> Code
          </a>
        )}
        {project.demo && (
          <a
            className="btn btn-primary btn-small"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink size={16} /> Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
