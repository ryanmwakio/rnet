import axios from 'axios';
import {setAlert} from './alert';
import { GET_POSTS,POST_ERROR,UPDATE_LIKES,DELETE_POST,ADD_POST } from './types';

//Get posts
export const getPosts=()=> async dispatch=>{
    try {
        const res=await axios.get('/api/posts');

        dispatch({
            type: GET_POSTS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({type: POST_ERROR,payload: {msg: err.response.statusText, status: err.response.status}});
    }
}

//Add Like
export const addLike= postId => async dispatch=>{
    try {
        const res=await axios.put(`/api/posts/like/${postId}`);

        dispatch({
            type: UPDATE_LIKES,
            payload: {postId,likes: res.data},
        });
    } catch (err) {
        dispatch({type: POST_ERROR,payload: {msg: err.response.statusText, status: err.response.status}});
    }
}

//Remove Like
export const removeLike= postId => async dispatch=>{
    try {
        const res=await axios.put(`/api/posts/unlike/${postId}`);

        dispatch({
            type: UPDATE_LIKES,
            payload: {postId,likes: res.data},
        });
    } catch (err) {
        dispatch({type: POST_ERROR,payload: {msg: err.response.statusText, status: err.response.status}});
    }
}

//Delete Post
export const deletePost= postId => async dispatch=>{
    try {
        const res=await axios.delete(`/api/posts/${postId}`);

        dispatch({
            type: DELETE_POST,
            payload: postId,
        });

        dispatch(setAlert('Post removed','success'));
    } catch (err) {
        dispatch({type: POST_ERROR,payload: {msg: err.response.statusText, status: err.response.status}});
    }
}

//Add Post
export const addPost= formData => async dispatch=>{

    const config={
        headers: {
            "Content-Type":"application/json"
        }
    }

    try {
        const res=await axios.post('/api/posts',formData,config);

        dispatch({
            type: ADD_POST,
            payload: res.data,
        });

        dispatch(setAlert('Post created','success'));
        
    } catch (err) {
        dispatch({type: POST_ERROR,payload: {msg: err.response.statusText, status: err.response.status}});
    }
}