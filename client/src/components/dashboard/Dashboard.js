import React,{Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import { getCurrentProfile } from '../../actions/profile'
import Spinner from '../layout/Spinner'
import {DashboardActions} from './DashboardActions'


const Dashboard = ({getCurrentProfile,auth: {user},profile: {profile,loading}}) => {
    
 
    useEffect(()=>{
        getCurrentProfile();
    // eslint-disable-next-line
    },[]);

    return loading && profile===null ? <Spinner/> : <Fragment>
        <h1 className="large text-primary">Dashboard</h1>
        <p><i className="fas fa-user"></i> welcome {user && user.name}</p>
        {profile !== null ? 
        <Fragment>
            <DashboardActions></DashboardActions>
            has
        </Fragment> : 
        <Fragment>
            <p>You have not yet set a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-primary my-1">Create Profile</Link>
        </Fragment> }

        </Fragment>
}

// eslint-disable-next-line
Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps=state=>({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard)
