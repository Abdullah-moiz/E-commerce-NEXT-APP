import connectMongo from '@/utils/connectDB'
import User from '../../../models/User'
import fs from 'fs'

export const logged_in = async (req, res) => {
    const data = req.body;
    return res.status(200).json({data});
}