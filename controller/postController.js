const mongoose = require("mongoose");
const Post = mongoose.model('Post')

exports.createPost = async (req,res)=>{
    
    try {
        
        const {tittle,body,pic}= req.body;
        if(!tittle || !body ||!pic){
            return res.status(422).json({msg:"please enter the field"})
        }
        
        const post = new Post({
            tittle,
            body,
            photo:pic,
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

exports.myPost = async (req , res ) => {

    try {
        const mypost = await Post.find({postedBy:req.user._id}).populate("postedBy",'_id name');
        res.status(200).json({mypost})
        
    } catch (error) {
        return res.status(400).json({msg:'Sorry could not get post'})
    }

}

exports.myLike =  (req , res ) => {
    Post.findByIdAndUpdate(req.user.postid,{
        $push:{like:req.user._id}
    },{
        new:true
    }).exec(err,result)

    if(err){
        return res.status(422).json({msg:err})
    }
    else{
        res.json();
    }
}

exports.myLike =  (req , res ) => {
    Post.findByIdAndUpdate(req.user.postid,{
        $pull:{like:req.user._id}
    },{
        new:true
    }).exec(err,result)

    if(err){
        return res.status(422).json({msg:err})
    }
    else{
        res.json();
    }
}