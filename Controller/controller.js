const Master=require("../model/schema")

const Controller={
    get:async(req,res)=>{
        try{
            const data=await Master.find()
            res.json(data)
        }
        catch(err){
            res.json(err)
        }
    },
    post:async(req,res)=>{
        try{
            const data=await Master.create(req.body)
            res.json(data)
        }
        catch(err){
            res.json(err)
        }
    },
    delete:async(req,res)=>{
        try{
            const data=await Master.findById
            (req.params.id)
            data.remove()
            res.json(data)

        }
        catch(err){
            res.json(err)
        }
    },
    patch:async(req,res)=>{
        try{
            const data=await Master.findByIdAndUpdate
            (req.params.id,req.body)
            res.json(data)

        }
        catch(err){
            res.json(err)
        }
    }

}
module.exports=Controller
