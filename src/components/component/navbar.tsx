import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="maxw-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
            <div className="flex items-center">
                <img className="w-10" src="/src/assets/logo.jpg" alt="" />
            </div>
            <Link to={'/users'}>Users</Link>
            <Link to={'/tasks'}>Tasks</Link>
        </nav>
    )
}