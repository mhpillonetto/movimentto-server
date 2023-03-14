const User = require('../model/User');

const findUserByUsername = async (req, res) => {
    const foundUser = await User.findOne({username: req.headers.username});
   
    if(!foundUser) return res.status(204).json({"message":"No User found :("});
    res.json(foundUser);
};

module.exports = { findUserByUsername }