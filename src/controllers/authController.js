const User = require('../model/User');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) return res.status(400).json({ "message": 'Required Fields missing' });

    const foundUser = await User.findOne({ username }).exec();
    if (!foundUser) return res.sendStatus(401);

    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
        const roles = Object.values(foundUser.roles)

        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "username": foundUser.password.username,
                    "roles": roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30min' }
        );
        const refreshToken = jwt.sign(
            { "username": foundUser.password.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );

        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();        

        res.json({ accessToken, refreshToken })
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };