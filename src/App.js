import React from "react";
import NoteList from "./components/noteApp/NoteList/NoteList";
import NoteForm from "./components/noteApp/NoteFrom/NoteForm";

function App() {
  return (
    <section>
    <NoteForm/>
    <NoteList/>
    </section>
);
}

export default App;
