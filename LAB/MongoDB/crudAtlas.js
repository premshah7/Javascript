const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const students = require('./stinfo');

mongoose.connect("mongodb+srv://Prem_7:Prem%40123@cluster0.2zd61.mongodb.net/Stu_Info")
    .then( ()=>{
        console.log("Connected to MongoDB");
        const app = express();
        app.use(express.json())
        app.use(bodyParser.urlencoded({extended:false}));


        app.get('/students',async (req,res)=>{
            const student = await students.find();
            res.send(student);
        });

        //GET_ELEMENT_BY_ENROLL_NUMBER
        app.get('/students/:enroll',async (req,res)=>{
            const ans = await students.findOne({enroll:req.params.enroll});
            res.send(ans);
        });
    
        //POST_METHOD  ||  CREATE_METHOD
        app.post('/students',async (req,res)=>{
            const st = new students({...req.body});
            const ans = await st.save();
            res.send(ans);
        });

        //UPDATE_METHOD
        app.patch('/students/:enroll',async (req,res)=>{
            const st = await students.findOne({enroll : req.params.enroll});
            st.name = req.body.name;
            await st.save();
            res.send(st);
        });

        //DELETE_METHOD
        app.delete('/students/:enroll',async (req,res)=>{
            const ans = await students.deleteOne({enroll:req.params.enroll});
            res.send(ans)
        })
        app.listen(3000,()=>{
            console.log("Server is running on port 3000");
        })
    })
