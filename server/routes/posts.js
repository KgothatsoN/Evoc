import express from 'express';
import {getPosts} from '../controllers/posts.js'

// setup router
const router = express.Router();

//inital route
router.get('/', getPosts);

//export router to be used in index.js
export default router;