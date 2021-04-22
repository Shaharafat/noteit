/*
 *
 * Title: error handling middleware
 * Description: error middleware
 * Author: Shah Arafat
 * Date: 07-04-2021
 *
 */
import { errorMessage } from '../helpers/debugHelpers.js';
import ErrorResponse from '../utils/errorResponse.js';

const errorMiddleware = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  console.log(error);
  if (err.code === 11000) {
    errorMessage('Duplicate data used');
    const message = 'Email contains an existing account.';
    error = new ErrorResponse(400, message);
  }

  res
    .status(error.statusCode || 500)
    .json({ success: false, message: error.message || 'Server Error!' });
};

export default errorMiddleware;
