import React, { useState } from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom'

export default function Signup(props) {
  const [credentials, setcredentials] = useState({name:"", email: "", password: "",cpassword:"" })
  let history = useNavigate()
  const handleonclick = async (e) => {
    e.preventDefault();
    const {name , email ,password} = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name,email,password })
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem('token', json.authtoken)
      history('/')
      props.showalert('Account created Successfully', 'success')

    }
    else{
      props.showalert('Invalid Credentials', 'danger')
    }
  }
  const onchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="container my-2 " style={{ height: "50em" }}>
        <form onSubmit={onsubmit}>
          <div className="mb-3 my-2"  >
            <label htmlFor="name" style={{ color: "#ebeb5c", fontSize: "2em" }} className="form-label ">User Name</label>
            <input type="name" className="form-control" style={{ background: 'transparent', color: 'white', fontSize: '1.2em', border: "2px solid blue" }} name='name' id="name" aria-describedby="name" onChange={onchange}/>
          </div>
          <div className="mb-3 my-2"  >
            <label htmlFor="email" style={{ color: "#ebeb5c", fontSize: "2em" }} className="form-label ">Email address</label>
            <input type="email" className="form-control" style={{ background: 'transparent', color: 'white', fontSize: '1.2em', border: "2px solid blue" }} name='email' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onchange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" style={{ color: "#ebeb5c", fontSize: "2em" }} className="form-label ">Password</label>
            <input type="password" style={{ background: 'transparent', color: 'white', fontSize: '1.2em', border: "2px solid blue" }} className="form-control" id="exampleInputPassword1" name='password' minLength={5} onChange={onchange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" style={{ color: "#ebeb5c", fontSize: "2em" }} className="form-label ">Confirm Password</label>
            <input type="cpassword" style={{ background: 'transparent', color: 'white', fontSize: '1.2em', border: "2px solid blue" }} className="form-control" id="exampleInputPassword1" name='cpassword' minLength={5}  onChange={onchange} />
          </div>
          <button type="submit" className=" btn btn-primary  btn-lg  my-4 " onClick={handleonclick} >Submit</button>
        </form>
      </div>
    </>
  )
}
