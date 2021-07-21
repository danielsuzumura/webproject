'use strict';

import express from 'express';
import path from 'path';

import {router as RouterIndex} from './routes/index-route.js';
import {router as routerItem} from './routes/item-route.js';

/** Creating an express aplication */
export const app = express();

// app.use(express.static('dist'));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());

app.use('/', RouterIndex);
app.use('/store', routerItem);
