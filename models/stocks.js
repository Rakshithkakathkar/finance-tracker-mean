const mongoose = require('mongoose');

//Schema
const StockSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    avgPrice:{
        type: Number,
        required: true
    },
    investedAmt:{
        type: Number,
        required: true
    }
})

//export the schema
const IStock = module.exports = mongoose.model('Stock', StockSchema);