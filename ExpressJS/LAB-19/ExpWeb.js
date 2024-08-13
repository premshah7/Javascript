const express = require('express');
const app = express();

app.get('/about',(req,res)=>{
    res.send("Hello world from About")
})

app.get('/home',(req,res)=>{
    res.send("Hello world from Home")
})

app.get('/contact',(req,res)=>{
    res.send("Hello world from Contact")
})

app.get('/life',(req,res)=>{
    res.send("Hello world from Life")
})

app.get('/Bye',(req,res)=>{
    res.send("Hello world from Bye")
})

app.listen(3100)
