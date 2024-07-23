import React, { Component } from "react";
import NoteCard from "../NoteCard/NoteCard";
// import { List } from "../NoteCard/style";
import { ListConteiner } from "./style";

export default class NoteList extends Component {
    render() {
        return (
            <ListConteiner>
              
                {Array.of("Trabalho", "Escola", "Pessoal", "penis").map((categoria, index) => {
                    return (
                       
                            <NoteCard />

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