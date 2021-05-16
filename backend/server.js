/*
 *
 * Title: Server
 * Description: Node js server to run the application
 * Author: Shah Arafat
 * Date: 05-04-2021
 *
 */

import colors from 'colors';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import initialiseDB from './db/dbConfig.js';
import { debugServer } from './helpers/debugHelpers.js';
import routes from './startup/routes.js';
import validator from './startup/validator.js';

// __dirname is used for ES6 purposes
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// load .env files
dotenv.config();

// connect mongoose
initialiseDB();

// create app
const app = express();

// routes
routes(app);

// validator
validator();

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
});
