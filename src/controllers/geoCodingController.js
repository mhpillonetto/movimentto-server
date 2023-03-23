const { Constants } = require("../data/constants")
const { geocoding } = require("../providers")

const reverse = async (req,res) => {
    const latLongConcat = `${req.params.lat},${req.params.long}`
    try {
        console.log('geocode');
        const result = geocoding.get('/reverse', { params: { access_key: Constants.geocoding_access_key, query: latLongConcat } })
        res.json(result)
    } catch (error) {
        // console.log(error)
        res.status(404).send({"message":"geocoding error"})
    }
}

const forward = async (req,res) => {
    return 
}


module.exports = {reverse, forward}