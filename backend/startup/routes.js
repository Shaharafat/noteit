/*
 *
 * Title: seperating routes
 * Description: seperating routes
 * Author: Shah Arafat
 * Date: 16-05-2021
 *
 */
import cors from 'cors';
import express from 'express';
import errorMiddleware from '../middlewares/error.js';
import noteRouter from '../routes/notes.js';
import tagRouter from '../routes/tags.js';
import userRouter from '../routes/users.js';

const routes = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use('/users', userRouter);
  app.use('/notes', noteRouter);
  app.use('/tags', tagRouter);

  // error middleware
  app.use(errorMiddleware);
};

export default routes;
