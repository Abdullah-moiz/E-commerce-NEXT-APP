import mongoose from "mongoose";
import User from "@/models/User";
import connectDB from '@/utils/connectDB'



const getUserData = async (req, res) => {

    await connectDB();


    try {
        const data = await User.find({ "isAdmin": false });
        if (data) {
            return res.status(200).send( data )
        }
        else {
            return res.status(400).json({ message: "No data found" })
        }

    } catch (err) {
        console.log('error in fetching user data for admin => ' + err)
        return res.status(500).json({ message: err.message })
    }


}

export default getUserData;