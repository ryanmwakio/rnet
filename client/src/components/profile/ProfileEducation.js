import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const ProfileEducation = ({education: {school,degree,location,current,to,from,description}}) => {
    return (
            <div>
                <h6 className="text-dark">{school}</h6>
                <p><Moment format="ll">{from}</Moment> - {!to ? ' Now' : (<Moment format="ll">{to}</Moment>)}</p>
                <p><span className="text-primary">Field of study: </span>{degree}</p>
                <p>
                    <span className="text-primary">Description: </span>{description}
                </p>
            </div>
    )
}

ProfileEducation.propTypes = {
    education: PropTypes.object.isRequired,
    index: PropTypes.number,
}

export default ProfileEducation
