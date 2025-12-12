import { useState } from "react";

const COLORS = ["#5555", "#808080", "#7a7a7a", "#b8b8b8"];
function NoteList({ notes, setNotes }) {
  const [filter, setFilter] = useState("");
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(filter.toLowerCase())
  );
  const handleDeleteItem = (id) => {
    const filteredItems = notes.filter((item) => item.id !== id);
    setNotes(filteredItems);
    localStorage.setItem("notes", JSON.stringify(filteredItems));
  };
  return (
    <div className="note-list-container">
      {" "}
      <input
        type="text"
        className="filter-input"
        placeholder="Search notes..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="note-groups">
        {COLORS.map((clr) => {
          const groupNotes = filteredNotes.filter((n) => n.color === clr);

          return (
            <div key={clr} className="note-group">
              <h4 className="group-title" style={{ color: clr }}>
                {groupNotes.length} Notes
              </h4>
              <ul className="note-group-ul">
                {groupNotes.map((note) => (
                  <li
                    key={note.id}
                    className="note-item"
                    style={{ backgroundColor: note.color }}
                  >
                    {note.text}
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteItem(note.id)}
                    >
                      &times;
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default NoteList;
