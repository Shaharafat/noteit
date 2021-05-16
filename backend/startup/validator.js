/*
 *
 * Title: validator initialize
 * Description: validator initialize
 * Author: Shah Arafat
 * Date: 16-05-2021
 *
 */
import Joi from 'joi';
import objectid from 'joi-objectid';

const validator = () => {
  Joi.objectId = objectid(Joi); // joi object id validator
};

export default validator;
