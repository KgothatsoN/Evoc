import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

//BodyParser for populating and sending requests
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//Connect to application 
app.use('/posts', postRoutes);

//MongoDB connection URL
// const CON_URL = 'mongodb+srv://Kgothatso:18Borthwick@cluster0.1a6fc.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CON_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))) //Server successful
    .catch((error) => console.log(error)); //Connection error message

mongoose.set('useFindAndModify', false);
