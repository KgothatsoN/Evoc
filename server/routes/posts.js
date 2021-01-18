import express from 'express';

// setup router
const router = express.Router();

//inital route
router.get('/', (request, respone) =>{
    request.send('Working...');
});

//export router to be used in index.js
export default router;