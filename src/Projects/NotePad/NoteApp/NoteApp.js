import React, { Component } from "react";
import "./NoteApp.css"
import NoteForm from "../components/NoteForm/NoteForm";
import NoteList from "../components/NoteList/NoteList";

class NoteApp extends Component {
  constructor() {
    super();

    this.state = {
      notes:[]

    }
  }
  createNote(title, note) {
    const newNote = {title, note};
    const newNoteArray = [...this.state.notes,newNote]
    const newState = {
      notes:newNoteArray
}
    this.setState(newState)


    console.log('Nota adicionada:', title, note)
  }
  
  render() {
    
    return (
      <section className="body">

        <NoteForm createNote={this.createNote.bind(this)} />
        <NoteList notes={this.state.notes} />
      </section>
    );
  }
}



export default NoteApp;
