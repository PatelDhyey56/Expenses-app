import mongoose  from "mongoose";
const { Schema } =mongoose;

const expence_customer = new Schema({
    title :{
        type:String,
        require:true
    },
    price :{
        type:Number,
        require:true
    },
    date :{
        type:String,
        require:true
    },
})

export default new mongoose.model("Expancecustomer", expence_customer)