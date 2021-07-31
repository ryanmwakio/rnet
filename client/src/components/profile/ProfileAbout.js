import React,{Fragment} from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({profile: {bio,skills,user: {name}}}) => {
    return (
        <Fragment>
            <div className="profile-about bg-light p-4">
                
                {bio&&(
                <Fragment>
                    <h5 className="text-primary">{name.trim().split(' ')[0]}'s Bio</h5>
                    <p>{bio}</p>
                </Fragment>)}
                <div className="line"></div>
                <h5 className="text-primary">Skill Set</h5>
                <div className="skills">
                {skills.map((skill,index)=>{
                    return <div className="p-1" key={index}><i className="fa fa-check"></i> {skill}</div>
               })}
                 

                </div>
            </div>
        </Fragment>
    )
}

ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileAbout
