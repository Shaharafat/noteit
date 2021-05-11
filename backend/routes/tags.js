/*
 *
 * Title: tags route
 * Description: tags routes
 * Author: Shah Arafat
 * Date: 20-04-2021
 *
 */
// dependencies
import express from 'express';
import { getAllTags, searchTags } from '../controllers/tag.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

// get tag on search text
router.post('/', searchTags);

// get all tag
router.get('/', isAuthenticated, getAllTags);

// export
export default router;
