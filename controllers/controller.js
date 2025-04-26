const { error } = require("console")

async function starturl(req,res) {
    res.json({
        success:true,
        msg:"you are at the start endpoint"
    })
}
async function createinvoice(req,res) {
    try{
        const client_name=req.body.client_name
        const client_email=req.body.client_email
        const client_items=req.body.items
        const due_date=req.body.due_date
        client_items.forEach(item => {
            console.log(item.name);
          });
        res.json({
            success:true,
            
            msg:`${client_email},${client_items}`
        })

    }
    catch(e){
        console.log(e)
        res.status(500).json({
            success:false,
            error:"something went wrong at server sorry"
        })
    }
}
module.exports={
    starturl,
    createinvoice
}