
const mongoose = require('mongoose')
mongoose.connection.close()
//mongoose.connect('mongodb://vladernn:go3234vlad@ds155130.mlab.com:55130/mongotest');
const Schema = mongoose.Schema
const ProductSchema = Schema({
    name: String,
    picture: String,
    price: {type: Number,default: 0},
    categeries: {type: String, enum: ['computers','phones','accesories']},
    description : String
})
module.exports = mongoose.model('Product',ProductSchema)