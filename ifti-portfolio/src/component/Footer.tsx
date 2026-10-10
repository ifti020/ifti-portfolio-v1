import React from 'react';
import { personalData } from '../data/personal';

const Footer: React.FC = () => {
    return (
        <footer className="text-center py-4 bg-body-tertiary border-top">
            <div className="container text-muted small">
                <p className="mb-1">Built with React, TypeScript & Bootstrap</p>
                <p className="mb-0">© {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;