import React, { Component } from "react";
import { Card, Note, Title } from "./style";

export default class NoteCard extends Component{
    render(){
        return(
            <Card>
            <Title>Title</Title>
            <Note>Your Note</Note>
        </Card>
        )

    }
    

}
