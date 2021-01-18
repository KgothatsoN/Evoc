import * as api from '../api';

//Action creators

//Fetch posts
export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

//Create post
export const createPost =(post) => async (dispatch) =>{
    try {
        const {data} = await api.createPost(post);
        dispatch({type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error);
    }
}