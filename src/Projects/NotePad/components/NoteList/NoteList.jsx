import React, { Component } from "react";
import { ListConteiner } from "./style";
import NoteCard from "../NoteCard/NoteCard";

export default class NoteList extends Component {
    render() {
        return (
            <ListConteiner>
              
                {this.props.notes.map((note, index) => {
                    return (
                       <div key={index}>

                            <NoteCard title={note.title} note={note.note}/>
                       </div>

                        // <List key={index}>

                        //     <NoteCard />
                        // </List>
                    )
                }
                )}
            </ListConteiner>
        );

    }

}