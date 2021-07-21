import express from 'express';
import * as controller from '../controllers/product-controller.js';

export const router = express.Router();

router.get('/', controller.getAll);
router.get('/:code', controller.get);
router.put('/', controller.put);
router.delete('/:code', controller.del);
