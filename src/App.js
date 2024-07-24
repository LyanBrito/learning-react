import React, { Component } from "react";
import NoteList from "./components/noteApp/NoteList/NoteList";
import "./App.css"
import NoteForm from "./components/noteApp/NoteForm/NoteForm";
class App extends Component {
  newNote(title, note){
    console.log('Nota adicionada:', title, note)

  }

   render() {
    return (
      <section className="body">
  
        <NoteForm newNote={this.newNote} />
        <NoteList />
      </section>
    );
  }
}



export default App;
