import React, { useContext } from 'react'
import '../App.css';
import newcontext from "../context/noteContext"


export default function Notesitem(props) {
    const { note, updatenote } = props;
    const context = useContext(newcontext)
    const { deletenote } = context
    return (
        <>
            <div className='my-3  col-md-3'>
                <div className="card " >
                    <div className="card-body carcbackground ">
                        <h5 className="card-title "><strong>Title: </strong>{note.title}</h5>
                        <p className="card-text my-3"><strong>Description: </strong> {note.description}</p>
                        <p> <strong>Tags: </strong><span className="badge text-bg-primary">{note.tag}</span></p>
                        <div className="container icons">
                            <i className="fa-solid fa-sharp fa-trash  fa-lg " onClick={() => { deletenote(note._id); props.showalert('Deleted Successfully: ', 'success'); }}> </i>
                            <i className="fa-sharp fa-regular fa-lg fa-pen-to-square " onClick={() => updatenote(note)}></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
