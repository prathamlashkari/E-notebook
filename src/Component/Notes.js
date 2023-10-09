import React, { useContext, useEffect, useRef, useState } from 'react'
import Notesitem from './Notesitem'
import newcontext from "../context/noteContext"
import Addnote from "./Addnote.js";
import emptyimg from "../resources/empty.png"
import { useNavigate } from 'react-router-dom'




export default function Notes(props) {
  const context = useContext(newcontext)
  const { notes, getnotes, editnote } = context
  let navigate  = useNavigate();
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

  useEffect(() => {
    if(localStorage.getItem('token')){
    getnotes();
  }
  else{
    navigate ('/login')
  }
  }, [getnotes,navigate ]);

  const ref = useRef(null)
  const refclose = useRef(null)
  const updatenote = (currentnote) => {
    ref.current.click();
    setNote({ id: currentnote._id, etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag })
  }

  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  const handleclick = (e) => {
    editnote(note.id, note.etitle, note.edescription, note.etag);
    props.showalert('Note Edited Successfully', 'success')
    refclose.current.click();
  }

  return (
    <>
      <Addnote showalert={props.showalert} />
      <button type="button" ref={ref} className="btn btn-primary d-none " data-toggle="modal" data-target="#exampleModal">
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{background :"#252323" , color:"white"}}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Notes</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3 my-5">
                  <label htmlFor="Title" className="form-label"><h4>Title</h4>  </label>
                  <input type="text" className="form-control " id="etitle" name='etitle' onChange={onchange} value={note.etitle} aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label"><h4>Description</h4></label>
                  <input type="text" className="form-control" id="edescription" name='edescription' onChange={onchange} value={note.edescription} />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label"><h4>Tag</h4></label>
                  <input type="text" className="form-control" id="etag" name='etag' onChange={onchange} value={note.etag} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refclose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button disabled={note.etitle.length < 5 || note.edescription.length < 5} type="button" className="btn btn-primary " onClick={handleclick}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className='row my-3 headcolour'>
        <h2>Your notes</h2>
        {notes.length === 0 && <img src={emptyimg} style={{ height: '20%', width: '100%', marginBottom: '4em' }} className="rounded" alt="No notes" />}
        {
          notes.map((note) => {
            return <Notesitem key={note._id} showalert={props.showalert} updatenote={updatenote} note={note} />
          })
        }
      </div>
    </>
  )
}
