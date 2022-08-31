require('dotenv').config()
const express=require("express")
const DefaultData = require('./default')
require("./DB/db")

const app=express();

const port=8000 || process.env.PORT

app.listen(port,(err)=>{
    if(!err){
        console.log(`server started successfully on ${port}`)
    }
})

DefaultData()


