/*
 *
 * Title: form validation schemas
 * Description: form validation schemas
 * Author: Shah Arafat
 * Date: 22-04-2021
 *
 */

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export const validateSchema = (schema) => {
  return useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });
};

// signup schema
export const signupSchema = yup.object().shape({
  firstname: yup.string().min(3).required(),
  lastname: yup.string().min(3).required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(5)
    .max(50)
    .required('Password is required')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      'Password must contain at least 1 capital letter, 1 small letter and minimum length is 8 characters'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Required field'),
});

// login schema
export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required('Password is required').min(8).max(50),
});

// forgot password schema
export const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email().required(),
});
