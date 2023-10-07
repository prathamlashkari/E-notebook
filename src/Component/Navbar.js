import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../resources/logo.png'

export default function Navbar(props) {

  let location = useLocation();
  useEffect(() => {
  }, [location])
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
        <div className="container-fluid  ">
          <Link className="navbar-brand" to="/"> <img src={logo} alt="error" width="45" height="45" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} style={{ fontSize: "1.4em", color: location.pathname === '/' ? 'yellow' : '' }} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item mx-5">
                <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} style={{ fontSize: "1.4em", color: location.pathname === '/about' ? 'yellow' : '' }} to="about">About</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
