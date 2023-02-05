import connectDB from '@/utils/connectDB'
import User from '@/models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';





const login_ver = async (req, res) => {
    const data = req.body;
    const { email, password } = data;

    // connecting to database
    await connectDB();

    if (!email || !password) {
        return res.status(400).json({ error: "Please enter all fields" })
    }

    try {
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(400).json({ error: "User does not exist" })
        }
        if (user) {
            bcrypt.compare(password, user.password, (error, isMatch) => {
                if (error) {
                    console.log("i am a bcrypt catch  block  in =>" + error)
                }
                if (isMatch) {
                    const token = jwt.sign({ user }, `${process.env.secret}`, { expiresIn: '30d' });
                    const finalData = { token, user }
                    return res.status(200).send(finalData)

                }
                else {
                    return res.status(400).json({ error: "Password isn't correct" })
                }
            })
        }
    } catch (error) {
        console.log("i am  main in login catch block => " + error)
        return res.status(500).json({ error: "Something went wrong" })
    }
}


module.exports = login_ver