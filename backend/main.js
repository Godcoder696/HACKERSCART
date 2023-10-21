require("dotenv").config();
const express= require("express")
const mongoose= require("mongoose")
const bodyParser= require("body-parser")

const app= express()

const PORT= process.env.PORT || 4000

// body-parser

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

// listen 

app.listen(PORT,()=>{
    console.log("Hello world!");
})

// DB Connection
mongoose.connect(process.env.URI)
const db= mongoose.connection

// Error Handling of DB
db.on("error",(error)=>{
    console.log(error);
})
// connection with DB Established
db.once("open",()=>{
    console.log("Connecction Established from DB!");
})

app.use("",require("./routes/routes"))
