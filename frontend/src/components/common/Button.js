/*
 *
 * Title: Button
 * Description: Button to use in multiple files
 * Author: Shah Arafat
 * Date: 21-04-2021
 *
 */
import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  linkButton,
  handler,
  to,
  children,
  large,
  small,
  medium,
  pill,
  rounded,
  full,
  primary,
  danger,
}) => {
  return linkButton ? (
    <Link
      to={`${to}`}
      className={`text-gray-100 mt-3 text-center ${
        small
          ? 'px-4 py-1'
          : medium
          ? 'px-6 py-2 text-md'
          : large
          ? 'px-12 py-2 text-lg'
          : 'px-2 py-1 text-md'
      } ${pill ? 'rounded-full' : rounded ? 'rounded-md' : 'rounded-sm'} ${
        full ? 'block w-2/3' : 'inline-block'
      } ${
        primary
          ? 'bg-blue-600 hover:bg-blue-700'
          : danger
          ? 'bg-red-600 hover:bg-red-700'
          : 'bg-green-600 hover:bg-green-700'
      }
      }`}
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={handler}
      className={` text-gray-100 mt-3 text-center ${
        small
          ? 'px-4 py-1'
          : medium
          ? 'px-6 py-2 text-md'
          : large
          ? 'px-12 py-2 text-lg'
          : 'px-2 py-1 text-md'
      } ${pill ? 'rounded-full' : rounded ? 'rounded-md' : 'rounded-sm'} ${
        full ? 'block w-2/3' : 'inline-block'
      } ${
        primary
          ? 'bg-blue-600 hover:bg-blue-700'
          : danger
          ? 'bg-red-600 hover:bg-red-700'
          : 'bg-green-600 hover:bg-green-700'
      }
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
