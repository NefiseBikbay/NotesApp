import React, { useState } from "react";

const COLORS = ["#5555", "#808080", "#7a7a7a", "#b8b8b8"];
function NoteInput({ notes, setNotes }) {
  const [text, setText] = useState("");
  const [color, setColor] = useState(COLORS[0]);

  const handleAddNote = () => {
    if (text.trim() === "") return;
    const newNote = {
      id: crypto.randomUUID(),
      text: text,
      color: color,
    };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    setText("");
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <div className="note-input">
      <textarea
        name="noteArea"
        className="note-textarea"
        id="noteArea"
        placeholder="Write a note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="input-row">
        {COLORS.map((clr) => (
          <div
            key={clr}
            className={`color-box ${color === clr ? "selected" : ""}`}
            style={{ backgroundColor: clr }}
            onClick={() => setColor(clr)}
          />
        ))}
        <button className="addButton" onClick={handleAddNote}>
          Add Note
        </button>
      </div>
    </div>
  );
}
export default NoteInput;
