import React from 'react';
import { projectsData } from '../data/projects';
import { FaGithub, FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2 className="fw-bold mb-4">Projects</h2>
      <div className="row g-4">
        {projectsData.map(project => (
          <div key={project.id} className="col-lg-6">
            <div className="card h-100 hover-card shadow-sm border-0">
              {project.image && (
                <img src={project.image} className="card-img-top" alt={project.title} style={{height: '200px', objectFit: 'cover'}} />
              )}
              <div className="card-body d-flex flex-column p-4">
                <h4 className="card-title fw-bold mb-3">{project.title}</h4>
                <p className="card-text text-muted mb-4">{project.description}</p>

                <div className="mb-4">
                  <strong className="d-block mb-2 text-secondary">Technologies:</strong>
                  <div className="d-flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="badge bg-success bg-opacity-10 text-success border border-success-subtle">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto d-flex gap-3 pt-3 border-top">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm d-flex align-items-center gap-2">
                    <FaGithub /> Source Code
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {project.reportUrl && (
                    <a href={project.reportUrl} target="_blank" rel="noreferrer" className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-2">
                      <FaFilePdf /> Report
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;