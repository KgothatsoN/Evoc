import React from 'react';
import Post from './Post/Post'
import userStyles from './styles';

//Create posts component
const Posts = () => {
    const classes = userStyles();
    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;