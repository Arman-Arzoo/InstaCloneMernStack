const router = require("express").Router();
const userController = require("../controller/userController")


// users related route 
router.get('/',userController.home)

router.post('/signup',userController.signUp)
router.post('/signin',userController.signIn)


module.exports = router