const mongoose = require('mongoose');
const User = mongoose.model('user');
const bcrypt = require('bcryptjs')

exports.home = (req,res)=>{
    res.send("hello for home")
}

exports.signUp = async(req,res)=>{
    try {
        const {name, email, password} = req.body
   
    if(!name || !email || !password){
        return res.status(422).json({msg:"please fill out the field"})
    }

    const ExistUser = await User.findOne({email});

    if(ExistUser){
        return res.status(422).json({msg:"User already exist"})
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password,salt)

    
    const newUser = new User({
        email,
        password:hashPassword,
        name
    })

   const savedUser = await newUser.save();
   res.status(200).json(savedUser)
    } catch (err) {
        
    }

 res.status(400).json({msg:"Unfortuanaly can't register user"})
    
}

