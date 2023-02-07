import mongoose from "mongoose";
import User from "@/models/User";


const getUserData = async (req , res) => 
{
    const data = await User.find({"isAdmin" : false});
    
    return res.status(200).send(data)

}

export default getUserData;