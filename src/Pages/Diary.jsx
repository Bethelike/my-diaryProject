import { useState, useEffect } from "react";

const Diary = () => {
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  useEffect(() => {
    const entries = JSON.parse(localStorage.getItem("diaryEntries") || "[]");
    const today = entries.find(e => e.date === date);
    const newText = today ? today.text : "";

    setText(prev => (prev!== newText ? newText : prev));
  }, [date]);

  const saveDiary = () => {
    let entries = JSON.parse(localStorage.getItem("diaryEntries") || "[]");
    const index = entries.findIndex(e => e.date === date);

    if (index !== -1) {
      entries[index].text = text;
    } else {
      entries.push({date, text });
    }

    localStorage.setItem("diaryEntries", JSON.stringify(entries));
    alert("Diary saved!");
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4"> Event For Today! {date}</h2>

      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        className="border p-2 rounded mb-4 block w-full"
      />

      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        className="border p-3 rounded w-full h-48 mb-4"
      />

      <button
        onClick={saveDiary}
        className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        save me
      </button>
    </div>
  );
};

export default Diary;
