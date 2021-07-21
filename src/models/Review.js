import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const schema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    reviewText: {
        type: String,
        required: true
    }
});

export let review = mongoose.model('Review', schema);
