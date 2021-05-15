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
import path from 'path';
import { fileURLToPath } from 'url';
import initialiseDB from './db/dbConfig.js';
import { debugServer } from './helpers/debugHelpers.js';
import errorMiddleware from './middlewares/error.js';
// router
import noteRouter from './routes/notes.js';
import tagRouter from './routes/tags.js';
import userRouter from './routes/users.js';
// we need to change up how __dirname is used for ES6 purposes
const __dirname = path.dirname(fileURLToPath(import.meta.url));
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
app.use('/tags', tagRouter);

// error middleware
app.use(errorMiddleware);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API running');
  });
}

// server listen
const port = process.env.PORT || 5000;
app.listen(port, () => {
  debugServer(colors.green(`👋 Connected to the port ${port} 🚀`));
  console.log(`Server is connected to the port ${port}`);
});
