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
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                        <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="#achievements">Achievements</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        <li className="nav-item ms-3">
                            <button onClick={toggleTheme} className="btn btn-outline-secondary btn-sm border-0">
                                {theme === 'light' ? <BsMoonStarsFill /> : <BsSunFill />}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;