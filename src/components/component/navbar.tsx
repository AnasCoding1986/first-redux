import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
    return (
        <nav className="maxw-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
            <div className="flex items-center">
                <img className="w-10" src="/src/assets/logo.jpg" alt="" />
            </div>
            <Link to={'/'}>Users</Link>
            <Link to={'/tasks'}>Tasks</Link>
            <div className="ml-auto">
                <ModeToggle/>
            </div>
        </nav>
    )
}