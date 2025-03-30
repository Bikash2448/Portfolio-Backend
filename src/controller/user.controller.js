import { User } from "../model/user.model.js";

export const saveRequest = async function(req,res){
    const {fullName, email, mobile, message} = req.body

    try {
        const response = [fullName,email,mobile,message].some((e)=>e.trim()==="")
    
        if(response){
            return res.status().json({
                message:"All filed require"
            })
        }
    
        const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({message: "Email is already registered!"});
            }
    
        const newuser = await User.create({
            fullName,
            email,
            mobile,
            message
        })
    
        return res.status(200).json({message:newuser})
    
    
    } catch (error) {
        return res.status(400).json({message:error})
    }
}