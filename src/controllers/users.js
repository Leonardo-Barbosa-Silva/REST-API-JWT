const userModel = require('../models/user.js')
const bcrypt = require('bcrypt')

module.exports = {

    async userRegister(req, res) {
        try {
            const { name, email, password } = req.body

            if (!name || !email || !password) {
                res.status(400).json({ error: 'Please add all required text fields' })
                return
            }

            if (await userModel.findOne({ email })) {
                return res.status(400).json({ error: 'User already exists' })
            }

            const userCreated = await userModel.create({
                name,
                email,
                password
            })

            userCreated.password = undefined

            res.status(201).json({
                message: 'Successfully register',
                item: userCreated
            })
            
        } catch (error) {
            res.status(404).json({ error: error.message })
        }
    },

    async userAuth(req, res) {
        try {
            const { email, password } = req.body

            const user = await userModel.findOne({ email }).select('+password')

            if (!user) {
                return res.status(400).json({ error: 'User do not exists' })
            }

            if (!await bcrypt.compare(password, user.password)) {
                return res.status(400).json({ error: 'Invalid user password' })
            }

            user.password = undefined

            res.status(200).json({
                message: 'Successfully user authentication',
                item: user
            })

        } catch (error) {
            
        }
    }
}