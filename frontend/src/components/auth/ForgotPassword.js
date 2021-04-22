/*
 *
 * Title: forgot password
 * Description: forgot password
 * Author: Shah Arafat
 * Date: 22-04-2021
 *
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '..';
import { forgotPasswordSchema, validateSchema } from '../../helpers/schemas';

const ForgotPassword = () => {
  // for vaidation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = validateSchema(forgotPasswordSchema);

  // executes when form submitted
  const loginUser = (data) => {
    console.log(data);
  };

  // validation schema
  return (
    <div className="w-full text-electromagnatic bg-white shadow-lg rounded-md p-3">
      <h1 className="text-2xl font-bold font-railway">Forgot Password</h1>

      {/* form */}
      <form onSubmit={handleSubmit(loginUser)} className="mt-3">
        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 px-2 py-1 border border-gray-300 w-full"
            placeholder="Type email"
            {...register('email')}
          />
          <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
          <small className="text-blue-400">
            We will sent you a password reset link to your email
          </small>
        </div>
        <Button type={'submit'} medium={true}>
          Get Reset Link
        </Button>
      </form>
      <div className="border-t border-gray-200 mt-3">
        <p className="text-center mt-2 font-railway">
          <Link to="/home/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
