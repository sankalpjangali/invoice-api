const { default: mongoose } = require("mongoose")
const mongodb=require("mongoose")
const product=new mongodb.Schema({
    product_id:{
        type:Number,
        required:true,
        unique:true
    },
    product_name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})
const information=new mongoose.Schema({
    date:{
        type:Date,
        required:true
    },
    due_date:{
        type:Date,
        required:true,
    }
})
const userSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
   ZIP:{
        type:Number,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    Country:{
        type:String,
        required:true
    },
    Product:[product],
    information:[information]
}) 
product.plugin(autoIncrement.plugin, {
    model: 'product',
    field: 'product_id',
    startAt: 1,
    incrementBy: 1
  });
  
userSchema.plugin(autoIncrement.plugin, {
    model: 'user',
    field: 'id',
    startAt: 1,
    incrementBy: 1
  });
  
const user=mongoose.model("User",userSchema)
module.exports=user