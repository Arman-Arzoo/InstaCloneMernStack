const router = require("express").Router();
const authController = require("../controller/authController")
const checkuserLogin = require('../MiddelWare/checkLogin')


// users related route 
router.get('/',authController.home)
router.get('/protected',checkuserLogin,authController.protected);
router.post('/signup',authController.signUp)
router.post('/signin',authController.signIn)

router.get('/user/:id',checkuserLogin,authController.getProfile)




module.exports = router