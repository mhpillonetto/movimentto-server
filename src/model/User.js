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
    contactNumber: {
        type: String
    },
    website: {
        type: String
    },
    cep: {
        type: String
    },
    refreshToken: String
});

module.exports = mongoose.model('User', userSchema)
