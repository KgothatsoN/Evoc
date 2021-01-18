import express from 'express';
import {getPosts, createPost} from '../controllers/posts.js'

// setup router
const router = express.Router();

//inital route
router.get('/', getPosts);
router.post('/', createPost);

//export router to be used in index.js
export default router;