const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : [true , "please enter user name"],
    },
    email : {
        type : String,
        required : [true , "please add  ther user email"],
        unique : [true , "email address already taken"],
    },
    password : {
        type : String,
        required : [true , "please enter user password"],
        
    }
},
{
    timestamp : true
});


module.exports = mongoose.model("User" , userSchema);