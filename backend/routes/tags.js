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
import { searchTags } from '../controllers/tag.js';

const router = express.Router();

// get tag on search text
router.post('/', searchTags);

// export
export default router;
