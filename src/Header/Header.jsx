import React from 'react';
import logo from '../Assets/images/logo.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i className="fas fa-bars"></i></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="">Post Project</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/listings">Browse Projects</Link></li>
                    <li className="nav-item mbl-nav"><Link className="nav-link" to="/login">Login</Link></li>
                    <li className="nav-item mbl-nav"><Link className="nav-link" to="/register">Register</Link></li>
                    </ul>
                </div>
                </nav>
                <Link className="logo" to="/"><img src={logo} alt="" /></Link>
                <div className="rt-btn"> <Link to="/login" className="get-start-btn">Login</Link> <Link to='/register' className="get-start-btn">Register</Link> </div>
            </div>
        </header>
    );
    
}

export default Header;