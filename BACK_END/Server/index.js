import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import loginroute from '../routes/loginroutes.js'
import expenceroutes from '../routes/Expenceroutes.js'

const port=8000
const app=express()
app.use(cors())
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.send("hii")
})

app.use('/login',loginroute)
app.use('/expence',expenceroutes)

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