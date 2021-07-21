import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const schema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    cart: {
        type: Array,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});

export let sale = mongoose.model('Sale', schema);
