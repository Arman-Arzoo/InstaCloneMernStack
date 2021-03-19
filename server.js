// All use dependencies importing
const express = require('express');
const dotenv = require("dotenv");
const mongoose = require("mongoose");

require('./model/userModel');

// invoking the express Server
const app = express();

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

