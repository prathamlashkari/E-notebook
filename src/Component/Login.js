import React, { useState } from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom'
export default function Login(props) {
  const [credentials, setcredentials] = useState({ email: "", password: "" })
  let history = useNavigate()
  const handleonclick = async (e) => {

    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem('token', json.authtoken)
      history('/')
      props.showalert('User login SuccessFully ', 'success')

    }
    else {
      props.showalert('Invalid Credentials', 'danger')
    }
  }
  const onchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="container my-4 " style={{ height: "50em" }}>

        <form onSubmit={handleonclick}>
          <div className="mb-3 my-5"  >
            <label htmlFor="email" style={{ color: "#ebeb5c", fontSize: "2em" }} className="form-label ">Email address</label>
            <input type="email" className="form-control" style={{ background: 'transparent', color: 'white', fontSize: '1.2em', border: "2px solid blue" }} name='email' id="exampleInputEmail1" aria-describedby="emailHelp" value={credentials.email} onChange={onchange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" style={{ color: "#ebeb5c", fontSize: "2em" }} className="form-label ">Password</label>
            <input type="password" style={{ background: 'transparent', color: 'white', fontSize: '1.2em', border: "2px solid blue" }} className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onchange} />
          </div>
          <button type="submit" className=" btn btn-primary  btn-lg  my-4 ">Submit</button>
        </form>
      </div>
    </>
  )
}
