const mongoose = require("mongoose");
const Post = mongoose.model('Post')

exports.createPost = async (req,res)=>{
    
    try {
        
        const {tittle,body}= req.body;
        if(!tittle || !body){
            return res.status(422).json({msg:"please enter the field"})
        }
        
        const post = new Post({
            tittle,
            body,
            postedBy:req.user

        })
        
        const newPost = await post.save();
        res.json({newPost});
    } catch (error) {
        
        return res.status(400).json({msg:"could post"})
    }
}

exports.getPosts = async (req , res ) => {

   try {
    const posts = await Post.find().populate('postedBy', '_id name')
    res.json({posts})
       
   } catch (error) {
       return res.status(400).json({msg:'Fail loading post'})
   }

}