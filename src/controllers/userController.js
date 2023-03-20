const User = require('../model/User');

const findUserByUsername = async (req, res) => {
    const foundUser = await User.findOne({ username: req.headers.username });

    if (!foundUser) return res.status(204).json({ "message": "No User found :(" });
    res.json(foundUser);
};

const editUser = async (req, res) => {
    const editedProfile = req.body
    console.log(editedProfile);
    
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

const getUserInfo = async (req, res) => {
    const foundUser = await User.findOne({ username: req.headers.username });

    if (!foundUser) return res.status(204).json({ "message": "No User found :(" });
    
    const contactInfo = {
        name: foundUser.contactName,
        phoneNumber: foundUser.contactPhoneNumber
    }

    res.json(contactInfo);
};

module.exports = { findUserByUsername, editUser, getUserInfo }