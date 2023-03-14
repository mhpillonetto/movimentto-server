const User = require('../model/User');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const accessTokenSecret = '39b84cc0130985706a8fc236cf4ce0a8f837d64bf550030745c47b099b2a683595759e7cc58ae7ad9b738e356938c3078d13401d33fca5734d6e3e58300d93aa'
const refreshTokenSecret = '2b096f59a22214ce23ca736439d7a7b860aae006cc99750bad418ac8079e5f16349af3050317775f12cc2704c88fec527ec0b104b7283ff979be06854a52486c'

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;

    if (!user || !pwd) return res.status(400).json({ "message": 'Required Fields missing' });

    const foundUser = await User.findOne({ username: user }).exec();
    if (!foundUser) return res.sendStatus(401);

    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
        const roles = Object.values(foundUser.roles)

        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "username": foundUser.password.username,
                    "roles": roles
                }
            },
            accessTokenSecret,
            { expiresIn: '15min' }
        );
        const refreshToken = jwt.sign(
            { "username": foundUser.password.username },
            refreshTokenSecret,
            { expiresIn: '1d' }
        );

        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();        

        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 14 * 60 * 60 * 1000 });
        res.json({ accessToken })
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };