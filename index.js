const express = require("express");
const connect = require("./config/config");
const { default: mongoose } = require("mongoose");
const app = express();
require("dotenv").config();
app.use(express.json());

connect();

app.use('/api/events',require('./routes/routes'))
  

const port = 3000;
app.listen(port, () => {
  console.log(`app is runing on ${port}`);
});
