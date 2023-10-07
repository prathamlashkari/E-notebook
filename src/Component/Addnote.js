import React, { useContext, useState } from 'react'
import newcontext from "../context/noteContext"

export default function Addnote() {
  const context = useContext(newcontext)
  const { addnote } = context
  const [note, setNote] = useState({ title: "", description: "", tag: "default" })
  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  const handleclick = (e) => {
    e.preventDefault()
    addnote(note.title, note.description, note.tag)
  }

  return (
    <div>
      <h1>Add notes</h1>
      <form>
        <div className="mb-3 my-5">
          <label htmlFor="Title" className="form-label"><h4>Title</h4>  </label>
          <input type="text" className="form-control" id="title" name='title' onChange={onchange} aria-describedby="emailHelp" />

        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label"><h4>Description</h4></label>
          <input type="text" className="form-control" id="description" name='description' onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label"><h4>Tag</h4></label>
          <input type="text" className="form-control" id="tag" name='tag' onChange={onchange} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleclick} >Submit</button>
      </form>
    </div>
  )
}
