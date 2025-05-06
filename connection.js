const mongodb=require("mongoose")
function connect(url){
    mongodb.connect(url).then(console.log("connected to mongoose")).catch((err)=>{
        console.log("something went wrong",err)
    })
}
module.exports=connect