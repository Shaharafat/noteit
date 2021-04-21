/*
 *
 * Title: Register and login Form
 * Description: Register and login form
 * Author: Shah Arafat
 * Date: 21-04-2021
 *
 */
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '..';

const RegisterForm = () => {
  // for vaidation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });

  // executes when form submitted
  const registerUser = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full text-electromagnatic shadow-lg rounded-md p-3">
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
              className="mt-1 px-2 py-1 border border-gray-400 w-full"
              placeholder="Type firstname"
              required
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
              className="mt-1 px-2 py-1 border border-gray-400 w-full"
              placeholder="Type lastname"
              required
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
            className="mt-1 px-2 py-1 border border-gray-400 w-full"
            placeholder="Type email"
            required
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
            className="mt-1 px-2 py-1 border border-gray-400 w-full"
            placeholder="Type password"
            required
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
            className="mt-1 px-2 py-1 border border-gray-400 w-full"
            placeholder="Type password again"
            required
            {...register('confirmPassword')}
          />
          <p className="text-red-500 text-sm mt-1">{errors.password?.confirmPassword}</p>
        </div>
        <Button type={'submit'} medium={true}>
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
