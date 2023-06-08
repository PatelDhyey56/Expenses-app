import mongoose  from "mongoose";
const { Schema } =mongoose;

const cust_schema = new Schema({
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

export default new mongoose.model("Customer", cust_schema)