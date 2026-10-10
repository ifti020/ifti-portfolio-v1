import React from 'react';
import { personalData } from '../data/personal';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="mb-5">
            <h2 className="fw-bold mb-4">Get In Touch</h2>
            <div className="card border-0 bg-body-tertiary shadow-sm p-5 rounded-4 text-center hover-card">
                <h3 className="mb-4 fw-bold">Interested in working together?</h3>
                <p className="text-muted mb-4 mx-auto" style={{maxWidth: '600px'}}>
                    I am currently looking for Junior Software Engineer and Backend Developer roles.
                    If you have an opportunity or just want to say hi, my inbox is always open.
                </p>

                <div className="d-flex justify-content-center gap-4 flex-wrap mt-4">
                    {/* Modern Indigo Color for Email - Tech Standard */}
                    <a href={`mailto:${personalData.email}`}
                       className="btn px-4 py-2 d-flex align-items-center gap-2 shadow-sm text-white border-0"
                       style={{ backgroundColor: '#4F46E5', transition: '0.3s' }}>
                        <FaEnvelope /> Say Hello
                    </a>

                    {/* Emerald Green for Phone - Universal Standard for Calls */}
                    <a href={`tel:${personalData.phone}`}
                       className="btn px-4 py-2 d-flex align-items-center gap-2 shadow-sm text-white border-0"
                       style={{ backgroundColor: '#10B981', transition: '0.3s' }}>
                        <FaPhoneAlt /> Call Me
                    </a>
                </div>

                <div className="mt-5 text-muted small d-flex align-items-center justify-content-center gap-2">
                    <FaMapMarkerAlt /> {personalData.location}
                </div>
            </div>
        </section>
    );
};

export default Contact;