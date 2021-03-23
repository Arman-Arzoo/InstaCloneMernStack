const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    tittle:{
        type:String,
        require:true
    },
    body:{
        type:String,
        require:true
    },
    photo:{
        type:String,
        default:"url"

    },
    postedBy:{
        type:ObjectId,
        ref:"User"
    },
    
});

mongoose.model('Post',postSchema)