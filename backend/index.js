import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from "./models/bookmodel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';


const app = express();

//middleware for passing request body
app.use(express.json());

//Middleware for handling CORS POLICY
//Allow All Origin with Default of cors(*)
app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('welcome to mern stack tutorial');
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`app is listening to port:${PORT}`);
        });
    })
    .catch((error) => {
        console.error(`Failed to connect to the database. Error: ${error.message}`);
    });
