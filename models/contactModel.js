const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    user_id:{
        type : mongoose.Schema.Types.ObjectId,
        required:true,
        ref : "User",
    },
    name:{
        type:String,
        required: [true , "please enter contact name"],
    },
    email:{
        type:String,
        required: [true , "please enter email"],
    },
    phone:{
        type:String,
        required: [true , "please enter contact number"],
    },
},
{
    timestamps : true,
}
)

module.exports = mongoose.model("Contact" ,contactSchema);