import {GET_POSTS,POST_ERROR,UPDATE_LIKES,DELETE_POST,ADD_POST} from '../actions/types';

const initialState={
    posts: [],
    post: null,
    loading: true,
    error: {},
}

// eslint-disable-next-line
export default function (state=initialState,action){
    const {type,payload} = action;

    switch(type){
        case GET_POSTS:
            return {...state,state: payload,loading: false}
        case POST_ERROR:
            return {...state,error: payload,loading: false}
        case UPDATE_LIKES:
            return {...state,posts: state.posts.map(post=>post._id===payload._postId ? {...post,likes: payload.likes} : post),loading:false}
        case DELETE_POST:
            return {...state,posts: state.posts.filter(post=>post._id !== payload),loading: false}
        case ADD_POST:
            return {...state,posts: [state.posts,payload],loading: false}
        default:
            return state;
    }
}