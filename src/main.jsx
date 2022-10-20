import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.css'
import Home from "./components/Home.jsx";
import Workshops from "./components/Workshops";
import Header from "./components/Header";
import About from "./components/About.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <div className="main">
                <Header/>

                <Routes>
                    <Route path="/" element={<Home titel="Welcome to SchoolHacks"/>}/>
                    <Route path="workshops" element={<Workshops/>}/>
                    <Route path="about" element={<About/>}/>
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
