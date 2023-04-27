const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
const port = process.env.PORT
const mainRoute=require('./Routes/index')
const cors = require("cors");
const app = express();
const { urlencoded } = require('express');
app.use(express.urlencoded({ extended: false }));
const path = require("path");
var price;
app.use(express.static("public"));
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/Students",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("Connected")
})




app.use(
  cors({
    origin: "*",
  })
);




app.use('/api/v1/', mainRoute)

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Work on ${port}`);
});