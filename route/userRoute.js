const router = require("express").Router();
const userController = require("../controller/userController")
const checkuserLogin = require('../MiddelWare/checkLogin')


// users related route 
router.get('/',userController.home)
router.get('/protected',checkuserLogin,userController.protected);
router.post('/signup',userController.signUp)
router.post('/signin',userController.signIn)

router.get('/user/:id',checkuserLogin,userController.getProfile)




module.exports = router