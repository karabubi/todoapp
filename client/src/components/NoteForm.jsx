//import { useState } from "react";

//function NoteForm() {
//const [title, setTitle] = useState("");
//const [description, setDescription] = useState("");
// const note = { title, description, userId: user.id };

//const notes = JSON.parse(localStorage.getItem("notes")) || [];
//localStorage.setItem("notes", JSON.stringify([...notes, note]));

//setTitle("");y
// setDescription("");
// };

// <div>
//  <h2>Create Note</h2>
// <form onSubmit={handleSubmit}>
//  <input
//  type="text"
// placeholder="Title"
// value={title}
// onChange={(e) => setTitle(e.target.value)}
// required
// />
//<textarea
// placeholder="Description"
// value={description}
// onChange={(e) => setDescription(e.target.value)}
// required
//></textarea>
//<button type="submit">Submit</button>
//</form>
//</div>
// );
//}

//export default NoteForm;
//-------------------------------------------

// Import React hooks for managing state and effects

import { useState, useEffect } from "react";

function NoteForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = { title, description, userId: user.id };

    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    setTitle("");
    setDescription("");
  };

  const handleDelete = (noteToDelete) => {
    const filteredNotes = notes.filter((note) => note !== noteToDelete);
    setNotes(filteredNotes);
    localStorage.setItem("notes", JSON.stringify(filteredNotes));
  };

  return (
    <div>
      <h2>Create Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      <h2>Your Notes</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <strong>{note.title}</strong> - {note.description}
            <input type="checkbox" onChange={() => handleDelete(note)} /> Delete
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteForm;
