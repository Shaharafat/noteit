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
import btnLoader from '../../icons/buttonLoader.svg';

const Button = ({
  linkButton,
  extraStyles,
  type,
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
  disabled,
}) => {
  return linkButton ? (
    <Link
      to={`${to}`}
      className={`text-gray-100 mt-3 flex items-center justify-center text-center ${
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
      } ${extraStyles}`}
    >
      {children}
    </Link>
  ) : (
    <button
      type={type}
      onClick={handler}
      disabled={disabled}
      className={`text-gray-100 mt-3 text-center common-button ${
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
      <span className="flex items-center">
        {disabled && (
          <img
            src={btnLoader}
            alt="loader"
            className={`${small ? 'w-4' : medium ? 'w-6' : large ? 'w-8' : 'w-3'} mr-1 `}
          />
        )}
        {children}
      </span>
    </button>
  );
};
export default Button;
