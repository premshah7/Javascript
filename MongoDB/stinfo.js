const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _id : mongoose.ObjectId,
    name :  String,
    enroll : Number,
    email : String,
});

module.exports = mongoose.model("students",schema);