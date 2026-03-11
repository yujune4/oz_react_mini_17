import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">MiniProject</div>
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>☰</button>
      </div>
      <ul className={`md:flex md:gap-4 absolute md:static bg-blue-500 w-full left-0 md:w-auto ${open ? "top-16" : "top-[-300px]"} transition-all duration-300`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
}