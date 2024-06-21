const express = require('express')
const router = express.Router()

const userSignUpController = require('../controller/userSignUp')
const userSignInController = require('../controller/userSignIn')
const userDetailsController = require('../controller/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/userLogout')
const generateOTP = require('../controller/generateOTP')
const verifyUser = require('../controller/generateOTP')
const localVariables = require('../middleware/localVariables')
const PasswordController = require('../controller/changePassword')
const authenticateToken = require('../middleware/authenticateToken')

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)
router.get('/generateOTP', verifyUser,localVariables, generateOTP)
router.post("/changePassword", authenticateToken, PasswordController)

module.exports = router