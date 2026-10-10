// import { useState } from 'react'
import './App.css'
import {useEffect, useState} from "react";
import Navbar from "./component/Navbar.tsx";
import Footer from "./component/Footer.tsx";
import Hero from "./component/Hero.tsx";
import Skills from "./component/Skills.tsx";
import About from "./component/About.tsx";
import Projects from "./component/Projects.tsx";

function App() {
    // Theme state: default is light mode.
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    // Effect to toggle Bootstrap's native dark mode attribute
    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

  return (
    <>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="container">
            <Hero/>
            <About/>
            <Skills />
            <Projects />

        </main>
        <Footer/>
    </>
  )
}

export default App
