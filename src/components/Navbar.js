import React from 'react'

function Navbar() {
  const crudHeading = {
    fontWeight: 600,
    fontFamily: "Sans-Serif",
    fontSize: '22px'
  };
  const icon = {
    fontSize: '22px'
  };
  return (
    <>
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand mx-2" href="#" style={crudHeading}><span style={icon}>&#8801;</span>&nbsp;&nbsp;&nbsp;CRUD Operations</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar