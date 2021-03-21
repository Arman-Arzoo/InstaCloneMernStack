const router = require("express").Router();
const checkuserLogin = require('../MiddelWare/checkLogin')
const postController = require('../controller/postController')



// users Post related route
router.post('/createpost',checkuserLogin,postController.createPost)



module.exports = router