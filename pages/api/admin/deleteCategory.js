import connectDB from "@/utils/connectDB";
import Category from "@/models/Category";

export default async (req, res) => {
    await connectDB();
    const { id } = req.query;
    try {
        await Category.findByIdAndDelete(id);
        return res.status(200).json({ msg: "category deleted successfully" });
    }
    catch (error) {
        console.log('error in deleting Category data (backend) => ' + error);
        return res.status(405).json({ error: "cannot delete category" });
    }
};