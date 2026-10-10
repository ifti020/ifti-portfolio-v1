import React from 'react';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { personalData } from '../data/personal';

interface NavbarProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#">{personalData.name}</a>
                <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center text-lg-start align-items-lg-center">
                        <li className="nav-item">
                            <a className="nav-link py-3 py-lg-2" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-3 py-lg-2" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-3 py-lg-2" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-3 py-lg-2" href="#achievements">Achievements</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-3 py-lg-2" href="#contact">Contact</a>
                        </li>

                        {/* Theme Toggle Button */}
                        <li className="nav-item mt-3 mt-lg-0 ms-lg-3 mb-3 mb-lg-0 d-flex justify-content-center">
                            <button onClick={toggleTheme} className="btn btn-outline-secondary btn-sm border-0 px-4 px-lg-2 py-2 py-lg-1 rounded-pill d-inline-flex align-items-center">

                                {/* Mobile View: Icon + Text */}
                                <span className="d-flex d-lg-none align-items-center">
                                    {theme === 'light' ? (
                                        <><BsMoonStarsFill className="me-2" /> Dark Mode</>
                                    ) : (
                                        <><BsSunFill className="me-2" /> Light Mode</>
                                    )}
                                </span>

                                {/* Laptop View: Only Icon */}
                                <span className="d-none d-lg-flex align-items-center">
                                    {theme === 'light' ? <BsMoonStarsFill /> : <BsSunFill />}
                                </span>

                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;