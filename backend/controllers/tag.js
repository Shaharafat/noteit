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

// ✔️ search tag using searchtext
export const searchTags = async (req, res, next) => {
  progressMessage('Request to search a tag.');

  const { search } = req.body;
  console.log(search);
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
