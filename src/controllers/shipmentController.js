const Shipment = require('../model/Shipment')

const getAllShipments = async (req,res) => {
    try {
        const allShipmentsList = await Shipment.find()
        res.status(200).json(allShipmentsList)
    } catch (error) {
        console.log(error)
        throw new Error
    }
}

const createShipment = async (req,res) => {
    try {
        console.log('====================================');
        console.log(req);
        console.log('====================================');
        await Shipment.create(req.body)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
        throw new Error
    }
}

module.exports = { getAllShipments, createShipment }