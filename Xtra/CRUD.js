const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

const students = [
    {
        faculty:'devansh',
        product:'C++',
        book:26
    },
    {
        faculty:'deep',
        product:'OOPJ',
        book:62
    },
    {
        faculty:'Neel',
        product:'Prog with WT',
        book:19
    },
    {
        faculty:'Jineesh',
        product:'printIng',
        book:23
    }

]

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