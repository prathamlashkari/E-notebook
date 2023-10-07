const mongoose = require('mongoose');
const { Schema } = mongoose;

const Userschema = new Schema({
    name : {
        type : String,
        requied : true
    },
    email : {
        type : String,
        requied : true,
        unique : true
    },
    password : {
        type : String,
        requied : true
    },
    Date : {
        type : Date,
        default : Date.now
    }
})
const User = mongoose.model('user',Userschema)
module.exports = User;