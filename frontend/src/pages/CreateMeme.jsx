import { useState, useRef } from "react";
import axios from "axios";
import html2canvas from "html2canvas";

const CreateMeme = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [memeImage, setMemeImage] = useState("");
  const memeRef = useRef(null);

  const fetchRandomMeme = async () => {
    const res = await axios.get("https://api.imgflip.com/get_memes");
    const memes = res.data.data.memes;
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    setMemeImage(randomMeme.url);
  };

  const downloadMeme = () => {
    html2canvas(memeRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "meme.png";
      link.click();
    });
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-4 text-blue-400">Create Your Meme</h1>
      <button onClick={fetchRandomMeme} className="bg-blue-500 px-4 py-2 rounded-lg mb-4 hover:bg-blue-600 transition">
        Get Random Meme
      </button>

      <div className="relative w-96" ref={memeRef}>
        {memeImage && (
          <>
            <img src={memeImage} alt="Meme" className="w-full rounded-lg shadow-lg" />
            <h2 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-xl">
              {topText}
            </h2>
            <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-xl">
              {bottomText}
            </h2>
          </>
        )}
      </div>

      <input type="text" placeholder="Top Text" className="p-2 my-2 rounded border bg-gray-800 text-white"
        value={topText} onChange={(e) => setTopText(e.target.value)}
      />
      <input type="text" placeholder="Bottom Text" className="p-2 my-2 rounded border bg-gray-800 text-white"
        value={bottomText} onChange={(e) => setBottomText(e.target.value)}
      />

      <button onClick={downloadMeme} className="bg-green-500 px-4 py-2 rounded-lg mt-4 hover:bg-green-600 transition">
        Download Meme
      </button>
    </div>
  );
};

export default CreateMeme;
