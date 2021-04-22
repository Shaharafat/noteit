/*
 *
 * Title: login form
 * Description: login form
 * Author: Shah Arafat
 * Date: 22-04-2021
 *
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '..';
import { loginSchema, validateSchema } from '../../helpers/schemas';

const LoginForm = () => {
  // for vaidation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = validateSchema(loginSchema);

  // executes when form submitted
  const loginUser = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full text-electromagnatic bg-white shadow-lg rounded-md p-3">
      <h1 className="text-2xl font-bold font-railway">Login</h1>

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
        </div>
        <div>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 px-2 py-1 border border-gray-300 w-full"
            placeholder="Type password"
            {...register('password')}
          />
          <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
        </div>
        <Button type={'submit'} medium={true}>
          Login
        </Button>
      </form>
      <div className="border-t border-gray-200 mt-3">
        <p className="text-center mt-2 font-railway">
          New here?{' '}
          <Link to="/home/signup" className="text-blue-600 hover:underline">
            Create an account
          </Link>
        </p>
        <p className="text-center mt-2 font-railway">
          <Link to="/home/forgotPassword" className="text-blue-600 hover:underline">
            Forgot password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
