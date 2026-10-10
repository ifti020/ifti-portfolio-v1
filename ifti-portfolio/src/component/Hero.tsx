import React from 'react';
import { personalData } from '../data/personal';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="min-vh-100 d-flex align-items-center">
            {/* flex-column-reverse বাদ দিয়ে নরমাল row রাখা হলো */}
            <div className="row w-100 align-items-center">

                {/* Text Section: মোবাইলে ২ নাম্বারে (order-2) এবং ল্যাপটপে ১ নাম্বারে (order-lg-1) দেখাবে */}
                <div className="col-12 col-lg-8 order-2 order-lg-1 mt-5 mt-lg-0">
                    <h5 className="text-muted mb-3">Hi, I'm</h5>
                    <h1 className="display-3 fw-bold mb-3">{personalData.name}</h1>
                    <h2 className="text-secondary mb-4">{personalData.role}</h2>
                    <p className="lead mb-4">{personalData.taglines.join(' | ')}</p>
                    <p className="mb-5 text-muted" style={{ maxWidth: '600px' }}>
                        {personalData.summary}
                    </p>

                    <div className="d-flex gap-3">
                        <a href="#projects" className="btn btn-primary px-4 py-2">View Projects</a>
                        <a href={personalData.resumeUrl} download className="btn btn-outline-primary px-4 py-2">
                            Download CV
                        </a>
                    </div>

                    <div className="mt-5 d-flex gap-4">
                        <a href={personalData.github} target="_blank" rel="noreferrer" className="text-body fs-3">
                            <FaGithub />
                        </a>
                        <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="text-body fs-3">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* Image Section: মোবাইলে ১ নাম্বারে (order-1) এবং ল্যাপটপে ২ নাম্বারে (order-lg-2) দেখাবে */}
                <div className="col-12 col-lg-4 order-1 order-lg-2 d-flex align-items-center justify-content-center mb-5 mb-lg-0">
                    <img
                        src={personalData.imageUrl}
                        alt={personalData.name}
                        className="img-fluid rounded-circle shadow-lg"
                        style={{width: '350px', height: '350px', objectFit: 'cover'}}
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;