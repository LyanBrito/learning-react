import React, { Component } from "react";
import NoteCard from "../NoteCard/NoteCard";

export default class NoteList extends Component {
    render() {
        return (
            <ul>
                {/* aqui, eu estou criando um array de string, e ele vai retornar a lista o mesmo numero de srings no meu array 
                na div eu chamo a variavel categoria que vao me trazer cada string q eu setei no Array.of   
                */}
                {Array.of("Trabalho", "Escola", "Pessoal").map((categoria) => {
                    return (
                        <li>
                            <div>{categoria}</div>
                            <NoteCard />
                        </li>
                    )
                }
                )}
            </ul>
        );

    }

}