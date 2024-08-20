const express = require('express')
const fs = require('fs')
const app = express();

app.get('/abc',(req,res)=>{
    fs.readFile('abc.txt',(err,data)=>{
        res.write(data);
        return res.send();
    });
})

// app.get('/contact',(req,res)=>{
//     const ab = fs.readFile('contact.txt');
//     res.send(ab.toString());
// })

app.get('/contact',(req,res)=>{
    fs.readFile('contact.txt',(err,data)=>{
        res.write(data);
        return res.send();
    });
})


app.listen(3100,()=>{
    console.log("Server")
});