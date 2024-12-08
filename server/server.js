require("dotenv").config()

const express=require("express")
const cors =require("cors")
const corsOptions=require("./config/corsOptions")
const connectDB=require("./config/dbConnection")
const { default: mongoose } = require("mongoose")
connectDB()
const PORT=process.env.PORT||2000
const app=express()
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))
app.use("/api/tasks",require("./routes/TaskRoutes"))
app.use("/api/articals",require("./routes/ArticalRoutes"))
mongoose.connection.once("open",()=>{

    app.listen(PORT,(req,res)=>{
console.log(`runing on PORT ${PORT}`)
})
})

mongoose.connection.on("error",err=>{
    console.log("Not Succsed"+err)
})
