/*
 *
 * Title: Server
 * Description: Node js server to run the application
 * Author: Shah Arafat
 * Date: 05-04-2021
 *
 */

import colors from 'colors';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import Joi from 'joi';
import objectid from 'joi-objectid';
import initialiseDB from './db/dbConfig.js';
import { debugServer } from './helpers/debugHelpers.js';
import errorMiddleware from './middlewares/error.js';

import userRouter from './routes/users.js';
import noteRouter from './routes/notes.js';

// load .env files
dotenv.config();

Joi.objectId = objectid(Joi); // joi object id validator

// connect mongoose
initialiseDB();

// create app
const app = express();

app.use(cors());
app.use(express.json());
app.use('/users', userRouter);
app.use('/notes', noteRouter);

// error middleware
app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.send('Assalamu alaikum');
});

// server listen
const port = process.env.PORT || 5000;
app.listen(port, () => {
  debugServer(colors.green(`👋 Connected to the port ${port} ✌️`));
});
