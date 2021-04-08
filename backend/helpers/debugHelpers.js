/*
 *
 * Title: database helper functions
 * Description: database helper functions
 * Author: Shah Arafat
 * Date: 07-04-2021
 *
 */
// dependencies
import colors from 'colors';
import debug from 'debug';

// debug database
export const debugDB = debug('app:db');

// debug server
export const debugServer = debug('app:server');

// error
const error = debug('errors');

// success
const success = debug('success');
// formatted message
export const errorMessage = (message) => error(colors.red.bold('❌ ', message));

export const successMessage = (message) => success(colors.green.bold('✔️ ', message));
