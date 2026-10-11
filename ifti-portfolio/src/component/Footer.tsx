import React, { useState, useEffect } from 'react';
import { personalData } from '../data/personal';
import { FaChevronUp } from 'react-icons/fa';
import '../index.css';

const Footer: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        toggleVisibility();

        window.addEventListener('scroll', toggleVisibility, {
            passive: true,
        });

        return () => {
            window.removeEventListener(
                'scroll',
                toggleVisibility
            );
        };
    }, []);

    const scrollToTop = () => {
        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        window.scrollTo({
            top: 0,
            behavior: reduceMotion ? 'auto' : 'smooth',
        });
    };

    return (
        <footer className="text-center py-4 bg-body-tertiary border-top">
            <div className="container text-muted small">
                <p className="mb-1">
                    Built with React, TypeScript & Bootstrap
                </p>

                <p className="mb-0">
                    © {new Date().getFullYear()} {personalData.name}.
                    All rights reserved.
                </p>
            </div>

            {isVisible && (
                <button
                    type="button"
                    onClick={scrollToTop}
                    className="back-to-top"
                    aria-label="Scroll back to top"
                    title="Back to top"
                >
                    <FaChevronUp
                        size={19}
                        aria-hidden="true"
                    />
                </button>
            )}
        </footer>
    );
};

export default Footer;