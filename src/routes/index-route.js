/**
 * When website is open, redirect to home page(index.html)
 */

import express from 'express';

export const router = express.Router();

router.get('/', (req, res, next) => {
    // redirect to home page
    res.redirect('/index.html');
});
