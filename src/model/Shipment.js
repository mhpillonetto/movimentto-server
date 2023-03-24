const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shipmentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    deliveryLocation: {
        type: String,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    },  
    retrievalLocation: {
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
    ownerDisplayname: {
        type: String
    },
    createdAt: {
        type: Date,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
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
    observations: {
        type: String,
        required: false
    },
})

module.exports = mongoose.model('Shipment', shipmentSchema)
