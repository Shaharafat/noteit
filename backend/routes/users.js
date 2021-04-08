/*
 *
 * Title: users routes
 * Description: users routes
 * Author: Shah Arafat
 * Date: 07-04-2021
 *
 */
import express from 'express';
import { errorMessage, successMessage } from '../helpers/debugHelpers.js';
import validate from '../middlewares/validate.js';
import { User, validateUser } from '../models/user.js';
import ErrorResponse from '../utils/errorResponse.js';

const router = express.Router();

// send auth token
const sendAuthToken = (user, statusCode, res) => {
  const token = user.generateAuthToken(); // generate auth token
  res.status(statusCode).json({ success: true, token });
  successMessage('Auth token sent.');
};

// create new user
router.post('/register', validate(validateUser), async (req, res, next) => {
  const { firstName, lastName, username, email, password } = req.body;

  successMessage('Creating new user.');
  let user = new User({
    firstName,
    lastName,
    username,
    email,
    password,
  });

  try {
    user = await user.save(); // save user

    successMessage('New user added');
    sendAuthToken(user, 200, res);
  } catch (err) {
    errorMessage('New user adding failed');
    next(err);
  }
});

// login user
router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;

  successMessage('User requested to login.');
  // if input not provided
  if (!email || !password) {
    return next(new ErrorResponse(400, 'Email and password field is required'));
  }

  const user = await User.findOne({ email });
  if (!user) {
    return next(new ErrorResponse(400, 'Invalid email or password!'));
  }

  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorResponse(400, 'Invalid email or password!'));
  }

  successMessage('Email and password matched');
  // if everything is ok. then send token.
  sendAuthToken(user, 200, res);
});

// forgot password
// router.post('/forgotpassword', async (req, res, next) => {
//   const { email } = req.body;

//   successMessage('User requested to reset password.');
//   if (!email) {
//     return next(400, 'Put your email first');
//   }

//   const
// });
// export router
export default router;
