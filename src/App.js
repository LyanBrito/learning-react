import React from "react";
import NoteList from "./components/noteApp/NoteList/NoteList";
import "./App.css"
import NoteForm from "./components/noteApp/NoteFrom/NoteForm";

function App() {
  return (
    <section className="body">

      <NoteForm />
      <NoteList />
    </section>
  );
}

export default App;
