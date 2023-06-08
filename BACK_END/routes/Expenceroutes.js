import { Router } from "express"
import Expancecustomer from '../Schema/Expanceschema.js'

const router =Router()

router.get('/',async(req,res)=>{
    // const register = await Expancecustomer.find({})
    // res.json({data:register})
    res.send("hii")
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

export default router