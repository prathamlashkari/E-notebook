import Notecontext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  let host = "http://localhost:5000"
  const notesinitial = []
  const [notes, setnotes] = useState(notesinitial);

  // For getting all notes
  const getnotes = async () => {
    // Api call
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
    });
    const json = await response.json();
    setnotes(json)
  }


  // Add notes
  const addnote = async (title, description, tag) => {
    // Api call
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    })
    const note = await response.json();
    setnotes(notes.concat(note));
  }
  // delete notes
  const deletenote = async (id) => {

    //Api call for the deleting of the note
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        }
      })
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Update the local state by removing the deleted note
      setnotes(notes.filter(note => note._id !== id));

    } catch (error) {
      console.error('Error deleting note:', error);
    }

  }


  // Update notes
  const editnote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    })
    const json = await response.json();
    console.log(json)

    let newnote = JSON.parse(JSON.stringify(notes))

    for (let i = 0; i < notes.length; i++) {
      const element = newnote[i];
      if (element._id === id) {
        newnote[i].title = title;
        newnote[i].description = description;
        newnote[i].tag = tag;
        break;
      }
    }
    console.log(id, notes)
    setnotes(newnote)
  }

  return (
    <Notecontext.Provider value={{ notes, addnote, deletenote, editnote, getnotes }}>
      {props.children}
    </Notecontext.Provider>
  )
}

export default NoteState;