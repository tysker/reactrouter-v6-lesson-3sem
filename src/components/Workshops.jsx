import { Outlet, NavLink, Link } from "react-router-dom";
import { getWorkshops } from "../api";

export default function Workshops() {
    const workshops = getWorkshops();
    return (
        <div className="container">
            <h1>Workshop Categories</h1>

            <ul className="workshops">
                {workshops.map(work => (
                    <li key={work.id}>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "workshop-active" : null
                            }
                            to={work.id}
                        >
                            {work.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
}
