import React, { Component } from "react";
import { ListConteiner } from "./style";
import NoteCard from "../NoteCard/NoteCard";

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