const MemeCard = ({ meme }) => {
  if (!meme) {
    return <div className="text-red-500">Error: Meme data is missing!</div>;
  }

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img
        src={meme.imageUrl || "https://via.placeholder.com/300"}
        alt={meme.title || "No Title"}
        className="w-full h-48 object-cover rounded-md"
      />
      <p className="mt-2 text-lg font-semibold">{meme.title || "Untitled Meme"}</p>
    </div>
  );
};

export default MemeCard;
