import React from 'react'
import ReactDOM from 'react-dom/client'
import logo from "../src/assets/schoolhacks-logo.png";
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="main">
            <header className="container">
                <img
                    className="logo"
                    src={logo}
                    alt="SchoolHacks logo"
                    title="SchoolHacks | Home"
                />
            </header>
            <footer className="container">
                &copy;2022 | <a
                href="https://www.schoolhacks.eu"
                target="_blank"
                rel="noreferrer noopener"
            >SchoolHacks</a>
            </footer>
        </div>
    </React.StrictMode>
)
