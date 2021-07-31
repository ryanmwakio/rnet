import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Spinner from '../layout/Spinner'
import { getGithubRepos } from '../../actions/profile'

const ProfileGithub = ({username,getGithubRepos,repos}) => {

    useEffect(()=>{
        getGithubRepos(username);
        // eslint-disable-next-line
    },[getGithubRepos]);

    return (
        
        repos===null || repos===undefined || repos.length===0 ? <Spinner/> : (
        // eslint-disable-next-line
        repos.map(repo=>{
         <div key={repo._id}>
            <div className="repo bg-white p-3 my-1">
                <div>
                    <h6><a href={repo.html_url} target="_blank"
                        rel="noopener noreferrer">{repo.name}</a></h6>
                    <p>{repo.description}</p>
                </div>
                <div>
                    <ul>
                    <li className="badge badge-primary">Stars: {repo.stargazers_count}</li>
                    <li className="badge badge-dark">Watchers: {repo.watchers_count}</li>
                    <li className="badge badge-light">Forks: {repo.forks_count}</li>
                    </ul>
                </div>
            </div>
         </div>
        }))
    )
}

ProfileGithub.propTypes = {
    username: PropTypes.string.isRequired,
    getGithubRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
}

const mapStateToProps=state=>({
    repos: state.profile.repos,
});

export default connect(mapStateToProps,{getGithubRepos})(ProfileGithub)
