const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const customers = require('./Customers');

mongoose.connect('mongodb+srv://Prem_7:Prem%40123@cluster0.2zd61.mongodb.net/')
    .then(()=>{
        console.log('connected to db');
        const app = express();
        app.use(bodyParser.urlencoded({extended:false}));
        app.use(express.json());


        app.get('/customer', async (req,res)=>{
            const ct = await customers.find();
            res.send(ct);
        })

        app.get('/customer/:customer_id' , async (req,res)=>{
            const ct = await customers.findOne({customer_id : req.params.customer_id});
            res.send(ct);
        })

        app.post('/customer' , async (req,res) =>{
            const ct = new customers({...req.body});
            const ans = await ct.save();
            res.send(ans);  
        })

        app.delete('/customer/:customer_id' , async (req,res)=>{
            const ct = await customers.deleteOne({customer_id:req.params.customer_id});
            res.send(ct);
        })

        app.patch('/customer/:customer_id' , async (req,res) => {
            const ct = await customers.findOne({customer_id : req.params.customer_id});
            ct.customers_name = req.body.customers_name;
            const ans = await ct.save();
            res.send(ans);
        })


        app.listen(3000)
    })