const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello world from first JS")
})

app.listen(3000)