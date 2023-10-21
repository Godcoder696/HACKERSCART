const express= require("express")
const router= express.Router()
const users= require("../models/user")
const items= require("../models/items")

// Add Item 
router.get("/allItems",(req,res)=>{
    res.json({name:"Lakshay"});
})

module.exports= router