import {getWorkshops} from "../api";
import {NavLink, Outlet} from "react-router-dom";

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
