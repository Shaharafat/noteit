/*
 *
 * Title: auth middleware
 * Description: check an user is authenticated or not
 * Author: Shah Arafat
 * Date: 20-04-2021
 *
 */
// dependencies
import jwt from 'jsonwebtoken';
import { errorMessage, progressMessage, successMessage } from '../helpers/debugHelpers.js';
import { User } from '../models/user.js';
import ErrorResponse from '../utils/errorResponse.js';

// ✔️ check user is authenticated or not
export const isAuthenticated = async (req, res, next) => {
  progressMessage('Checking the user is authenticated or not.');

  const hasToken = req.headers.x_auth_token;
  let token;
  if (hasToken?.startsWith('Bearer')) {
    progressMessage('Token found.');

    // get actual token
    [, token] = hasToken.split(' ');
  } else {
    errorMessage('No token found.');
    return next(new ErrorResponse(401, 'Unauthorized user!'));
  }

  // verify token
  try {
    progressMessage('Verifying token.');

    // validate token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = decoded.user;

    // find user with id
    const user = await User.findById(id, '-password');

    if (!user) {
      errorMessage('No user found with this token.');
      return next(new ErrorResponse(401, 'Opps, User not authorized!'));
    }

    // set user
    req.user = user;

    successMessage('User authenticated');
    next();
  } catch (error) {
    errorMessage('Authorization failed');
    next(new ErrorResponse(401, 'Sorry, Unauthorized!'));
  }
};

export const isAdmin = (req, res, next) => {
  progressMessage('Checking user is admin or not');

  if (req.user.isAdmin) {
    successMessage('Yes, User is an admin');
    next();
  } else {
    errorMessage('No, User is not and admin');
    next(new ErrorResponse(401, 'Unauthorized!'));
  }
};
