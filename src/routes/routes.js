const router = require('express').Router()
const { userRegister, userAuth } = require('../controllers/users.js')

// User Routes
router.post('/api/v1/users/register', userRegister)
router.post('/api/v1/users/login', userAuth)




module.exports = router