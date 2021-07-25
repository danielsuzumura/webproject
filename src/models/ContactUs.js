/**
 * MongoDB ContactUs model
 */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

export let contactus = mongoose.model('ContactUs', schema);
