import React, { Component } from "react";

export default class NoteForm extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Title" id="title" />
                <textarea placeholder="Your Note" id="note"></textarea>
                <button>oioi</button>
            </form>

        )

    }

}