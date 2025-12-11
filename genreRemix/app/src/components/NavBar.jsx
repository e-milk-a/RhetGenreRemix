import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className= "navbar">
            <div className="nav-title">CS Gender Gap</div>
            <ul className="nav-links">
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/about">About</Link></li>
            </ul>
        </nav>
    );
}