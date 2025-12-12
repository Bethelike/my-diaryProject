import EntryCard from "./EntryCard"; 
import { useState, useEffect } from "react";

const EntryList = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("diaryEntries") || "[]");
      const sorted = [...saved].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setEntries(sorted);
    } catch (e) {
      console.error("error", e);
      setEntries([]);
    }
  }, []);

  return (
    <div>
      {entries.map((entry, index) => (
        <EntryCard key={index} entry={entry} />
      ))}
    </div>
  );
};

export default EntryList;
