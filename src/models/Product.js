import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const schema = new Schema({
    code: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantityStock: {
        type: Number,
        required: true
    },
    quantitySold: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: false
    }
});

export let product = mongoose.model('Product', schema);
