const mongoose = require('mongoose');
const schema = mongoose.Schema({
    customer_id : Number,
    customers_name : String,
    order_item : Number,
    no_of_item : Number,
    table_no : Number,
    category : String
})

module.exports = mongoose.model("customers",schema);