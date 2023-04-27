const schema = require("../Model/StudentData")
async function storeData(req,res){
    let sdata = req.body
    console.log(sdata)
     sdata.forEach( ele => {
        let data =  new schema({
            name:ele.sname,
              contact:ele.no,
            
              coursename:ele.cname,
              price:ele.price,  
            
              paidamt:ele.pamt,
              bal:ele.ramt

        })
        data.save()
    });
    res.send({msg:  "Student Data Saved Successfully!!"})
}
async function getlist(req,res){
    let data = await schema.find()
    res.send(data)
}
async function getlistbyid(req,res){
let data = await schema.find({_id:req.body.id})
res.send(data)
}
async function updatedata(req,res){
console.log(req.body)
let update = await schema.findOneAndUpdate({_id:req.body.id},{$set:{paidamt:req.body.val.paid,bal:req.body.val.bal}})
res.send({msg:"Ammount Updated Successfully"})
}
module.exports={storeData,getlist,getlistbyid,updatedata}