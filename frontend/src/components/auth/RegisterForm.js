/*
 *
 * Title: Register and login Form
 * Description: Register and login form
 * Author: Shah Arafat
 * Date: 21-04-2021
 *
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '..';
import { signupSchema, validateSchema } from '../../helpers/schemas';
import { signupUser } from '../../store/actions/users';
import { useStore } from '../../store/Store';

const RegisterForm = () => {
  const { dispatch } = useStore();
  const [disabled, setDisabled] = useState(false);

  // for vaidation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = validateSchema(signupSchema);

  // executes when form submitted
  const registerUser = async (data) => {
    setDisabled(true);
    const { firstname, lastname, email, password } = data;
    const requestBody = { firstname, lastname, email, password };

    // signup user and update store
    const result = await signupUser(requestBody, dispatch);
    setDisabled(false);
    // TODO: show notification
    console.log(result);
  };

  return (
    <div className="w-full text-electromagnatic bg-white shadow-lg rounded-md p-3">
      <h1 className="text-2xl font-bold font-railway">Sign up</h1>

      {/* form */}
      <form onSubmit={handleSubmit(registerUser)} className="mt-3">
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 justify-items-stretch ">
          <div>
            <label htmlFor="firstname" className="form-label">
              Firstname
            </label>
            <input
              type="text"
              id="firstname"
              className="mt-1 px-2 py-1 border border-gray-300 w-full"
              placeholder="Type firstname"
              {...register('firstname')}
            />
            <p className="text-red-500 text-sm mt-1">{errors.firstname?.message}</p>
          </div>
          <div>
            <label htmlFor="lastname" className="form-label">
              Lastname
            </label>
            <input
              type="text"
              id="lastname"
              className="mt-1 px-2 py-1 border border-gray-300 w-full"
              placeholder="Type lastname"
              {...register('lastname')}
            />
            <p className="text-red-500 text-sm mt-1">{errors.lastname?.message}</p>
          </div>
        </div>
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
        <div>
          <label htmlFor="confirmpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmpassword"
            className="mt-1 px-2 py-1 border border-gray-300 w-full"
            placeholder="Type password again"
            {...register('confirmPassword')}
          />
          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword?.message}</p>
        </div>
        <Button type={'submit'} disabled={disabled} medium={true}>
          Register
        </Button>
      </form>
      <div className="border-t border-gray-200 mt-3">
        <p className="text-center mt-2 font-railway">
          Already have an account?{' '}
          <Link to="/home/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
