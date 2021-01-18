import { request, response } from "express";
import PostMsg from '../models/postMessage.js'

//retrieve posts from db
export const getPosts = async (request, response) => {
    try {
        //Retried posts from data base
        const postMsg = await PostMsg.find();

        response.status(200).json(postMsg);
    } catch (error) {
        //client error with request post not found
        response.status(404).json({message: error.message});
    }
}

// create post function
export const createPost = async (request, response) => {
    const post = request.body;
    const newPost = new PostMsg(post);

    try {
        await newPost.save();
        //successful request
        response.status(201).json(newPost);
    } catch (error) {
        response.status(409).json({message: error.message})
    }
}