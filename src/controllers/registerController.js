const User = require('../model/User');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { user, pwd, email, userType } = req.body;
    if (!user || !pwd || !email || !userType) return res.status(400).json({ "message": 'Required Fields missing'});
    
    // check for duplicate usernames in the db
    const duplicate = await User.findOne({ username: user }).exec();
    if (duplicate) return res.sendStatus(409);

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(pwd, 10);
    
        //create and store the new user
        const result = await User.create({ 
                "username": user,
                "password": hashedPwd,
                "email": email,
                "userType": userType
        });
        res.status(201).json({ 'success': `New user ${user} created`})
    } catch(err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };