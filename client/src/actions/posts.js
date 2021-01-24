import {FETCH_ALL, CREATE, DELETE_POST, UPDATE_POST} from '../constants/actionTypes';
import * as api from '../api';
//Action creators

//Fetch posts
export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        
        dispatch({type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error);
    }
}

//Create post
export const createPost =(post) => async (dispatch) =>{
    try {
        const {data} = await api.createPost(post);
        dispatch({type: CREATE, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const admirePost = (id) => async (dispatch) =>{
    try {
        const {data} = await api.admirePost(id);
        dispatch({type: UPDATE_POST, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type: DELETE_POST, payload: id});
        
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);
        dispatch({type: UPDATE_POST, payload: data});
    } catch (error) {
        console.log(error);
    }
}