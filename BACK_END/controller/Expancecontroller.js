import Expancecustomer from '../Schema/Expanceschema.js'

export const getexpence = async (req,res)=>{
    const register = await Expancecustomer.find({})
    res.json({data2:register})
    // res.send("hii")
}

export const postexpence =async (req,res)=>{
    const { title , price , date} =req.body
    const  expancecustomer = new Expancecustomer({
           title:title,
           price:price,
           date:date,
        })
        await expancecustomer.save()
        res.json({message:"sucess...."})
}
export const deleteexpence =async(req,res)=>{
    // console.log(req.params)
    await Expancecustomer.deleteOne({_id:req.params.id})
    res.json({message:"sucess...."})
}
export const patchexpence =async(req,res)=>{
    // console.log(req.params)
    await Expancecustomer.updateOne({_id : req.params.id},{$set : req.body})
    res.json({message:"sucess...."})
}