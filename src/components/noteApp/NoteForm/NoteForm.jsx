import React, { Component } from "react";
import { FormButton, FormContainer, FormInput, FormTArea } from "./style";

export default class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.title = "";
        this.note = "";
    }
    _handleTextChange(e) {
        e.stopPropagation();
        this.note = e.target.value;

    }
    _handleTitleChange(e) {
        e.stopPropagation();
        this.title = e.target.value;
    }
    _newNote(e) {
        e.preventDefault();
        e.stopPropagation()
        this.props.newNote(this.title, this.note)
     

    }

    render() {
        return (
            <FormContainer
                onSubmit={this._newNote.bind(this)}>
                <h1>Write a note!</h1>
                <FormInput
                    type="text"
                    placeholder="Title"
                    id="title"
                    onChange={this._handleTitleChange.bind(this)} />
                <FormTArea
                    rows={15}
                    placeholder="Your Note"
                    id="note"
                    onChange={this._handleTextChange.bind(this)} />
                <FormButton>SUBMIT</FormButton>
            </FormContainer>

        )

    }

}