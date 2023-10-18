const Users = require('../models/usersModels')
const auth = require ('../middlewares/auth')


module.exports = {
    get: async (req, res) => {
        let users= await Users.find({})
        return res.status(200).send({msg: 'Users pull success', data:users})
    },

    getById: async (req, res) => {
        let id = req.params.id
        let user = await Users.findById(id)
        if(!user){
            return res.status(404).send({msg: 'User not found'})
        }
        return res.status(200).send({msg: 'User found by id', data:user})
    },
}