import { Router } from "express"
import Customer from '../Schema/Loginschema.js'

const router =Router()

router.get('/',async(req,res)=>{
    const register = await Customer.find({})
    res.json({data:register})
})
router.post('/', async (req,res)=>{
    const { fname , lname , mail , password , repassword} =req.body
    if(password===repassword){
        const customer = new Customer({
            email:mail,
            fname:fname,
            lname:lname,
            password:password,
            repassword:repassword,
        })
        await customer.save()
        res.json({message:"sucess...."})
    }
    else{
        res.json({message:"invalid details....."})
    }
})

router.delete('/:id', async(req,res)=>{
    // console.log(req.params)
    await Customer.deleteOne({_id:req.params.id})
    res.json({message:"sucess...."})
})

router.patch('/:id', async(req,res)=>{
    // console.log(req.params)
    await Customer.updateOne({_id : req.params.id},{$set : req.body})
    res.json({message:"sucess...."})
})

export default router