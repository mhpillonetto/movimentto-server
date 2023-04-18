const User = require('../model/User');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { username, password, email, userType, phoneNumber } = req.body;
    if (!username || !password || !email || !userType || !phoneNumber) return res.status(400).json({ "message": 'Required Fields missing'});
    
    const duplicate = await User.findOne({ username }).exec();
    if (duplicate) return res.sendStatus(409);

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const result = await User.create({ 
                "username": username,
                "password": hashedPassword,
                "email": email,
                "userType": userType,
                "phoneNumber": phoneNumber
        });
        res.status(201).json({ 'success': `New user ${username} created`})
    } catch(err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };