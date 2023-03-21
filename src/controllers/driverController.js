const { Constants } = require("../data/constants");
const CheckIn = require("../model/CheckIn");
const User = require("../model/User");

const getAllDrivers = async (req,res) => {
    const drivers = await User.find({ userType: Constants.userType.motorista });

    if (!drivers) return res.status(204).json({ "message": "Motoristas não encontrados" });
    
    res.json(drivers);

}

const getDriverByUsername = async (req,res) => {
    const foundUser = await User.findOne({ username: req.params.username, userType: Constants.userType.motorista });

    if (!foundUser) return res.status(204).json({ "message": "Motorista não encontrado" });
    res.json(foundUser);

}

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

const getCheckedInDrivers = () => {

}

module.exports = { getAllDrivers, getDriverByUsername, checkIn }