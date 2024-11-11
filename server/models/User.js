const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:String,
    country:String,
    password:String,
    phone:Number
})
const detailsModel = mongoose.model("users",UserSchema)
module.exports=detailsModel