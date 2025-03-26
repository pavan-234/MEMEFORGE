// src/pages/Home.jsx
import MemeCard from "../components/MemeCard";

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Trending Memes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MemeCard imageUrl="https://via.placeholder.com/300" />
      </div>
    </div>
  );
};

export default Home;