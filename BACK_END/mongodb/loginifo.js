import mongoose from 'mongoose'

export function connect(){
    main().catch(err => console.log("hii"));
}
async function main() {
    await mongoose.connect("mongodb+srv://pateldhyey:dhyey-123@cluster0.ztvjzgg.mongodb.net/customerDB")
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

export default Customer