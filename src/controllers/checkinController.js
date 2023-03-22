const TimeAgo = require("javascript-time-ago");
const { Constants } = require("../data/constants");
const CheckIn = require("../model/CheckIn");
const User = require("../model/User");

const checkIn = async (req,res) => {
    try {
        const {username, lat, long} = req.body
        const now = new Date()
        
        await User.findOneAndUpdate(
            {username},  
            {
                lastCheckIn: now,
                lat,
                long
            }
        )

        return res.status(201).json({"message":"checkin realizado com sucesso"})
    } catch (error) {
        console.log(error)
        throw new Error
    } 
}

const getCheckedInDrivers = async (req, res) => {
    try {
        const filter = {
            userType: Constants.userType.motorista,
            lastCheckIn: { $lte: TimeAgo.format(Date.now() - 3 * 60 * 60 * 1000) }
        }
        const checkedInDrivers = await User.find({filter})
        return res.json(checkedInDrivers)
    } catch (error) {
        throw new Error
    }
}

module.exports = { checkIn, getCheckedInDrivers }