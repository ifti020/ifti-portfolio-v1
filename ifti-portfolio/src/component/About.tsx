import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about">
            <h2 className="fw-bold mb-4">About Me</h2>
            <div className="row">
                <div className="col-md-8">
                    <p className="text-muted">
                        I'm a Computer Science and Engineering graduate from Bangladesh Army University of Science and Technology, Saidpur (BAUST).
                        My primary focus is backend development with Java and Spring Boot, including API development, database integration, authentication, and application logic.
                    </p>
                    <p className="text-muted">
                        Alongside backend development, I also work with React and TypeScript to build user interfaces and integrate them with backend services.
                        I enjoy building practical web applications and exploring new technologies to expand my development skills.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;