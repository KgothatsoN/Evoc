import { request, response } from "express";
import mongoose from "mongoose";
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

export const updatePost = async (request, response) => {
    const {id: _id} = request.params;
    const post = request.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return response.status(404).send('No Post Found!');
    
    const updatedPost = await PostMsg.findByIdAndUpdate(_id, {...post, _id}, {new: true});

    response.json(updatedPost);
}