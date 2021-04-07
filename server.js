// All use dependencies importing
const express = require('express');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cor = require("cors")



// invoking the express Server
const app = express();
app.use(express.json());
app.use(cor());

// destructure enviornmental variables
const {PORT,DB} = require("./config/keys");

// Start app listening server
app.listen(PORT,()=>{console.log("server is running on port",PORT)});

// connecion to Mongo Database 
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});

mongoose.connection.on("connected",()=>{console.log("connected to mongodb")});

mongoose.connection.on("error",(err)=>{console.log("error connecting ",err)});

// model accessibility
require('./model/userModel');
require('./model/userPost');
// router useability
app.use(require('./route/authRoute'));
app.use(require('./route/postRoute'));
//app.use(require('./route/userRoute'));


module.exports = app