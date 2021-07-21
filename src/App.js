'use strict';

import express from 'express';
import path from 'path';
import mongoose from 'mongoose';

import {person} from './models/Person.js';
import {product} from './models/Product.js';
import {review} from './models/Review.js';
import {sale} from './models/Sale.js';
import {router as RouterIndex} from './routes/index-route.js';
import {router as routerPerson} from './routes/person-route.js';
import {router as routerProduct} from './routes/product-route.js';
import {router as routerSale} from './routes/sale-route.js';
import {router as routerReview} from './routes/review-route.js';

/** Creating an express aplication */
export const app = express();

/** Connection to MongoDB */
const url = 'mongodb+srv://admin:admin@cluster0.t03nm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());

app.use('/', RouterIndex);
app.use('/person', routerPerson);
app.use('/product', routerProduct);
app.use('/sale', routerSale);
app.use('/review', routerReview);
