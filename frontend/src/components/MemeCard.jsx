const MemeCard = ({ meme }) => {
    return (
      <div className="border rounded-lg shadow-md p-4">
        <img src={meme.imageUrl} alt={meme.title} className="w-full h-auto rounded" />
        <h2 className="text-lg font-semibold mt-2">{meme.title}</h2>
      </div>
    );
  };
  
  export default MemeCard;
  