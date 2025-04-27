const mongodb=require("mongoose")
function connect(url){
    mongodb.connect(url).then(console.log("connected to mongoose")).catch((err)=>{
        console.log("something went wrong")
    })
}
module.exports=connect