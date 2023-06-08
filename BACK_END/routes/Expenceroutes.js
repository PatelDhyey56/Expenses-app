import { Router } from "express"
import Expancecustomer from '../Schema/Expanceschema.js'

const router =Router()

router.get('/',async(req,res)=>{
    const register = await Expancecustomer.find({})
    res.json({data2:register})
    // res.send("hii")
})

router.post('/', async (req,res)=>{
    const { title , price , date} =req.body
        const  expancecustomer = new Expancecustomer({
           title:title,
           price:price,
           date:date,
        })
        await expancecustomer.save()
        res.json({message:"sucess...."})
})
router.delete('/:id', async(req,res)=>{
    // console.log(req.params)
    await Expancecustomer.deleteOne({_id:req.params.id})
    res.json({message:"sucess...."})
})

// router.patch('/:id', async(req,res)=>{
//     // console.log(req.params)
//     await Customer.updateOne({_id : req.params.id},{$set : req.body})
//     res.json({message:"sucess...."})
// })

export default router