const { Constants } = require("../data/constants");
const CheckIn = require("../model/CheckIn");
const User = require("../model/User");

const checkIn = async (req,res) => {
    try {
        const {username, lat, long} = req.body
        const createdAt = new Date()
        const response = await CheckIn.create({
            "username": username,
            "lat": lat,
            "long": long,
            "createdAt": createdAt
        })
        
        return res.status(201).json({"message":"checkin realizado com sucesso"})
    } catch (error) {
        throw new Error
    } 
}

const getCheckedInDrivers = async (req, res) => {
    try {
        const checkedInDrivers = await CheckIn.find()
        return res.json(checkedInDrivers)
    } catch (error) {
        throw new Error
    }
}

module.exports = { checkIn, getCheckedInDrivers }