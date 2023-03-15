const User = require('../model/User');

const findUserByUsername = async (req, res) => {
    const foundUser = await User.findOne({ username: req.headers.username });

    if (!foundUser) return res.status(204).json({ "message": "No User found :(" });
    res.json(foundUser);
};

const editUser = async (req, res) => {

    const editedProfile = req.body.user

    try {
        const response = await User.findOneAndUpdate(
            { username: editedProfile.username },  
            editedProfile
        )
        return res.status(201).json(response)
    } catch (error) {
        throw new Error
    }


}

module.exports = { findUserByUsername, editUser }