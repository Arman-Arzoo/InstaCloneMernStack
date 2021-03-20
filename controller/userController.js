const mongoose = require('mongoose');
const User = mongoose.model('user');

exports.home = (req,res)=>{
    res.send("hello for home")
}

exports.signUp = async(req,res)=>{
    const {name, email, password} = req.body
   
    if(!name || !email || !password){
        return res.status(422).json({msg:"please fill out the field"})
    }

    const ExistUser = await User.findOne({email});

    if(ExistUser){
        return res.status(422).json({msg:"User already exist"})
    }

    const newUser = new User({
        email,
        password,
        name
    })

   const savedUser = await newUser.save();
   res.status(200).json(savedUser)

//    res.status(200).json({msg:"successfuly save into the database"})
    
}

