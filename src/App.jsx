import { useState } from "react";
import NoteInput from "./companents/NoteInput";
import NoteList from "./companents/NoteList";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  return (
    <>
      <div className="app-container">
        <h1 className="app-title">Notes App</h1>
        <NoteInput notes={notes} setNotes={setNotes} />
        <NoteList notes={notes} setNotes={setNotes} />
      </div>
    </>
  );
}

export default App;
