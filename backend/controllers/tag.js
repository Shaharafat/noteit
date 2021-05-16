/*
 *
 * Title: tag controller
 * Description: control all tag related functions
 * Author: Shah Arafat
 * Date: 20-04-2021
 *
 */
// dependencies
import { errorMessage, progressMessage, successMessage } from '../helpers/debugHelpers.js';
import { Tag } from '../models/tag.js';

// ✔️ get all tags with post count
export const getAllTags = async (req, res, next) => {
  progressMessage('Fetching all tags');
  try {
    const tags = await Tag.find().sort('-noteCount');

    successMessage('Tag fetching successful');
    res.status(200).json({ success: true, tags });
  } catch (error) {
    errorMessage('Couldn"t fetch tags');
    next(error);
  }
};

// ✔️ search tag using searchtext
export const searchTags = async (req, res, next) => {
  progressMessage('Request to search a tag.');

  const { search } = req.body;

  // make a regex query to mongodb
  try {
    const tags = await Tag.find({ name: { $regex: `^${search}`, $options: 'i' } });

    successMessage('Tags found');
    res.status(200).json({ success: true, tags });
  } catch (error) {
    errorMessage('No tag found');
    next(error);
  }
};
