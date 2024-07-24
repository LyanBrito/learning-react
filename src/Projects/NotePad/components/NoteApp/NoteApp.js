import React, { Component } from "react";
import "./NoteApp.css"
import NoteForm from "../NoteForm/NoteForm";
import NoteList from "../NoteList/NoteList";

class NoteApp extends Component {
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



export default NoteApp;
