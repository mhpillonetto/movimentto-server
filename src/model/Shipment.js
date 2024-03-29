const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shipmentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    deliveryCity: {
        type: String,
        required: true
    },
    deliveryState: {
        type: String,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    },
    retrievalCity: {
        type: String,
        required: true
    },
    retrievalState: {
        type: String,
        required: true
    },
    retrievalDate: {
        type: Date,
        required: true
    },
    ownerUsername: {
        type: String,
        required: true
    },
    ownerDisplayName: String,
    createdAt: {
        type: Date,
        required: false
    },
    price: Number,
    product: {
        type: String,
        required: true
    },
    productType: {
        type: String,
        required: true
    },
    requiredVehicle: {
        type: String,
        required: true
    },
    complement: String,
    weight: String,
    tracking: String,
    flooringType: String,
    necessaryItems: String
})

module.exports = mongoose.model('Shipment', shipmentSchema)