const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const students = require('./stinfo');

mongoose.connect("mongodb+srv://Prem_7:Prem%40123@cluster0.2zd61.mongodb.net/Stu_Info")
    .then( ()=>{
        // console.log("Connected to MongoDB");
        const app = express();
        app.use(express.json())
        app.use(bodyParser.urlencoded({extended:false}));


        app.get('/students',async (req,res)=>{
            const student = await students.find();
            res.send(student);
        });

        app.listen(3000,()=>{
            console.log("Server is running on port 3000");
        })
    })
