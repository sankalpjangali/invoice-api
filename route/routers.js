const express=require("express")
const {starturl,createinvoice}=require("../controllers/controller.js")
const routeurl=express.Router()
routeurl.get("/",starturl)
routeurl.post("/createInvoice",createinvoice)
module.exports=routeurl