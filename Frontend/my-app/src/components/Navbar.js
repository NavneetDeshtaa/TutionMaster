import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='container mt-3 mb-3'>
      
      <nav className="navbar navbar-expand-lg bg-body-dark">
  <div className="container-fluid">
    <Link className="navbar-brand " style={{"fontSize":"50px"}} to="/">TutionMaster</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" style={{"fontSize":"25px"}} to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Class
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item"  style={{"fontSize":"20px"}}  href="/">1st - 5th</Link></li>
            <li><Link className="dropdown-item"  style={{"fontSize":"20px"}}  href="/">6th - 10th</Link></li>
            <li><Link className="dropdown-item"  style={{"fontSize":"20px"}}  href="/">+1 - +2</Link></li>
            
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" style={{"fontSize":"25px"}}  href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Subjects
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" style={{"fontSize":"23px"}}  href="/">Mathematics</Link></li>
            <li><Link className="dropdown-item" style={{"fontSize":"23px"}}  href="/">Physics</Link></li>
            <li><Link className="dropdown-item" style={{"fontSize":"23px"}}  href="/">Chemistry</Link></li>
            <li><Link className="dropdown-item" style={{"fontSize":"23px"}}  href="/">Hindi</Link></li>
            <li><Link className="dropdown-item" style={{"fontSize":"23px"}}  href="/">English</Link></li>
            <li><Link className="dropdown-item" style={{"fontSize":"23px"}}  href="/">Social Science</Link></li>

            
          </ul>
        </li>


      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" style={{"fontSize":"30px"}}  type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
