import express from 'express';
import * as controller from '../controllers/sale-controller.js';

export const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.get);
router.put('/', controller.put);
router.delete('/:id', controller.del);
