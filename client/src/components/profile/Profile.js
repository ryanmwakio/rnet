import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Spinner from '../layout/Spinner'
import { getProfileById } from '../../actions/profile'
import ProfileTop from './ProfileTop'
import ProfileAbout from './ProfileAbout'
import ProfileExperience from './ProfileExperience'
import ProfileEducation from './ProfileEducation'
import ProfileGithub from './ProfileGithub'

const Profile = ({getProfileById,profile: {profile,loading},auth,match}) => {

    useEffect(()=>{
        getProfileById(match.params.id);
        // eslint-disable-next-line
    },[getProfileById]);
    return (
        <Fragment>
            {profile===null || loading ? <Spinner></Spinner> : <Fragment>
                <Link to="/profiles" className="btn btn-light">Back To Profiles</Link>

                    {auth.isAuthenticated && auth.loading===false && auth.user._id===profile.user._id && (<Link to="/edit-profile" className="btn btn-dark">Edit Profile</Link>)}
                    <div className="profile-grid my-1">

                        {/* <!-- Top --> */}
                        <ProfileTop profile={profile}/>

                        {/* <!-- About --> */}
                        <ProfileAbout profile={profile} />

                    {/* <!-- Experience --> */}
                    <div className="profile-exp bg-white p-4">
                        <h5 className="text-primary">Experience</h5>
                            {profile.experience.length>0 ? (
                                profile.experience.map((experience,index)=>{
                                    return (
                                        <ProfileExperience experience={experience} index={index} key={index}></ProfileExperience>
                                    )
                                })
                                
                            ) : (<h6>No experience credentials</h6>)}
                            

                    </div>

                    {/* <!-- Education --> */}
                    <div className="profile-edu bg-white p-4">
                        <h5 className="text-primary">Education</h5>
                        {profile.education.length>0 ? (
                                profile.education.map((education,index)=>{
                                    return (
                                        <ProfileEducation education={education} key={index}></ProfileEducation>
                                    )
                                })
                                
                            ) : (<h6>No education credentials recorded</h6>)}
                    </div>

                    {/* <!-- Github --> */}

                    <div className="profile-github">
                        <h5 className="text-primary my-1 p-2">
                          <i className="fab fa-github"></i> Github Repos
                        </h5>

                        {profile.githubusername&&(
                            <ProfileGithub username={profile.githubusername}/>
                        )}


                    </div>
                    </div>
                </Fragment>}
        </Fragment>
    )
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps=state=>({
    profile: state.profile,
    auth: state.auth,
})

export default connect(mapStateToProps,{getProfileById})(Profile)
