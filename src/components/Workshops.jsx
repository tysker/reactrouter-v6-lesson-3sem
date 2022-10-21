import {getWorkshops} from "../api";
import {Outlet} from "react-router-dom";

export default function Workshops() {
    const workshops = getWorkshops();
    return (
        <div className="container">
            <h1>Workshop Categories</h1>
            <ul className="workshops">
                {workshops.map(work => (
                    <li key={work.id}>
                        {work.name}
                    </li>
                ))}
            </ul>
            <Outlet/>
        </div>
    );
}
