// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <Link to="/" className="text-lg font-bold">MemeForge</Link>
      <Link to="/create" className="bg-blue-500 px-4 py-2 rounded">Create Meme</Link>
    </nav>
  );
};

export default Navbar;