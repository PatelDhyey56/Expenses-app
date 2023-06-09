import { Router } from "express"
import Customer from '../Schema/Signupschema.js'
import jwt from "jsonwebtoken"

const router =Router()

router.get('/',async(req,res)=>{
    const register = await Customer.find({})
    res.json({data:register})
})
router.post('/login',async(req,res)=>{
    const { email , password} =req.body
    const register = await Customer.findOne({ email })
    if(!register){
        res.status(406).json({message:"User not exiest..."})
    }
    // console.log(register.password)
    // const checkpass =register.password
    // if(!(checkpass === password)){
    //     res.status(406).json({message:"User exiest but password not matched..."})
    // }
    else{

        const payload ={
            name:email,
        }
        const token =jwt.sign(payload,'secret')
        // console.log(token)
        res.json({message:"user exiest" , token})
    }
})
router.post('/', async (req,res)=>{
    const { fname , lname , email , password , repassword} =req.body
    if(password===repassword){
        const customer = new Customer({
            email:email,
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