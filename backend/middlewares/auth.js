// Autenticaciones
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET
const Users = require('../models/usersModels')

module.exports = {
    generateToken: (user) => {
        delete user.password
        return jwt.sign({ user: user._id }, JWT_SECRET, { expiresIn: 86400 })
    },

    authToken: (req, res, next) => {
        const token = req.get('authToken')

        if (!token) {
            return res.status(401).send({ msg: 'Do not have a Token, authorization denied' })
        }

        jwt.verify(token, JWT_SECRET, async (err, payload) => {
            if (err) {
                return res.status(401).send({ msg: 'Token is not valid' })
            }

            const dateNow = new Date()
            if (payload.exp < dateNow.getTime() / 1000) {
                return res.status(401).send({ msg: 'Token has expired' })
            }

            req.user = await Users.findById(payload.user)
            
            next()
        })

    },
}