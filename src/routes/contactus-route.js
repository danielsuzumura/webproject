/**
 * ContactUs HTTP methods
 */

import express from 'express';
import * as controller from '../controllers/contactus-controller';

export const router = express.Router();

router.get('/', controller.getAll);
router.put('/', controller.put);
