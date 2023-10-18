const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    password:{ type: String, required: true }
},
    {
        timestamps: true
    })

const User = model('user', userSchema)

module.exports = User