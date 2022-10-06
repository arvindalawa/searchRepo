const express=require('express');
const getData=require('./dbConnect');
const app=express();
app.get("/api",async (req,res)=>{
const connection=await getData();
const result=await connection.find({}).toArray();
console.log(result);
res.json(result);
})
app.listen(5000)