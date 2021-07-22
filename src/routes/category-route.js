/**
 * Category HTTP methods
 */

import express from 'express';
import * as controller from '../controllers/category-controller.js';

export const router = express.Router();

router.get('/', controller.getAll);
router.get('/:name', controller.get);
router.put('/', controller.put);
router.delete('/:name', controller.del);
