const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const checkinSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    long: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('CheckIn', checkinSchema)
