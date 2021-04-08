import colors from 'colors';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import initialiseDB from './db/dbConfig.js';
import { debugServer } from './helpers/debugHelpers.js';
import errorMiddleware from './middlewares/error.js';
import userRouter from './routes/users.js';

// load .env files
dotenv.config();

// connect mongoose
initialiseDB();

// create app
const app = express();

app.use(cors());
app.use(express.json());
app.use('/users', userRouter);

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
