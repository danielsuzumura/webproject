import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
    email: {
        type: String,
        required: true
    }
});

export let admin = mongoose.model('Admin', schema);
