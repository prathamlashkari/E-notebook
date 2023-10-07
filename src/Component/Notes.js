import React,{useContext} from 'react'
import Notesitem from './Notesitem'
import newcontext from "../context/noteContext"
import Addnote from "./Addnote.js";

export default function Notes() {
    const context = useContext(newcontext)
    const {notes } = context
  return (
    <>
      <Addnote/>
    <div className='row my-3 '>
      <h2>Your notes</h2>
      {
        notes.map((note)=>{
          return <Notesitem key ={note._id} note = {note}/>
        })
      }
    </div>
      </>
  )
}
