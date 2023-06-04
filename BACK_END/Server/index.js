import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
const port=8000
const app=express()
app.use(cors())


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
const cust = new mongoose.Schema({
    name:{
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
const customer = new mongoose.model("customer", cust)


app.get('/',(req,res)=>{
    res.send("hii")
})

app.listen(port,()=>{
    console.log("listning.....")
})