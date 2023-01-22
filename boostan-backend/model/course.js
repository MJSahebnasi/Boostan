const mongoose = require('mongoose')

let course = new mongoose.Schema({
    name:String,
    code:String,
    instructor:String,
    capacity:Number,
    registered:Number,
    registerars:Array
})


module.exports = mongoose.model("Course", course);