import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const ProfileExperience = ({experience: {company,title,location,current,to,from,description}}) => {
    return (
            <div className="col-12">
                <h6 className="text-dark">{company}</h6>
                <p><Moment format="ll">{from}</Moment> - {!to ? ' Now' : (<Moment format="ll">{to}</Moment>)}</p>
                <p><span className="text-primary">Position: </span>{title}</p>
                <p>
                    <span className="text-primary">Description: </span>{description}
                </p>
            </div>
    )
}

ProfileExperience.propTypes = {
    experience: PropTypes.object.isRequired,
    index: PropTypes.number,
}

export default ProfileExperience
