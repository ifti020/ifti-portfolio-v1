import React from 'react';

import { FaTrophy, FaCertificate } from 'react-icons/fa';
import {achievementsData} from "../data/achievements.ts";

const Achievements: React.FC = () => {
    return (
        <section id="achievements">
            <h2 className="fw-bold mb-4">Achievements</h2>
            <div className="row g-4">
                {achievementsData.map((ach, idx) => (
                    <div key={idx} className="col-md-6">
                        <div className="card border-0 bg-body-tertiary hover-card p-4 h-100">
                            <div className="d-flex align-items-start gap-3">
                                <div className="text-warning fs-3 mt-1"><FaTrophy /></div>
                                <div>
                                    <h5 className="fw-bold mb-2">{ach.title}</h5>
                                    <p className="text-muted mb-3">{ach.description}</p>

                                    {ach.certificateUrl && (
                                        <a href={ach.certificateUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-secondary d-inline-flex align-items-center gap-2">
                                            <FaCertificate /> View Certificate
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

export default Achievements;