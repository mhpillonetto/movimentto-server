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
    displayName: String,
    userType: String,
    email: String,
    cnpj: String,
    contactName: String,
    contactPhoneNumber: String,
    website: String,
    cep: String,
    cpf: String,
    phoneNumber: String,
    licensePlate: String,
    firstComplementLicensePlate: String,
    secondComplementLicensePlate: String,
    vehicleType: String,
    lat: Number,
    long: Number,
    city: String,
    state: String,
    lastCheckIn: Date,
    address: String,
    antt: String,
    status: String,
    refreshToken: String
});

module.exports = mongoose.model('User', userSchema)
