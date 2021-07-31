import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const ProfileItem = ({profile: {user: {_id,name,avatar},status,company,location,skills}}) => {
    return (
        <div>
            <div className="profile bg-light">
          <img
            className="round-img"
            src={avatar}
            alt=""
          />
          <div>
            <h4>{name}</h4>
            <p>{status}{company&&<span>,{company}</span>}</p>
            <p>{location&&<span>{location}</span>}</p>
            <Link to={`/profile/${_id}`} className="btn btn-primary">View Profile</Link>
          </div>

          <ul>
              {skills.slice(0,4).map((skill,index)=>(
                  <li className="text-primary" key={index}>
                   <i className="fas fa-check"></i> {skill}
                </li>
              ))}
          </ul>
        </div>
        </div>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileItem
