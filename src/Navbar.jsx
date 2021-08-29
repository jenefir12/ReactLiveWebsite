import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';

const Navbar = () =>{
    return(
        <>
          <div className="container">
              <div className="">
              <nav className="navbar navbar-expand-lg navbar-light bg-color">
            <NavLink className="navbar-brand" to="/"><strong>React Js</strong></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink className="nav-link text-black" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-black" to="/gallery">Website</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-black" to="/uiux">Ui/Ux App</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-black" to="/tech">Technology</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-black" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-black" to="/contact">Contact</NavLink>
                </li>
                </ul>
            </div>
            </nav>
              </div>
          </div>
        </>
    );
}
export default Navbar;