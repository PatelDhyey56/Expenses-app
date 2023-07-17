import Customer from '../Schema/Signupschema.js'
import jwt from "jsonwebtoken"

export const getsignup = async (req, res) => {
    const register = await Customer.find({})
    res.json({ data: register })
}
export const postlogin = async (req, res) => {
    const { email, password } = req.body
    const register = await Customer.findOne({ email })
    if (!register) {
        res.status(406).json({ message: "User not exiest..." })
    }
    // console.log(register.password)
    // const checkpass =register.password
    // if(!(checkpass === password)){
    //     res.status(406).json({message:"User exiest but password not matched..."})
    // }
    else {
        const checkPass = register.password;
        if (!(checkPass === password)) {
            res.status(406).json({ message: "Invalid password..." });   
        }
        else {
            const payload = {
                name: email,
            };
            const token = jwt.sign(payload, 'secret');
            res.json({ message: "User exists", token });
        }
    }
}
export const postsignup = async (req, res) => {
    const { fname, lname, email, password, repassword } = req.body
    if (password === repassword) {
        const customer = new Customer({
            email: email,
            fname: fname,
            lname: lname,
            password: password,
            repassword: repassword,
        })
        await customer.save()
        res.json({ message: "sucess...." })
    }
    else {
        res.json({ message: "invalid details....." })
    }
}
export const deletesignup = async (req, res) => {
    // console.log(req.params)
    await Customer.deleteOne({ _id: req.params.id })
    res.json({ message: "sucess...." })
}
export const patchsignup = async (req, res) => {
    // console.log(req.params)
    await Customer.updateOne({ _id: req.params.id }, { $set: req.body })
    res.json({ message: "sucess...." })
}