import express from 'express';
import {getPosts, createPost, updatePost, deletePost, admirePost} from '../controllers/posts.js'

// setup router
const router = express.Router();

//inital route
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost); //retrieve dynamic id
router.delete('/:id', deletePost)
router.patch('/:id/admirePost', admirePost);

//export router to be used in index.js
export default router;