import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-gray-900 text-white p-4">
      <Link to="/" className="text-xl font-bold">MemeForge</Link>
      <div>
        <Link to="/" className="mx-2 hover:text-blue-400">Home</Link>
        <Link to="/create" className="mx-2 hover:text-blue-400">Create Meme</Link>
      </div>
    </nav>
  );
};

export default Navbar;
