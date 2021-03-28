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
        console.log("from created post ",req.body)
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
        console.log(req.user)
        
    } catch (error) {
        return res.status(400).json({msg:'Sorry could not get post'})
    }

}

exports.myLike =  async(req , res ) => {

   console.log(req.user)
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{like:req.user._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })


//  try {
//     const myLike= await Post.findByIdAndUpdate(req.user.postId,{
//         $push:{like:req.user._id}
//     },{
//         new:true
//     });

//      const result = myLike.exec()
//      res.json(result)
     
//  } catch (error) {
//      return res.status(422).json({msg:"Error Occured",error})
     
//  }
  
}

exports.myUnLike =  async(req , res ) => {

     Post.findByIdAndUpdate(req.body.postId,{
         $pull:{like:req.user._id}
     },{
         new:true
     }).exec((err,result)=>{
         if(err){
             return res.status(422).json({error:err})
         }else{
             res.json(result)
         }
     })
   
 }

exports.comment = async (req ,res ) =>{

    const comment = {
        text:req.body.text,
        postedBy:req.user._id
    }
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{comments:comment}
    },{
        new:true
    })
    .populate("comments.postedBy","_id name")
    .populate("postedBy","_id name")
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
}
 
exports.deleteComment = async (req , res )=>{
    
        Post.findOne({_id:req.params.postId})
        .populate("postedBy","_id")
        .exec((err,post)=>{
            if(err || !post){
                return res.status(422).json({error:err})
            }
            if(post.postedBy._id.toString() === req.user._id.toString()){
                  post.remove()
                  .then(result=>{
                      res.json(result)
                  }).catch(err=>{
                      console.log(err)
                  })
            }
        })
    
}
