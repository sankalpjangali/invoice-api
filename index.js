const express=require("express")
const routeurl=require("./route/routers.js")
const bodyparser=require("body-parser")
const connectomongoose=require("./connection.js")
const app=express()
connectomongoose("mongodb://localhost:27017/user")
app.use(bodyparser.json());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",routeurl)
app.listen(3000,()=>{
    console.log("server is started at http://localhost:3000/")
})