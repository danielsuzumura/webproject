/* eslint-disable*/
'use strict';

import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import cors from 'cors';
/** Add models */
import {person} from './models/Person.js';
import {product} from './models/Product.js';
import {review} from './models/Review.js';
import {sale} from './models/Sale.js';
import {category} from './models/Category.js';
import {admin} from './models/Admin.js';

/** Import router */
import {router as RouterIndex} from './routes/index-route.js';
import {router as routerPerson} from './routes/person-route.js';
import {router as routerProduct} from './routes/product-route.js';
import {router as routerSale} from './routes/sale-route.js';
import {router as routerReview} from './routes/review-route.js';
import {router as routerCategory} from './routes/category-route.js';
import {router as routerAdmin} from './routes/admin-route.js';

/** Creating an express aplication */
export const app = express();
app.use(cors());

/** Connection to MongoDB */
const url = 'mongodb+srv://admin:admin@cluster0.t03nm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});

/** Serve Vue App */
app.use(express.static(path.join(__dirname, '../dist')));

/** Parse body */
app.use(express.json({ limit: '50mb' }));

/** Insert routes */
app.use('/', RouterIndex);
app.use('/person', routerPerson);
app.use('/product', routerProduct);
app.use('/sale', routerSale);
app.use('/review', routerReview);
app.use('/category', routerCategory);
app.use('/admin', routerAdmin);
