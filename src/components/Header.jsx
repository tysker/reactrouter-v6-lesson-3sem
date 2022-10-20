import { Link } from "react-router-dom";
import logo from "../assets/schoolhacks-logo.png";

export default function Header() {

    return (
        <header className="container">
            <Link to="/">
                <img
                    className="logo"
                    src={logo}
                    alt="SchoolHacks logo"
                    title="SchoolHacks | Home"
                />
            </Link>

            <nav>
                <Link to="/" >Home</Link>
                <Link to="/about">About</Link>
                <Link to="/workshops">Workshops</Link>
            </nav>
        </header>
    );
}
