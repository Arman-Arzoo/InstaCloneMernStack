require('../model/userModel')

exports.home = (req,res)=>{
    res.send("hello for home")
}

exports.signUp = (req,res)=>{
    const {name, email, password} = req.body
   
    if(!name || !email || !password){
        return res.status(422).json({msg:"please fill out the field"})
    }

   res.status(200).json({msg:"successfuly save into the database"})
    
}

