import React, { Component } from "react";
import { FormButton, FormContainer, FormInput, FormTArea } from "./style";

export default class NoteForm extends Component {
    render() {
        return (
            <FormContainer>
                <h1>Write a note!</h1>
                <FormInput type="text" placeholder="Title" id="title" />
                <FormTArea placeholder="Your Note" id="note"/>
                <FormButton>SUBMIT</FormButton>
           </FormContainer>

        )

    }

}