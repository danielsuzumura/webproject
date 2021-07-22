import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    photo: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    },
    slogan: {
        type: String,
        required: true
    }
});

export let category = mongoose.model('Category', schema);
