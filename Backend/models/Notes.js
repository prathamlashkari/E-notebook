const mongoose = require('mongoose');
const { Schema } = mongoose;

const Notesschema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    title : {
        type : String,
        requied : true
    }, 
    description : {
        type : String,
        requied : true
    },
    tag : {
        type : String,
        default : "General"
    },
    Date : {
        type : Date,
        default : Date.now
    }
})

const Notes = mongoose.model('notes',Notesschema);
module.exports  = Notes