import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addItem(id, title, content) {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: id,
        title: title,
        content: content
      }
    ]);
  }

  function deleteItem(id) {
    console.log(id);
    console.log(notes.length);
    setNotes(notes.filter((note) => id !== note.id));
  }

  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            deleteItem={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
