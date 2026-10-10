// import { useState } from 'react'
import './App.css'
import {useEffect, useState} from "react";
import Navbar from "./component/Navbar.tsx";

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
    </>
  )
}

export default App
