/**
 * User HTTP methods
 */

import express from 'express';
import * as controller from '../controllers/person-controller.js';

export const router = express.Router();

router.get('/', controller.getAll);
router.get('/:email', controller.get);
router.put('/', controller.put);
router.delete('/:email', controller.del);
