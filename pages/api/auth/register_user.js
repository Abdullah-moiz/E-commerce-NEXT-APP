import User from "@/models/User";
import connectDB from "@/utils/connectDB";




const register_user = async (req, res) => {
    const data = req.body;


    // connecting to the database
    await connectDB();

    // destructuring the data
    const { name, email, password } = data;

    //
    if (!name || !email || !password) {
        return res.status(400).json({ error: "Please fill all the fields" })
    }


    try {
        const user = await User.findOne({ email: email });
        if (user) {
            return res.status(400).json({ error: "Email already exists" })
        }
        else {
            await User.create(data);
            return res.status(201).json({ message: " Account created Successfully " })
        }

    } catch (error) {
        console.log("error in saving user data => " + error.message)
        return res.status(500).send({
            message: 'Something went wrong',
        });
    }
}

module.exports = register_user;