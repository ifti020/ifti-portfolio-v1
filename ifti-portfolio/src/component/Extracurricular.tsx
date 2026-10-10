import React from 'react';
import { extracurricularData } from '../data/extracurricular';
import { FaUsers, FaExternalLinkAlt } from 'react-icons/fa';

const Extracurricular: React.FC = () => {
    return (
        <section id="extracurricular">
            <h2 className="fw-bold mb-4">Extracurricular Activities</h2>
            <div className="row g-4">
                {extracurricularData.map((activity, idx) => (
                    <div key={idx} className="col-md-6">
                        <div className="card border-0 bg-body-tertiary hover-card p-4 h-100">
                            <div className="d-flex align-items-start gap-3">
                                <div className="text-success fs-3 mt-1"><FaUsers /></div>
                                <div>
                                    <h5 className="fw-bold mb-1">{activity.role}</h5>
                                    <h6 className="text-secondary mb-3">
                                        {activity.organization} <span className="text-muted small fw-normal">| {activity.duration}</span>
                                    </h6>
                                    <p className="text-muted mb-4">{activity.description}</p>

                                    {activity.link && (
                                        <a href={activity.link} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-secondary d-inline-flex align-items-center gap-2 mt-auto">
                                            <FaExternalLinkAlt /> View Organization
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

export default Extracurricular;