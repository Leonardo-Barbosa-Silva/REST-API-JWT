const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

userSchema.pre('save', async function(next) {
    const salt = 10
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash

    next()
})




module.exports = mongoose.model('users_system', userSchema)