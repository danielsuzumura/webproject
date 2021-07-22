/**
 * Product HTTP methods
 */

import express from 'express';
import * as controller from '../controllers/product-controller.js';

export const router = express.Router();

router.get('/', controller.getAll);
router.get('/:code', controller.get);
router.put('/', controller.put);
router.patch('/:code', controller.patch);
router.patch('/stock/:code', controller.changeStock);
router.patch('/sold/:code', controller.changeSold);
router.delete('/:code', controller.del);
