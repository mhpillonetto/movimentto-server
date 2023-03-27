const { Constants } = require("../data/constants");
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

module.exports = { getAllDrivers, getDriverByUsername }