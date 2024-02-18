import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'




export default function Navbar(props) {
  
  const ChangeToRed=()=>{
    document.body.style.backgroundColor = "#e63946"
    
  }
  
  const ChangeToYellow=()=>{
    document.body.style.backgroundColor = "#ffb703"
  }
  
  const ChangeToBlue=()=>{
    document.body.style.backgroundColor = "#ade8f4"
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/about">{props.aboutText}</Link>
            {/* <a className="nav-link active" href="/about">{props.aboutText}</a> */}
          </li>
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
            <div>
      <ul className="list-group list-group-horizontal mx-4">
  <button className="btn btn-danger "  onClick={ChangeToRed}>Red</button>
  <button className="btn btn-warning " onClick={ChangeToYellow}>Yellow</button>
  <button className="btn btn-info" onClick={ChangeToBlue}>Blue</button>
    </ul>
    </div>
        <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}> 
            <input className="form-check-input" onClick = {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" id="changeee" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
      </div>
    </div>
  </nav>
  )

  
}


Navbar.propTypes = {
                    title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired
                    }
Navbar.defaultProps = {
    title : 'Set title here',
    aboutText : 'About text here'
}




		
	
