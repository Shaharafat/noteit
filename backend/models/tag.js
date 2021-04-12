/*
 *
 * Title: tag model
 * Description: model to store tag
 * Author: Shah Arafat
 * Date: 12-04-2021
 *
 */
import mongoose from 'mongoose';

const tagSchema = new mongoose.Schema({
  name: { type: String },
});

export const Tag = mongoose.model('Tag', tagSchema);
