import React, { Component } from "react";
import { Card, TextNote, TitleNote } from "./style";

export default class NoteCard extends Component{
    render(){
        return(
            <Card>
            <TitleNote>{this.props.title}</TitleNote>
            <TextNote>{this.props.note}</TextNote>
        </Card>
        )

    }
    

}
