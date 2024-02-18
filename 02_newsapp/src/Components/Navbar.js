import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = (props)=>{
  


    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="#">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/general">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/business">Business</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/entertainment">Entertainment</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/health">Health</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/science">Science</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/sports">Sports</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/technology">Technology</Link>
      </li>
    </ul>
  </div>
</nav>
      </div>
    )
  }

export default Navbar
