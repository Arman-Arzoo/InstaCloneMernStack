const router = require("express").Router();
const checkuserLogin = require('../MiddelWare/checkLogin')
const userController = require('../controller/userController')

router.get('/user/:id',checkuserLogin,userController.oUser);

router.get('/follow',checkuserLogin,userController.follow);

router.get('/unfollow',checkuserLogin,userController.unFollow);

router.get('/updatepic',checkuserLogin,userController.updatePic);

router.get('/search-user',checkuserLogin,userController.serachUser);


module.exports = router

