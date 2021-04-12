/*
 *
 * Title: note model
 * Description: note model to store note
 * Author: Shah Arafat
 * Date: 12-04-2021
 *
 */
import Joi from 'joi';
import mongoose from 'mongoose';

// note schema
const noteSchema = new mongoose.Schema(
  {
    title: { type: String, minlength: 5, maxlength: 200, required: true },
    details: { type: String, required: true },
    tags: [{ type: String, required: true }],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

// note model
export const Note = mongoose.model('Note', noteSchema);

// validate note
export const validateNote = (note) => {
  const schema = Joi.object({
    title: Joi.string().min(5).max(200).required(),
    details: Joi.string().required(),
    tags: Joi.array().items(Joi.string().required()).max(5),
    user: Joi.objectId().required(),
  });

  const { error } = schema.validate(note);
  return error;
};
