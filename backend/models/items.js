const mongoose= require("mongoose")

const items= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
})

module.exports= mongoose.model("items",items)