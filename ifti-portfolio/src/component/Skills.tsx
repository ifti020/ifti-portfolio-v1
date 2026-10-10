import React from 'react';
import { skillsData } from '../data/skills';

const Skills: React.FC = () => {
    return (
        <section id="skills">
            <h2 className="fw-bold mb-4">Technical Skills</h2>
            <div className="row g-4">
                <SkillCategory title="Languages" skills={skillsData.languages} />
                <SkillCategory title="Backend Frameworks" skills={skillsData.backend} />
                <SkillCategory title="Frontend" skills={skillsData.frontend} />
                <SkillCategory title="Databases" skills={skillsData.databases} />
                <SkillCategory title="Tools" skills={skillsData.tools} />
                <SkillCategory title="Concepts" skills={skillsData.concepts} />
            </div>
        </section>
    );
};

// Helper component for skill cards
const SkillCategory: React.FC<{title: string, skills: string[]}> = ({ title, skills }) => (
    <div className="col-md-4">
        <div className="card h-100 border-0 bg-body-tertiary hover-card p-3">
            <h5 className="card-title fw-bold">{title}</h5>
            <div className="d-flex flex-wrap gap-2 mt-3">
                {skills.map(skill => (
                    <span key={skill} className="badge bg-secondary bg-opacity-25 text-body rounded-pill px-3 py-2">
            {skill}
          </span>
                ))}
            </div>
        </div>
    </div>
);

export default Skills;