const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id : Number,
    name :  String,
    enroll : Number,
    email : String,
});

module.exports = mongoose.model("students",schema);