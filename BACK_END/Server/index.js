import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'

const port=8000
const app=express()
app.use(cors())
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.send("hii")
})
app.get('/login',async(req,res)=>{
    const register = await Customer.find({})
    res.json({data:register})
})
app.post('/login', async (req,res)=>{
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

app.listen(port,()=>{
    console.log("listning.....")
})


main().catch(err => console.log(err));
    
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/expensess')
    .then(()=>{
        console.log("connected...")
    })
    .catch(()=>{
        console.log("Not connected......")  
    })
}
const cust_schema = new mongoose.Schema({
        fname :{
            type:String,
            require:true
        },
        lname :{
            type:String,
            require:true
        },
        email :{
            type:String,
            require:true
        },
        password :{
            type:String,
            require:true
        },
        repassword:{
            type:String,
            require:true
        }
})
const Customer = new mongoose.model("Customer", cust_schema)