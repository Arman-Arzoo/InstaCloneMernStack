const router = require("express").Router();
const checkuserLogin = require('../MiddelWare/checkLogin')
const postController = require('../controller/postController')


// users Post related route
router.post('/createpost',checkuserLogin,postController.createPost)
router.get('/getposts',checkuserLogin,postController.getPosts)
router.get('/mypost',checkuserLogin,postController.myPost)
router.put('/like',checkuserLogin,postController.myLike)
router.put('/unlike',checkuserLogin,postController.myUnLike)
router.put('/comment',checkuserLogin,postController.comment)
module.exports = router