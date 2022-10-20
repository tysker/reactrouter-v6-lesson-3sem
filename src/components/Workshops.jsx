import { Outlet, NavLink, Link } from "react-router-dom";
import { getWorkshops } from "../api";

export default function Workshops() {
  const workshops = getWorkshops();
  return (
      <div className="container">
          <h1>Workshop Categories</h1>
      </div>
  );
}
