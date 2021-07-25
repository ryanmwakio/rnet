import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
      
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/" className="nav-brand nav-link">RNET</Link>
            </h1>
            <ul>
                <li><Link to="#" className="nav-link">Developers</Link></li>
                <li><Link to="/register" className="nav-link">Register</Link></li>
                <li><Link to="/login" className="nav-link">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;


