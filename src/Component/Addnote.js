import React, { useContext, useState } from 'react'
import newcontext from "../context/noteContext"
import '../App.css'
export default function Addnote(props) {
  const context = useContext(newcontext)
  const { addnote } = context
  const [note, setNote] = useState({ title: "", description: "", tag: "" })
  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  const handleclick = (e) => {
    e.preventDefault()
    addnote(note.title, note.description, note.tag)
    setNote({ title: "", description: "", tag: "" })
    props.showalert('Note added SuccessFully','success')
  }

  return (
    <div className='headcolour'>
      <h1>Add notes</h1>
      <form>
        <div className="mb-3 my-5 ">
          <label htmlFor="Title" className="form-label "><h4>Title</h4>  </label>
          <textarea  type="text" className="form-control " style={{background:'transparent' , color:'white', fontSize:'1.2em', border:"2px solid blue"}} id="title" name='title' placeholder='Write title of your note here' onChange={onchange} aria-describedby="emailHelp" value={note.title} required />

        </div>
        <div className="mb-3 ">
          <label htmlFor="description" className="form-label"><h4>Description</h4></label>
          <textarea type="text" className="form-control " id="description"  style={{background:'transparent' , color:'white', fontSize:'1em', border:"2px solid blue"}}  name='description' placeholder='Write description here' onChange={onchange} value={note.description} required />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label"><h4>Tag</h4></label>
          <input type="text" className="form-control inputs"  style={{background:'transparent' , color:'white', fontSize:'1em', border:"2px solid blue"}}  id="tag" name='tag' placeholder='Write tag here' onChange={onchange} value={note.tag} />
        </div>
        <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary " onClick={handleclick} >Submit</button>
      </form>
    </div>
  )
}
