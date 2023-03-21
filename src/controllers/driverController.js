const { Constants } = require("../data/constants");
const User = require("../model/User");

//getAll
const getAllDrivers = async (req,res) => {
    const drivers = await User.find({ userType: Constants.userType.motorista });

    if (!drivers) return res.status(204).json({ "message": "Motoristas não encontrados" });
    
    res.json(drivers);

}


//getByName
const getDriverByUsername = async (username) => {
    const foundUser = await User.findOne({ username: req.headers.username, userType: Constants.userType.motorista });

    if (!foundUser) return res.status(204).json({ "message": "Motorista não encontrado" });
    res.json(foundUser);

}

//checkin
const checkIn = () => {
}

module.exports = { getAllDrivers, getDriverByUsername, checkIn }