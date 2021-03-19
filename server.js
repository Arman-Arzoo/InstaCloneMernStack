const express = require('express');
const dotenv = require("dotenv");
const app = express();

const {PORT,DB} = require("./config/keys")

app.listen(PORT,()=>{console.log("server is running on port",PORT)})