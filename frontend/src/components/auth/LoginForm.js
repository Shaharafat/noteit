/*
 *
 * Title: login form
 * Description: login form
 * Author: Shah Arafat
 * Date: 22-04-2021
 *
 */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';
import { Button, useResponseBox } from '..';
import { loginSchema, validateSchema } from '../../helpers/schemas';
import { loginUser } from '../../store/actions/users';
import { useStore } from '../../store/Store';

const LoginForm = () => {
  const { MessageBox, configureMessageBox } = useResponseBox();
  const history = useHistory();
  const [disabled, setDisabled] = useState(false);
  const { dispatch } = useStore();

  // for vaidation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = validateSchema(loginSchema);

  // ⚙️ executes when form submitted
  const login = async (data) => {
    setDisabled(true);
    const response = await loginUser(data, dispatch);
    const { success, message } = response;
    setDisabled(false);

    if (success) {
      // goto dashboard
      history.push('/dashboard');
    } else {
      // show error message
      configureMessageBox(false, message);
    }
  };

  return (
    <div className="w-full text-electromagnatic bg-white shadow-lg rounded-md p-3">
      <Helmet>
        <title>Login | Noteit</title>
      </Helmet>

      <h1 className="text-2xl font-bold font-railway">Login</h1>
      <MessageBox />

      {/* form */}
      <form onSubmit={handleSubmit(login)} className="mt-3">
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

        <Button type={'submit'} disabled={disabled} medium={true}>
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
