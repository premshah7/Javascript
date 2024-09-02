const express = require('express');
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser');

const db = mongoose.connect;
const connectionString = "mongodb://localhost:27017/Student_Info" ;
app.use(bodyParser.urlencoded);
db(connectionString)
db.on("error" , (error)=>{console.log('error')});
db.once("open" , (opne)=>{console.log('connectd')});
app.listen(3000,()=>{
    console.log("Connected at 3000");
})


//getByAll
app.get('/students' , (req,res)=>{
    res.send(students);
});

//getById
app.get('/home/:id' , (req,res)=>{
    const ans = students.findIndex(stu=>(stu.id == req.params.id))
    req.send(ans);
});

//Create
app.post('/students' , (req,res)=>{
    students.push(req.body);
    res.send("Student Created");
});

//Update
app.patch('/students/:id' , (req,res)=>{
    const ans = students.findIndex(stu=>(stu.id == req.params.id))
    students[ans] = req.body;
    res.send("Edited");
});

//Delete
app.delete('/students/:id' , (req,res)=>{
    const ans = students.findIndex(stu=>(stu.id == req.params.id))
    students.splice(ans , 1);
    res.send("Deleted");
});

//Running
app.listen(3000 , ()=>{
    console.log("Server running@3000")
});