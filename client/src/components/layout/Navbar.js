import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';

const Navbar = ({auth: {isAuthenticated,loading},logout}) => {
    const authLinks=(
        <ul>

        <li>
            <Link to="/dashboard" className="nav-link">
            <i className="fas fa-user mr-1"></i>{''}
            <span className="hide-sm">Dashboard</span> 
            </Link>
        </li>

            <li>
           
            <a href="/" onClick={logout} className="nav-link">
                <i className="fas fa-power-off mr-1"></i>{''}
                <span className="hide-sm">Logout</span> 
             </a>
            </li>
        </ul>
    );

    const guestLinks=(
        <ul>
            <li><Link to="#" className="nav-link">Developers</Link></li>
            <li><Link to="/register" className="nav-link">Register</Link></li>
            <li><Link to="/login" className="nav-link">Login</Link></li>
         </ul>
    );


    return (
      
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/" className="nav-brand nav-link">RNET</Link>
            </h1>
            {!loading ? (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>) : null}
        </nav>
    );
}

Navbar.propTypes={
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps=state=>({
    auth: state.auth
});

export default connect(mapStateToProps,{logout})(Navbar);


