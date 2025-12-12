
const EntryCard = ({ entry }) => {
  return (
    <div className="border p-3 rounded mb-3">
    
      <h3 className="font-bold">{entry.date}</h3>
      <p className="text-gray-700 whitespace-pre-wrap">{entry.text}</p>
    </div>
  );
};

export default EntryCard;
