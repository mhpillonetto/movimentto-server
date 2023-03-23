const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    roles: {
        User: {
            type: Number,
            default: 2001
        },
        Editor: Number,
        Admin: Number
    },
    password: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
    },
    email: {
        type: String
    },
    cnpj: {
        type: String
    },
    contactName: {
        type: String
    },
    contactPhoneNumber: {
        type: String
    },
    website: {
        type: String
    },
    cep: {
        type: String
    },
    cpf: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    licensePlate: {
        type: String
    },
    firstComplementLicensePlate: {
        type: String
    },
    secondComplementLicensePlate: {
        type: String
    },
    vehicleType: {
        type: String
    },
    lat: {
        type: Number
    },
    long: {
        type: Number
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    lastCheckIn: {
        type: Date
    },
    refreshToken: String
});

module.exports = mongoose.model('User', userSchema)
