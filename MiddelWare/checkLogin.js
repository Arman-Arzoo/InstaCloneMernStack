const jwt = require("jsonwebtoken");
const {APP_SECRET} = require("../config/keys");
const mongoose = require('mongoose');
const User = mongoose.model('user');


module.exports = async(req,res,next)=>{
    try {

      const {auth} = req.headers;
      
      if(!auth){
          return res.status(401).json({msg:"You Must Sign In"})
      }
      const token = auth.replace("Bearer " ,"");

      const verified = jwt.verify(token,APP_SECRET);

      const user = await User.findById(verified.id);

      req.user = user
      next()
        
    } catch (error) {
        return res.status(422).json({msg:"auth fail"})
    }

}