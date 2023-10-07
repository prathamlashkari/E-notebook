import Notecontext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesinitial = [
    {
      "_id": "650c553c8d95a3a5b4a31e99c",
      "user": "650999bd167ac5583b98aca0",
      "title": "Vaishali",
      "description": "Kya kar rahi hai vaishali",
      "tag": "golu",
      "Date": "2023-09-21T14:37:48.146Z",
      "__v": 0
    },
    {
      "_id": "650d56279e74f59f333334ef5",
      "user": "650999bd167ac5583b98aca0",
      "title": "Vaishali meri",
      "description": "Achi lagti hai after 1 year bhi",
      "tag": "golu",
      "Date": "2023-09-22T08:53:59.162Z",
      "__v": 0
    }
    ,
    {
      "_id": "650d56279e74f259f33334ef5",
      "user": "650999bd167ac5583b98aca0",
      "title": "Vaishali meri",
      "description": "Achi lagti hai after 1 year bhi",
      "tag": "golu",
      "Date": "2023-09-22T08:53:59.162Z",
      "__v": 0
    }
    ,
    {
      "_id": "650d56279e741f59f33334ef5",
      "user": "650999bd167ac5583b98aca0",
      "title": "Vaishali meri",
      "description": "Achi lagti hai after 1 year bhi",
      "tag": "golu",
      "Date": "2023-09-22T08:53:59.162Z",
      "__v": 0
    }
  ]
  const [notes, setnotes] = useState(notesinitial);

  // Add notes
  const addnote = (title , description , tag) => {
    const note = {
      "_id": "650d56279e74f259f33334ef5",
      "user": "650999bd167ac5583b98aca0",
      "title": title,
      "description": description,
      "tag": tag,
      "Date": "2023-09-22T08:53:59.162Z",
      "__v": 0
    };
    setnotes(notes.concat(note));
  }
  // delete notes
  const deletenote = (id) => {
    console.log("delete ho gaya vaishali "+id)
    const newNote  = notes.filter((note)=>{return note._id !== id})
    setnotes(newNote)
  }
  // edit notes
  const editnote = () => {

  }

  return (
    <Notecontext.Provider value={{ notes, addnote, deletenote, editnote }}>
      {props.children}
    </Notecontext.Provider>
  )
}

export default NoteState;