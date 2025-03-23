import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Welcome to MemeForge</h1>
      <p className="text-lg text-gray-600 mb-4">Create and share your own memes easily!</p>
      <Link to="/create" className="bg-blue-500 text-white px-6 py-3 rounded-md">
        Start Creating
      </Link>
    </div>
  );
};

export default Home;
