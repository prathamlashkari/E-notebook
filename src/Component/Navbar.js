import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../resources/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navbar(props) {
  let navigate = useNavigate();
  const handleclick = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }
  let location = useLocation();
  useEffect(() => {
  }, [location])
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  sticky-top" data-bs-theme="dark">
        <div className="container-fluid  ">
          <Link className="navbar-brand mx-4" to="/"> <img src={logo} alt="error" width="45" height="45" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} style={{ fontSize: "1.4em", color: location.pathname === '/' ? 'yellow' : '', marginRight: '2em' }} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item ">
                <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} style={{ fontSize: "1.4em", color: location.pathname === '/about' ? 'yellow' : '' }} to="about">About</Link>
              </li>
            </ul>
            {!localStorage.getItem('token') ? <form >
              <Link className="btn btn-outline-info mx-1 btn-sm"  to="/login" role="button" aria-disabled="true">Login</Link>
              <Link className="btn btn-outline-info  mx-3 btn-sm" to="/signup" role="button" aria-disabled="true">Sign Up</Link>
            </form> : <button className='btn btn-outline-info  mx-3 btn-sm'  aria-disabled="true" onClick={handleclick}>Logout</button>}
          </div>
        </div>
      </nav>
    </>
  )
}
