import express from 'express';
import * as controller from '../controllers/item-controller.js';

export const router = express.Router();

router.get('/:id', controller.get);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.del);
