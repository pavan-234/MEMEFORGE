import { useEffect, useState } from "react";
import memeAPI from "../api/memeAPI";
import MemeCard from "../components/MemeCard";

const Home = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadMemes = async () => {
      try {
        const fetchedMemes = await memeAPI.fetchMemes();
        setMemes(fetchedMemes);
      } catch (err) {
        setError("Failed to load memes. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadMemes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🔥 Trending Memes</h1>

      {loading && <p className="text-center text-gray-300">Loading memes...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {memes.length > 0 ? (
          memes.map((meme) => <MemeCard key={meme._id} meme={meme} />)
        ) : (
          !loading && <p className="text-center col-span-full">No memes found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
