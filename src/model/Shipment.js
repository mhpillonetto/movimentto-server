const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shipmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    deliveryLocation: {
        type: String,
        required: true
    },
    retrievalLocation: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Shipment', shipmentSchema)
