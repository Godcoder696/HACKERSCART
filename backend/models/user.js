const mongoose= require("mongoose")

const users= new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    orders:{
        type: Array,
    },
    bill:{
        type: Number
    },
    orderOn:{
        type: Date,
        default: Date.now()
    }
})

module.exports= mongoose.model("users",users);