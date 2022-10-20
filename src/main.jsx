import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import logo from "../src/assets/schoolhacks-logo.png";
import './styles/main.css'
import Home from "./components/Home.jsx";
import Workshops from "./components/Workshops";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
        <div className="main">
            <header className="container">
                <img
                    className="logo"
                    src={logo}
                    alt="SchoolHacks logo"
                    title="SchoolHacks | Home"
                />
                <nav>
                    {/*Link*/}
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<Home titel="Welcome to SchoolHacks"/>}/>
                <Route path="/workshops" element={<Workshops/>}/>
            </Routes>

            <footer className="container">
                &copy;2022 | <a
                href="https://www.schoolhacks.eu"
                target="_blank"
                rel="noreferrer noopener"
            >SchoolHacks</a>
            </footer>
        </div>
        </BrowserRouter>
    </React.StrictMode>
)
